import { enviarEmail } from "../servicios/emailServicio.mjs";

export async function postContacto(req, res) {
  try {
    const { nombre, email, mensaje, asunto } = req.body;

    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    
    const resultado = await enviarEmail({
      nombre,
      email,
      mensaje,
      asunto,
    });

    console.log("Resultado de enviarEmail:", resultado);

    if (!resultado.success) {
      return res.status(500).json({ error: `Error al enviar el correo: ${resultado.error}` });
    }

    res.status(200).json({
      mensaje: "Mensaje enviado correctamente.",
    });
  } catch (error) {
    console.log(`Error en postContacto: ${error.stack}`);
    res.status(500).json({ error: `No se han guardado datos: ${error.message}` });
  }
}
