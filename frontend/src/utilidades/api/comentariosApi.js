
const urlBase = "https://app-web-calistenia-production.up.railway.app/comentarios";
const desarrollo = 'http://localhost:4000/comentarios'

// Get 
export async function getComentariosId(id) {
  try {
    const peticion = await fetch(`${desarrollo}/${id}`)
    if (!peticion.ok) {
      throw new error(`Error HTTP : ${peticion.status}`);
    }

    const data = await peticion.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}


// Post 
export async function postComentario(idParque, comentario) {
  try {
    const peticion = await fetch(`${desarrollo}`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({idParque, comentario})
    })
    if (!peticion.ok) {
      throw new error(`Error HTTP : ${peticion.status}`);
    }

    const mensaje = await peticion.json()
    return mensaje
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}