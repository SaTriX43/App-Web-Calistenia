const urlBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'


// Get 
export async function getComentariosId(id) {
  try {
    console.log('Entorno:', process.env.NODE_ENV);
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    const peticion = await fetch(`${urlBase}/comentarios/${id}`)
    if (!peticion.ok) {
      throw new Error(`Error HTTP : ${peticion.status}`);
    }

    const data = await peticion.json()
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
    throw error
  }
}


// Post 
export async function postComentario(idParque, comentario) {
  try {
    const peticion = await fetch(`${urlBase}/comentarios`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({idParque, comentario})
    })
    if (!peticion.ok) {
      throw new Error(`Error HTTP : ${peticion.status}`);
    }

    const mensaje = await peticion.json()
    return mensaje
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
    throw error
  }
}


//Delete

export async function deleteComentarioId(idComentario) {
  try {
    const peticion = await fetch(`${urlBase}/comentarios/${idComentario}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      },
      credentials: 'include',
    })
    if (!peticion.ok) {
      const respuestaError = await peticion.json()
      throw new Error(respuestaError.error);
    }

    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    throw error
  }
}


//PACTH
export async function patchComentarioId(idComentario,texto) {
  try {
    const peticion = await fetch(`${urlBase}/comentarios/${idComentario}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({texto})
    })
    if (!peticion.ok) {
      const respuestaError = await peticion.json()
      throw new Error(respuestaError.error);
    }

    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    throw error
  }
}

