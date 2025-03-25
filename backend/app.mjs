import express from 'express'
import cors from 'cors'
import parquesRuta from './rutas/parquesRuta.mjs'
import contactoRuta from './rutas/contactoRuta.mjs'
import usuarioRuta from './rutas/usuarioRuta.mjs'
import comentariosRuta from './rutas/comentariosRuta.mjs'
import cookieParser from 'cookie-parser'


const app = express()

const corsOptions = {
  origin: ['http://localhost:3000', 'https://app-calistenia.vercel.app'], // Orígenes permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  credentials: true, // Permitir cookies
  preflightContinue: false, // No seguir después de manejar preflight
  optionsSuccessStatus: 204, // Código de éxito para OPTIONS
};


app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.json())

app.options('*', cors(corsOptions));

app.use('/parques',parquesRuta)
app.use('/contacto',contactoRuta)
app.use('/autenticacion',usuarioRuta)
app.use('/comentarios',comentariosRuta)

app.use((req,res,next) => {
  res.status(404).json({error: `Su ruta no ha sido encontrada ${req.url}`})
})

const PUERTO = process.env.PORT || 4000
app.listen(PUERTO, () => {
    console.log(`Puerto escuchado en http://localhost:${PUERTO}`)
})