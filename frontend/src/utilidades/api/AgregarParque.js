const urlBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export default async function agregarParquePost(parque) {
  try {

    const formData = new FormData()

    formData.append('coordenadas',JSON.stringify(parque.coordenadas))

    parque.imagenes.forEach((imagen, index) => {
      formData.append('imagenes',imagen)
    })

    if(parque.nombre) formData.append('nombre',parque.nombre);
    if(parque.descripcion) formData.append('descripcion',parque.descripcion);

    const peticion = await fetch(`${urlBase}/parques/agregar`,{
      method:'POST',
      body: formData
    })
    if(!peticion.ok) {
      const error = await peticion.json()
      throw error
    }

    const mensaje = await peticion.json()
    return mensaje
  } catch (error) {
    console.log(`Ha ocurrido un error en la peticion post ${error.error}`)
    throw error
  }
}