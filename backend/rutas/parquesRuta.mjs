import express from 'express'
import { getParques, getParquesId } from '../controladores/parquesControlador.mjs'

const router = express.Router()


router.get('/',getParques)
router.get('/:id',getParquesId)


export default router