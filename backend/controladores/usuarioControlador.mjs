import { escribirArchivo, leerArchivo } from "../funciones/leerEscribirEnBaseDatos.mjs"

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