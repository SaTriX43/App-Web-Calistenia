
// peticion post 
export async function contactoPost(parque) {
  try {
    const peticion = await fetch('http://localhost:4000/contacto', {
      method: 'POST',
      headers: {
        'Content-Type' : 'aplication/json'
      },
      body: JSON.stringify(parque)
    })

    if(!peticion.ok) {
      const error = await peticion.json()
      throw new error(error.error)
    }

    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    console.log(error.message)
    throw error
  }
}