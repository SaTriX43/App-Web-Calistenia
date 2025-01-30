import pool from "../db.mjs"
import bcrypt from 'bcrypt'

export default async function validarLogin(req,res, next) {
  const {email , pass} = req.body

  const usuario = await pool.query(`SELECT * FROM usuarios WHERE correo = $1`, [email])

  // valida email 
  if(usuario.rows.length === 0) {
    return res.status(400).json({error:`Su correo no existe, registrese porfavor`})
  }

  const usuarioData = usuario.rows[0]

  const contrasenia_valida = await bcrypt.compare(pass, usuarioData.contrasenia_hash)

  // valida contrasenia 
  if(!contrasenia_valida) {
    return res.status(400).json({error:`Su contraseña no es correcta`})
  }


  next()
}