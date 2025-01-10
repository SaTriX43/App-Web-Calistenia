import parques from "../datos/parquesDatos.mjs";
import { enviarEmail } from "../servicios/emailServicio.mjs";

//funcion para obtener los parques de mi base de datos
export const getParques = (req, res) => {
  const { pagina = 1, limite = 10 } = req.query; //parametros de query
  const indiceInicial = (pagina - 1) * limite;
  const indiceFinal = pagina * limite;

  const resultados = parques.slice(indiceInicial, indiceFinal);

  res.json({
    total: parques.length,
    pagina: parseInt(pagina),
    limite: parseInt(limite),
    data: resultados,
  });
};


// obtiene por id 
export const getParquesId = (req, res) => {
  const parqueId = parseInt(req.params.id);

  if (isNaN(parqueId)) {
    return res.status(400).json({error: `Su id debe de ser un numero`})
  }

  const resultado = parques.find(parque => parque.id === parqueId) 

  if(!resultado) {
    return res.status(404).json({error: `Su parque no ha sido encontrado con id ${parqueId}`})
  }

  try {
    res.json(resultado)
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};



// post 
// agregar Parque 

export async function postParque(req, res) {
  try {
    // Asegúrate de que "coordenadas" sea un objeto válido
    const coordenadas = JSON.parse(req.body.coordenadas);
    const { nombre, descripcion } = req.body;
    const imagenes = req.files; // Procesadas por multer

    if (!coordenadas || !imagenes || imagenes.length === 0) {
      return res.status(400).json({ error: 'Faltan datos: coordenadas o imágenes' });
    }

    const mensaje = `
      Se ha enviado información de un nuevo parque:
      - Nombre: ${nombre || 'No proporcionado'}
      - Descripción: ${descripcion || 'No proporcionada'}
      - Coordenadas: ${JSON.stringify(coordenadas)}
      - Imágenes: ${imagenes.map((img, index) => `Imagen ${index + 1}: ${img.originalname}`).join('\n')}
    `;

    const adjuntos = imagenes.map((img) => ({
      filename: img.originalname,
      content: img.buffer, // Buffer del archivo
    }));

    const emailInfo = {
      nombre: 'Sistema de Parques',
      email: 'hubthenics@gmail.com',
      mensaje,
      asunto: `Nuevo Parque: ${nombre || 'Sin nombre'}`,
      adjuntos,
    };

    await enviarEmail(emailInfo);

    res.status(200).json({
      mensaje: "datos enviados correctamente.",
    });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error.message);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}
