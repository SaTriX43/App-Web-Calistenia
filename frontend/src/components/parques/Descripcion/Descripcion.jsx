import React from 'react'
import Styles from './Descripcion.module.css'
import Image from 'next/image'

export default function Descripcion() {
  return (
    <div className={Styles['parques__descripcion']}>
      <div className={Styles['parques__descripcion-bloque']}>
        <h3 className={Styles['parques__descripcion-titulos']}>¿Qué son los Parques de Calistenia?</h3>
        <p>
          Los parques de calistenia son espacios públicos diseñados específicamente 
          para ejercicios al aire libre. Estos parques cuentan con estructuras como 
          barras, anillas y paralelas que permiten entrenamientos de fuerza, flexibilidad 
          y resistencia sin necesidad de pesas.
        </p>
      </div>

      <div className={Styles['parques__descripcion-bloque']}>
        <h3 className={Styles['parques__descripcion-titulos']}>Beneficios de Usar Parques de Calistenia</h3>
        <p>
          Estos parques fomentan un estilo de vida activo, promoviendo la salud física 
          y mental. Además, son una excelente opción para socializar y formar parte 
          de comunidades de ejercicio al aire libre.
        </p>
      </div>

      <div className={Styles['parques__descripcion-bloque']}>
        <h3 className={Styles['parques__descripcion-titulos']}>Acceso Libre y Sostenibilidad</h3>
        <p>
          La mayoría de los parques de calistenia son gratuitos y están diseñados para 
          promover actividades saludables en la comunidad. Son espacios sostenibles y 
          fomentan el uso de áreas verdes en las ciudades.
        </p>
      </div>

      <div className={Styles['parques__descripcion-bloque']}>
        <h3 className={Styles['parques__descripcion-titulos']}>Empieza en la calistenia</h3>
        <div className={Styles['parques__descripcion-bloque-contenedor-imagen']}>
          <Image
            src='/imagen-portada-libro-calistenia.png'
            width={200}
            height={200}
            className='imagen'
            alt='imagen libro'
          />
        </div>
        <a 
          href='/Introduccion-calistenia.pdf'
          download='IntroduccionCalistenia.pdf'
          className={`${Styles['parques__descripcion-boton-pdf']} bg-yellow-300 hover:bg-yellow-500`}
        >
          Descarga guia de calistenia
        </a>
      </div>
    </div>
  )
}

