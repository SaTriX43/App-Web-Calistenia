import express from 'express'
import cors from 'cors'
import parques from '../datosParque'
const appParques = express()

appParques.on(cors())

appParques.get('/', (req,res) => {
    res.send(parques)
})

export default appParques