import express from 'express'
import { getComentarios, postComentarios } from '../controladores/comentariosControlador.mjs'
import validarToken from '../middlewares/validarToken.mjs'


const router = express.Router()

router.get(`/:idParque`,getComentarios)
router.post(`/`,validarToken,postComentarios)


export default router