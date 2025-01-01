import { escribirArchivo, leerArchivo } from "../funciones/leerEscribirEnBaseDatos.mjs"
import jwt from 'jsonwebtoken'

// para registrar usuarios 
export async function registrarUsuario(req,res) {
  const {name, email, pass} = req.body

  const usuarios = await leerArchivo()

  let usuarioNuevo = {
    id: usuarios.length + 1,
    name: name,
    email: email, 
    pass: pass
  }


  usuarios.push(usuarioNuevo)

  await escribirArchivo(usuarios)

  res.status(201).json({
    mensaje:`Usuario registrado exitosamente`, 
    usuario:{
      id: usuarioNuevo.id,
      name: usuarioNuevo.name,
      email:usuarioNuevo.email
    }})
}


// para iniciar sesion en usuario 


export async function logearUsuario(req, res) {
  const {email , pass} = req.body;

  const usuarios = await leerArchivo()
  const usuario = usuarios.find(usuario => usuario.email === email && usuario.pass === pass)

  const token = jwt.sign({id:usuario.id, email:usuario.email}, 'claveSecreta',{
    expiresIn: '1h'
  })

  console.log(token)

  res.status(201).json({
    mensaje:`Usuario logeado exitosamente`, 
    token,
    usuario:{
      id:usuario.id,
      email:usuario.email,
      name: usuario.name
    }})
}