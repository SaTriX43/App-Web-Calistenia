import express from 'express'
import cors from 'cors'
import parquesRuta from './rutas/parquesRuta.mjs'
import contactoRuta from './rutas/contactoRuta.mjs'
import usuarioRuta from './rutas/usuarioRuta.mjs'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/parques',parquesRuta)
app.use('/contacto',contactoRuta)
app.use('/autenticacion',usuarioRuta)

app.use((req,res,next) => {
  res.status(404).json({error: `Su ruta no ha sido encontrada ${req.url}`})
})

const PUERTO = process.env.PORT || 4000
app.listen(PUERTO, () => {
    console.log(`Puerto escuchado en http://localhost:${PUERTO}`)
})