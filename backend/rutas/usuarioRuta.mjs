import express from 'express'
import validarRegistro from '../middlewares/validarRegistro.mjs'
import { logearUsuario, obtenerUsuario, registrarUsuario } from '../controladores/usuarioControlador.mjs'
import validarLogin from '../middlewares/validarLogin.mjs'
import validarToken from '../middlewares/validarToken.mjs'

const router = express.Router()

router.post('/register',validarRegistro,registrarUsuario)
router.post('/login',validarLogin,logearUsuario)
router.get('/sesion',validarToken,obtenerUsuario)

export default router