import express from 'express'
import { getComentarios } from '../controladores/comentariosControlador.mjs'


const router = express.Router()

router.get(`/:idParque`,getComentarios)
// router.post(`/:idParque`,getComentarios)


export default router