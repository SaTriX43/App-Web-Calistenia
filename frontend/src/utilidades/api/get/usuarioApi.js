const urlBase = "https://app-web-calistenia-production.up.railway.app/autenticacion/sesion";
const urlPrueba = 'http://localhost:4000/autenticacion/sesion'


// peticion usuario por id 
export async function getUsuario() {
  try {
    const peticion = await fetch(`${urlPrueba}`)
    if (!peticion.ok) {
      const error = await peticion.json()
      return error
    }

    const data = await peticion.json()
    return data
  } catch (error) {
    throw error
  }
}

