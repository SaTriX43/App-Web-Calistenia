export default async function validarLogin(req,res, next) {
  const {email , pass} = req.body
  const usuarios = await leerArchivo()

  // filtra por email 
  let usuarioFiltradoEmail = usuarios.find(usuario => usuario.email === email);

  // valida email 
  if(!usuarioFiltradoEmail) {
    return res.status(400).json({error:`Su correo no existe, registrese porfavor`})
  }

  // filtra por pass 
  let usuarioFiltradoPass = usuarios.find(usuario => usuario.pass === pass)

  // valida pass 
  if(!usuarioFiltradoPass) {
    return res.status(400).json({error:`Su contraseña no es correcta`})
  }

  next()
}