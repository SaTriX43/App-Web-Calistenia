import parques from '../datos/parquesDatos.mjs'

//funcion para obtener los parques de mi base de datos
export const getParques = (req , res) => {
    const {pagina = 1, limite = 10} = req.query;//parametros de query 
    const indiceInicial = (pagina - 1) * limite;
    const indiceFinal = pagina * limite;

    const resultados = parques.slice(indiceInicial, indiceFinal)
    
    res.json({
        total: parques.length,
        pagina: parseInt(pagina),
        limite: parseInt(limite),
        data: resultados
    })
}



export const getParquesId = (req,res,id) => {
    const parqueId = req.params.id;

}