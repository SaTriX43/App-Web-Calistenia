import express from 'express'
import validarRegistro from '../middlewares/validarRegistro.mjs'
import { logearUsuario, registrarUsuario } from '../controladores/usuarioControlador.mjs'
import validarLogin from '../middlewares/validarLogin.mjs'

const router = express.Router()

router.post('/register',validarRegistro,registrarUsuario)
router.post('/login',validarLogin,logearUsuario)

export default router