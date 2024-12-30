export function postContacto(req,res) {
  const cuerpo = '';

  req.on('data',(chunck) => {
    cuerpo += chunck
  })

  req.on('end',async () => {
    const informacion = JSON.parse(cuerpo)

    if(!informacion) {
      return res.status(403).json({error : `No ah llegado informacion al servidor`})
    }

    
  })
}