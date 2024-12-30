import express from 'express'
import { postContacto } from '../controladores/contactoControlador.mjs'

const router = express.Router()

router.post('/',postContacto)

export default router