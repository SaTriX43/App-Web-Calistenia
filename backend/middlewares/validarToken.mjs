import jwt from 'jsonwebtoken'

export default function validarToken(req,res,next) {

  const token = req.cookies.authToken

  if(!token) {
    return res.status(403).json({error: `Acceso denegado token faltante`})
  }

  try {
    const verificar = jwt.verify(token, 'claveSecreta');
    req.usuario = verificar
    next()
  } catch (error) {
    res.status(401).json({error: `Token invalido o expirado`})
  }
}