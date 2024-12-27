import parques from "../datos/parquesDatos.mjs";

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
    return res.status(404).json({error: `Su resultado no ha sido encontrado con id ${parqueId}`})
  }

  res.json(resultado)
};
