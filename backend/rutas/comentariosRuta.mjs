import express from 'express'
import { getComentarios, postComentarios } from '../controladores/comentariosControlador.mjs'


const router = express.Router()

router.get(`/:idParque`,getComentarios)
router.post(`/`,postComentarios)


export default router