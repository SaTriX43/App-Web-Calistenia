import express from 'express'
import validarRegistro from '../middlewares/validarRegistro.mjs'
import { deslogearUsuario, eliminarUsuario, logearUsuario, obtenerUsuario, registrarUsuario } from '../controladores/usuarioControlador.mjs'
import validarLogin from '../middlewares/validarLogin.mjs'
import validarToken from '../middlewares/validarToken.mjs'

const router = express.Router()

router.post('/register',validarRegistro,registrarUsuario)
router.post('/login',validarLogin,logearUsuario)
router.post('/deslogeo',validarToken, deslogearUsuario)
router.delete('/eliminar',validarToken,eliminarUsuario)
router.get('/sesion',validarToken,obtenerUsuario)

export default router