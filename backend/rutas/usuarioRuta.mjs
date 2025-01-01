import express from 'express'
import validarRegistro from '../middlewares/validarRegistro.mjs'
import { registrarUsuario } from '../controladores/usuarioControlador.mjs'

const router = express.Router()

router.post('/register',validarRegistro,registrarUsuario)

export default router