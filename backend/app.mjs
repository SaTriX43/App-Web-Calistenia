import express from 'express'
import cors from 'cors'
import parquesRutas from './rutas/parquesRuta.mjs'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/parques',parquesRutas)



const PUERTO = process.env.PORT || 4000
app.listen(PUERTO, () => {
    console.log(`Puerto escuchado en http://localhost:${PUERTO}`)
})