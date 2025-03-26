const modo = 'desarrollo'
const urlBase = modo === 'desarrollo' ? 'http://localhost:4000/parques' : "https://app-web-calistenia-production.up.railway.app/parques";


// peticion parque general 
export async function getParques(pagina = 1, limite = 10) {
  try {
    // const peticion = await fetch(`${urlBase}?pagina=${pagina}&limite=${limite}`);
    const peticion = await fetch (`${urlBase}?pagina=${pagina}&limite=${limite}`)
    if (!peticion.ok) {
      throw new error(`Error HTTP : ${peticion.status}`);
    }

    const data = await peticion.json()
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}


// peticion parque por id 
export async function getParqueId(id) {
  try {
    // const peticion = await fetch(`${urlBase}/${id}`)
    const peticion = await fetch(`${urlBase}/${id}`)
    if (!peticion.ok) {
      throw new error(`Error HTTP : ${peticion.status}`);
    }

    const data = await peticion.json()
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}

