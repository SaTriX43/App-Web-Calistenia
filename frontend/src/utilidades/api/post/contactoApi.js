

const urlPrueba = 'http://localhost:4000/contacto'
// peticion post 
export async function contactoPost(contacto) {
  try { 
    const peticion = await fetch(urlPrueba, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(contacto)
    })

    if(!peticion.ok) {
      const error = await peticion.json()
      throw new Error(error.error)
    }

    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    console.log(error.message)
    throw error
  }
}