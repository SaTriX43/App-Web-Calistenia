'use client'
import React, { useState } from 'react'
import Styles from './page.module.css'
import useAutenticacion from '@/components/hooks/useAutenticacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Mapa from '@/components/parques/Mapa/Mapa.jsx'

export default function AgregarUbicacizon() {
  // para redireccionar si no esta logeado 
  useAutenticacion('/parques/agregarUbicacion')

  const [coordenadas, setCoordenadas] = useState({
    latitud: -1.8082564010072237,
    longitud: -78.24585711296035
  })

  // funcion para manejar las coordenadas 
  function manejarCoordenadas(lat,lng) {
    setCoordenadas({
      latitud : lat,
      longitud : lng
    })
  }

  // funcion para obtenerUbicacion 
  function obtenerUbicacion(e) {
    e.preventDefault()

    if(!navigator.geolocation) {
      alert('funcion no permitida, no esa accesible en este navegador')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords
        setCoordenadas({
          latitud : latitude,
          longitud : longitude
        })
      },(err) => {
        console.log(err)
        alert('No se puedo acceder a su ubicacion, asegurese de dar permisos')
      })
  }


  return (
    <section className={Styles['parques__agregar-ubicacion']}>
      <h1 className='text-[30px] font-[600]'>
        Agregar una Ubicacion del parque
      </h1>
      <form className={Styles['parques__agregar-ubicacion-formulario']}>
        {/* seccion 1  */}
        <div className={Styles['parques__agregar-ubicacion-formulario-grupo']}>
          <h3 className='text-[25px] font-[600]'>Marcar Direccion</h3>
          <div className={Styles['parques__agregar-ubicacion-formulario-posicion']}>
            <button 
              className={Styles['parques__agregar-ubicacion-formulario-posicion-boton']}
              onClick={obtenerUbicacion}
            >
              <FontAwesomeIcon icon={faPaperPlane}/>
              <span>Obtener posicion</span>
            </button>
            <input
              placeholder='Escribir coordenadas o arrastrar en mapa para la ubicacion :>' 
              type="text" 
              className={Styles['parques__agregar-ubicacion-formulario-posicion-input']}
              value={`${coordenadas.latitud} , ${coordenadas.longitud}`}
              readOnly
            />
          </div>
          <Mapa
            latitud = {coordenadas.latitud}
            longitud = {coordenadas.longitud}
            zoom={14}
            manejarCoordenadas = {manejarCoordenadas}
            clases='parques__agregar-ubicacion-mapa'
            ubicaciones={[]}
          />
        </div>
        {/* seccion 2  */}
        
      </form>
    </section>
  )
}
