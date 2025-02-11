const urlBase = 'https://app-web-calistenia-production.up.railway.app/autenticacion'
const urlPrueba = 'http://localhost:4000/autenticacion'


// registrar al usuario 
export async function registrarUsuario(usuario) {
  try {
    const peticion = await fetch(`${urlPrueba}/register`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(usuario)
    })

    if(!peticion.ok) {
      const error = await peticion.json()
      throw new Error(error.error)
    }

    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    console.log(`Error en la peticion de registro ${error.message}`)
    throw error
  }
}

// Iniciar sesion al usuario 
export async function iniciarSesionUsuario(usuario) {
  try {
    const peticion = await fetch(`${urlPrueba}/login`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(usuario),
      credentials: 'include'
    })

    if(!peticion.ok) {
      const error = await peticion.json()
      throw new Error(error.error)
    }

    const respuesta = await peticion.json()
    return respuesta
  } catch (error) {
    console.log(`Error el la peticion de login ${error.message}`)
    throw error
  }
}

export async function deslogearseUsuario() {
  try {
    const peticion = await fetch('http://localhost:4000/autenticacion/deslogeo', {
      method:'POST',
      credentials:'include'
    })

    if(peticion.ok) {
      return true
    }
  } catch (error) {
    console.log(error)
  }
}