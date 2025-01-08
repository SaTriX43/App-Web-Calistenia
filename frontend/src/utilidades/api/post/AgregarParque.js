export default async function agregarParquePost(parque) {
  try {
    const peticion = await fetch('http://localhost:3000/parques/agregar',{
      method:'POST',
      headers: {
        'Contet-Type': 'application/json'
      },
      body: JSON.stringify(parque)
    })
    if(!peticion.ok) {
      const error = await peticion.json()
      throw error
    }

    const mensaje = await peticion.json()
    return mensaje
  } catch (error) {
    console.log(`A ocurrido un error en la peticion post ${error.error}`)
    throw error
  }
}