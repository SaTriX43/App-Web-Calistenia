import express from 'express'
import validarRegistro from '../middlewares/validarRegistro.mjs'
import { logearUsuario, obtenerUsuarioId, registrarUsuario } from '../controladores/usuarioControlador.mjs'
import validarLogin from '../middlewares/validarLogin.mjs'

const router = express.Router()

router.post('/register',validarRegistro,registrarUsuario)
router.post('/login',validarLogin,logearUsuario)
router.get('/usuario/:id',obtenerUsuarioId)

export default router