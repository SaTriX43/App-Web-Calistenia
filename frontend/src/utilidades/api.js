const urlBase = "http://localhost:4000/parques";

export async function getParques(pagina = 1, limite = 10) {
  try {
    const peticion = await fetch(`${urlBase}?pagina=${pagina}&limite=${limite}`);
    if (!peticion.ok) {
      throw new error(`Error HTTP : ${peticion.status}`);
    }

    const data = await peticion.json()
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}
