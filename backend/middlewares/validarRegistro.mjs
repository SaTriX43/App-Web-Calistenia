export default async function validarRegistro(req,res,next) {
  const {name, email, pass , pass2} = req.body;

  const usuarios = await leerArchivo()

  const usuarioEmail = usuarios.find(usuario => usuario.email === email)

  // valida si ya existe un correo similar 
  if(usuarioEmail) {
    return res.status(400).json({error: `Correo ya existente`})
  }

  // Verifica que todos los campos este presentes 
  if(!name || !email || !pass || !pass2) {
    return res.status(400).json({error: `Todos los campos son obligatorios`})
  }

  // Verifica que las contrasenias sean iguales 
  if(pass !== pass2) {
    return res.status(400).json({error: `Las contraseñas deben de ser iguales`})
  }

  // Verifica la longitud de la contrasenia 
  if(pass.length < 6) {
    return res.status(400).json({error: `La contraseña debe de tener al menos 6 caracteres`})
  }

  // Validar formato de email usando un regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: `El email no tiene un formato válido` });
  }

  next()
}