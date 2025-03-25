import express from 'express'
import { deleteComentarioId, getComentarios, postComentarios, putComentarioId } from '../controladores/comentariosControlador.mjs'
import validarToken from '../middlewares/validarToken.mjs'


const router = express.Router()

router.get(`/:idParque`,getComentarios)
router.post(`/`,validarToken,postComentarios)
router.delete('/:idComentario',validarToken,deleteComentarioId)
router.put('/:idComentario',validarToken,putComentarioId)

export default router