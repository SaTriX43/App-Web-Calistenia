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

    const token = jwt.sign({id:usuarioData.id ,nombre:usuarioData.nombre, email:usuarioData.correo},
     'claveSecreta',
     {expiresIn: '1h'}
    )

    res.cookie('authToken', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600000,
      path:'/'
    })

    res.status(200).json({
      mensaje:`Usuario logeado exitosamente`,
    })
  } catch (error) {
    console.log(`error al iniciar sesion ${error}`)
    res.status(500).json({error: `Error al iniciar sesion ${error}`})
  }
  
}

export async function deslogearUsuario(req,res) {
  try {
    res.clearCookie('authToken',{
      path : '/',
      secure: true,
      sameSite: 'none'
    })

    return res.status(200).json({mesnaje: 'sesion cerrada exitosamente'})
  } catch (error) {
    res.status(500).json({error:`Error al deslogear usuario`})
  }
}


export async function eliminarUsuario(req,res) {
  try {
    const {id} = req.usuario

    await pool.query(`DELETE FROM usuarios WHERE id = $1`,[id])

    res.clearCookie('authToken',{
      path : '/',
      secure: true,
      sameSite: 'none'
    })

    return res.status(200).json({mesnaje: 'usuario eliminado'})
  } catch (error) {
    res.status(500).json({error:`Error al elimnar usuario`})
  }
}

// para la verificar e recibir informacion del usuario 
export async function obtenerUsuario(req,res) {
  res.status(200).json({autenticado:true , usuario:req.usuario})
}

