const urlBase = "http://localhost:4000/parques";

export async function getParques() {
  try {
    const peticion = await fetch(`${urlBase}`);
    if (!peticion.ok) {
      throw new error(`Error HTTP : ${peticion.status}`);
    }

    const data = await peticion.json()
    return data
  } catch (error) {
    console.log(`Error en la peticion ${error.message}`)
  }
}
