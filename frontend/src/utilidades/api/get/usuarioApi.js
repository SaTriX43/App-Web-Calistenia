const urlBase = "https://app-web-calistenia-production.up.railway.app/autenticacion/usuario";
const urlPrueba = 'http://localhost:4000/autenticacion/usuario'


// peticion usuario por id 
export async function getUsuarioId(id) {
  try {
    const peticion = await fetch(`${urlPrueba}/${id}`)
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

