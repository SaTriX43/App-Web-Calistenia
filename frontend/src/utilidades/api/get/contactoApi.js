
// peticion post 
export async function contactoPost(contacto) {
  try { 
    const peticion = await fetch('https://app-web-calistenia-production.up.railway.app/contacto', {
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