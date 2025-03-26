const modo = 'desarrollo'
const urlBase = modo === 'desarrollo' ? 'http://localhost:4000/autenticacion' : "https://app-web-calistenia-production.up.railway.app/autenticacion";

// registrar al usuario 
export async function registrarUsuario(usuario) {
  try {
    //prueba
    const peticion = await fetch(`${urlBase}/register`, {
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
    const peticion = await fetch(`${urlBase}/login`, {
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

// deslogearse 
export async function deslogearseUsuario() {
  try {
    const peticion = await fetch(`${urlBase}/deslogeo`, {
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

// eliminar usuario  
export async function eliminarUsuario() {
  try {
    const peticion = await fetch(`${urlBase}/eliminar`, {
      method:'DELETE',
      credentials:'include'
    })

    if(peticion.ok) {
      return true
    }
  } catch (error) {
    console.log(error)
  }
}