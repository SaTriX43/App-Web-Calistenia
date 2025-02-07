import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import pool from '../db.mjs'

// para registrar usuarios 
export async function registrarUsuario(req,res) {
  const {name, email, pass} = req.body

  try {

    const hashedCrontrasenia = await bcrypt.hash(pass, 10)
    // registra el usuario en la base de datos 
    await pool.query(
      'INSERT INTO usuarios (nombre, correo, contrasenia_hash) VALUES ($1, $2, $3)',
      [name, email, hashedCrontrasenia]
    )

    res.status(201).json({
      mensaje:`Usuario registrado exitosamente`, 
    })
  } catch (error) {
    console.log(`Error en el registro de usuario, ${error}`)
    res.status(500).json({
      error:`Error al registrar usuario`
    })
  }
  
  
}


// para iniciar sesion en usuario 
export async function logearUsuario(req, res) {
  const {email} = req.body;

  try {
    const usuario = await pool.query(`SELECT * FROM usuarios WHERE correo = $1 `,[email])

    const usuarioData = usuario.rows[0]

    const token = jwt.sign({id:usuarioData.id, email:usuarioData.correo},
     'claveSecreta',
     {expiresIn: '1h'}
    )

    res.status(201).json({
      mensaje:`Usuario logeado exitosamente`, 
      token,
    })
  } catch (error) {
    console.log(`error al iniciar sesion ${error}`)
    res.status(500).json({error: `Error al iniciar sesion ${error}`})
  }
  
}


// para iniciar sesion en usuario 
export async function obtenerUsuarioId(req, res) {
  const {id} = req.params;

  try {
    const usuario = await pool.query(`SELECT * FROM usuarios WHERE id = $1 `,[id])

    if(usuario.rowCount === 0) {
      return res.status(404).json({error: `Usuario no encontrado`})
    }

    const usuarioData = usuario.rows[0]

    res.status(201).json(usuarioData)
  } catch (error) {
    console.log(`error al obtener usuario ${error}`)
    res.status(500).json({error: `Error al obtener usuario ${error.message}`})
  }
  
}


