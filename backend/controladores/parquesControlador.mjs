import parques from '../datos/parquesDatos.mjs'


export const getParques = (req , res) => {
    res.send(parques)
}