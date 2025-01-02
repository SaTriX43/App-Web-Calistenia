'use client'
import React from 'react'
import Styles from './page.module.css'
import useAutenticacion from '@/components/hooks/useAutenticacion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function AgregarUbicacion() {

  useAutenticacion('/parques/agregarUbicacion')


  return (
    <section className={Styles['parques__agregar-ubicacion']}>
      <h1 className='text-[30px] font-[600]'>
        Agregar una Ubicacion del parque
      </h1>
      <form className={Styles['parques__agregar-ubicacion-formulario']}>
        <div className={Styles['parques__agregar-ubicacion-formulario-grupo']}>
          <h3 className='text-[25px] font-[600]'>Marcar Direccion</h3>
          <div className={Styles['parques__agregar-ubicacion-formulario-posicion']}>
            <button className={Styles['parques__agregar-ubicacion-formulario-posicion-boton']}>
              <FontAwesomeIcon icon={faPaperPlane}/>
              <span>Obtener posicion</span>
            </button>
            <input
              placeholder='Escribir coordenadas o arrastrar en mapa para la ubicacion :>' 
              type="text" 
              className='parques__agregar-ubicacion-formulario-posicion-input'
            />
          </div>
        </div>
      </form>
    </section>
  )
}
