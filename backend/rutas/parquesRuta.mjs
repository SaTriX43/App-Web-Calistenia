import express from 'express'
import multer from 'multer'
import { getParques, getParquesId, postParque } from '../controladores/parquesControlador.mjs'

const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({storage})


router.get('/',getParques)
router.get('/:id',getParquesId)
router.post('/agregar',upload.array('imagenes'),postParque)

export default router