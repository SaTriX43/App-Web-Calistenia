
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
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}