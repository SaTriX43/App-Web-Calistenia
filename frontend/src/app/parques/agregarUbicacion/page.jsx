'use client'
import React, { useState, useRef } from 'react'
import Styles from './page.module.css'
import useAutenticacion from '@/components/hooks/useAutenticacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import Mapa from '@/components/parques/Mapa/Mapa.jsx'
import { Boton } from '@/components/comunes/Boton/Boton'
import agregarParquePost from '@/utilidades/api/post/AgregarParque'

export default function AgregarUbicacion() {

  // para redireccionar si no esta logeado 
  useAutenticacion('/parques/agregarUbicacion')


  // variables para guardar los datos 
  const [formularioDatos, setFormularioDatos] = useState({
    coordenadas: {latitud: -1.8082564010072237, longitud: -78.24585711296035},
    imagenes: [],
    nombre:'',
    descripcion:''
  })

  const [mensaje, setMensaje] = useState('');
  const [error , setError] = useState(null)


  function manejarEnvio(e) {
    e.preventDefault()

    // validar coordenadas 
    if(!formularioDatos.coordenadas.latitud || !formularioDatos.coordenadas.longitud) {
      alert('Seleccionar coordenadas validas')
      return
    }

    if(formularioDatos.imagenes.length === 0) {
      alert('Selecciona al menos una imagen')
      return
    }



    async function enviarDatos() {
      try {
        const datos = await agregarParquePost(formularioDatos)
        setMensaje(datos.mensaje)
        setTimeout(() => {
          setMensaje('')
        }, 3000);
        setError(null)
      } catch (error) {
        setError(error.error)
        setTimeout(() => {
          setError(null)
        }, 3000);
      }
    }

    enviarDatos()

    console.log('Enviando datos',formularioDatos)
    setFormularioDatos({
      coordenadas: {latitud: -1.8082564010072237, longitud: -78.24585711296035},
      imagenes: [],
      nombre:'',
      descripcion:''
    })
  }

  const mapaRef = useRef(null)

  // seccion 1 mapa 

  function manejarCoordenadas(lat, lng) {
    setFormularioDatos((prev) => ({
      ...prev,
      coordenadas: {latitud: lat , longitud: lng}
    }))
  }

  // funcion para obtenerUbicacion 
  function obtenerUbicacion(e) {
    e.preventDefault()

    if (!navigator.geolocation) {
      alert('funcion no permitida, no esa accesible en este navegador')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords
        setFormularioDatos((prev) => ({
          ...prev,
          coordenadas: {latitud: latitude, longitud: longitude}
        }))
        if (mapaRef.current) {
          mapaRef.current.centrarMapa(latitude, longitude)
        }
      }, (err) => {
        console.log(err)
        alert('No se puedo acceder a su ubicacion, asegurese de dar permisos')
      })
  }

  // seccion 2 imagenes

  function manejarArchivoImagen(e) {
    const archivos = Array.from(e.target.files).filter((archivo) => archivo.type.startsWith('image/'))
    setFormularioDatos((prev) => ({
      ...prev, 
      imagenes: [...prev.imagenes , ...archivos]
    }))
  }

  function manejarEliminacionImagen(index) {
    setFormularioDatos((prev) => ({
      ...prev,
      imagenes: prev.imagenes.filter((_,i) => i !== index)
    }))
  }

  // seccion 3 

  function manejarCambioNombre(e) {
    setFormularioDatos((prev) => ({
      ...prev,
      nombre: e.target.value
    }))
  }

  // seccion 4 

  function manejarCambioDescripcion(e) {
    setFormularioDatos((prev) => ({
      ...prev,
      descripcion: e.target.value
    }))
  }

  // boton 
  function esFormularioValido() {
    return(
      formularioDatos.coordenadas.latitud &&
      formularioDatos.coordenadas.longitud &&
      formularioDatos.imagenes.length > 0
    )
  }


  return (
    <>
      {mensaje && (
        <div className={Styles['parques__agregar-ubicacion-mensaje']}>
          <p>{mensaje}</p>
        </div>
      )}
      {error && (
        <div className={Styles['parques__agregar-ubicacion-error']}>
          <p>{error}</p>
        </div>
      )}

     <section className={Styles['parques__agregar-ubicacion']}>
        <h1 className='text-[30px] font-[600]'>
          Agregar una Ubicacion del parque
        </h1>
        
        <form className={Styles['parques__agregar-ubicacion-formulario']} onSubmit={manejarEnvio}>
          {/* seccion 1  */}
          <div className={Styles['parques__agregar-ubicacion-formulario-grupo']}>
            <h3 className='text-[25px] font-[600]'>Marcar Direccion</h3>
            <div className={Styles['parques__agregar-ubicacion-formulario-posicion']}>
              <button
                className={Styles['parques__agregar-ubicacion-formulario-posicion-boton']}
                onClick={obtenerUbicacion}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Obtener posicion</span>
              </button>
              <input
                placeholder='Escribir coordenadas o arrastrar en mapa para la ubicacion :>' 
                type="text" 
                className={Styles['parques__agregar-ubicacion-formulario-posicion-input']}
                value={`${formularioDatos.coordenadas.latitud} , ${formularioDatos.coordenadas.longitud}`}
                readOnly
              />
            </div>
            <Mapa
              ref={mapaRef}
              latitud={formularioDatos.coordenadas.latitud}
              longitud={formularioDatos.coordenadas.longitud}
              zoom={14}
              manejarCoordenadas={manejarCoordenadas}
              clases='parques__agregar-ubicacion-mapa'
              ubicaciones={[]}
              mostrarMarcador={true}
            />
          </div>
          {/* seccion 2  */}

          <div className={Styles['parques__agregar-ubicacion-formulario-grupo']}>
            <h3 className='text-[25px] font-[600]'>Agrege imagenes</h3>
            <div className={Styles['parques__agregar-ubicacion-contenedor-imagenes']}>
              {formularioDatos.imagenes.map((imagen, index) => (
                <div key={index} className={Styles['parques__agregar-ubicacion-contenedor-imagen']}>
                  <img className={Styles['parques__agregar-ubicacion-imagen']} src={URL.createObjectURL(imagen)}/>
                  <FontAwesomeIcon 
                    onClick={() => manejarEliminacionImagen(index)} 
                    icon={faTrash} 
                    className={Styles['parques__agregar-ubicacion-imagen-icono']}/>
                </div>
              ))}
            </div>
            <label
              className={Styles['parques__agregar-ubicacion-boton-agregar-imagen']}
            >
              <FontAwesomeIcon icon={faUpload} />
              <span>Examinar</span>
              <input
                type='file'
                multiple
                accept='image/*'
                onChange={manejarArchivoImagen}
                className='hidden' // Ocultar el input pero mantener la funcionalidad
              />
            </label>
          </div>


          {/* seccion 3  */}
          <div className={Styles['parques__agregar-ubicacion-formulario-grupo']}>
            <label 
              className='text-[25px] font-[600]' 
              htmlFor="nombre">
                Nombre  
              <span className={Styles['label-span-formulario']}>
                Opcional
              </span>
            </label>
            <input 
              className={Styles['parques__agregar-ubicacion-formulario-input']} 
              type='text'  
              value={formularioDatos.nombre}
              onChange={(e) => manejarCambioNombre(e)}
              placeholder='Nombre del parque'
            />
          </div>

          {/* seccion 4  */}
          <div className={Styles['parques__agregar-ubicacion-formulario-grupo']}>
            <label 
              className='text-[25px] font-[600]' 
              htmlFor="nombre">
                Desacribir el parque  
              <span className={Styles['label-span-formulario']}>
                Opcional
              </span>
            </label>
            <textarea 
              className={Styles['parques__agregar-ubicacion-formulario-textarea']} 
              type='text'  
              value={formularioDatos.descripcion}
              onChange={(e) => manejarCambioDescripcion(e)}
              placeholder='Por favor agrege una descripcion de porque le gusta el parque y como se siente el ambiente para ayudar a nuestros editores'
            />
          </div>

          <hr className='w-full'/>

          <Boton
            texto='Enviar'
            tipoBoton='primario'
            type='submit'
            clases={!esFormularioValido()}
            disabled={!esFormularioValido()}
          />
          <p className='text-center text-gray-400 text-[14px]'>Usted acepta nuestros terminos y condiciones medieante el envio de esta informacion</p>
        </form>
      </section>
    </>
  )
}