import express from 'express'
import { deleteComentarioId, getComentarios, patchComentarioId, postComentarios,  } from '../controladores/comentariosControlador.mjs'
import validarToken from '../middlewares/validarToken.mjs'


const router = express.Router()

router.get(`/:idParque`,getComentarios)
router.post(`/`,validarToken,postComentarios)
router.delete('/:idComentario',validarToken,deleteComentarioId)
router.patch('/:idComentario',validarToken,patchComentarioId)

export default router