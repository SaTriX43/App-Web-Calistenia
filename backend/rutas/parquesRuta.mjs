import express from 'express'
import { getParques } from '../controladores/parquesControlador.mjs'

const router = express.Router()


router.get('/',getParques)


export default router