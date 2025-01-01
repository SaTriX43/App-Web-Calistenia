import { leerArchivo } from "../funciones/leerEscribirEnBaseDatos.mjs";

export default async function validarLogin(req,res, next) {
  const {email , pass} = req.body
  const usuarios = await leerArchivo()

  let usuarioFiltradoEmail = usuarios.find(usuario => usuario.email === email);

  if(!usuarioFiltradoEmail) {
    return res.status(400).json({error:`Su correo no existe, registrese porfavor`})
  }

  let usuarioFiltradoPass = usuarios.find(usuario => usuario.pass === pass)

  if(!usuarioFiltradoPass) {
    return res.status(400).json({error:`Su contrasenia no es correcta`})
  }

  next()
}