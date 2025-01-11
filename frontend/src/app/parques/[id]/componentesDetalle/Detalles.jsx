'use client'
import React, { useState } from 'react'
import Styles from './Detalles.module.css'
import Image from 'next/image'
import { faCircleDot, faCity, faEarth } from '@fortawesome/free-solid-svg-icons'
import { Boton } from '@/components/comunes/Boton/Boton'

export default function Detalles({
  imagen,
  nombre,
  direccion,
  puntuacion,
  canton,
  pais,
  continente
}) {

  function verEnMapa() {
    console.log('VIENDO EN MAPA')
  }

  // Ruta de la imagen predeterminada desde 'public'
  const imagenPredeterminada = "/imagen-parque-mediana.png";

  // Estado para manejar errores de carga de la imagen
  const [errorCarga, setErrorCarga] = useState(false);

  // Usar la imagen predeterminada si hay un error de carga
  const imagenFinal = !imagen || errorCarga ? imagenPredeterminada : imagen;


  return (
    <div className={Styles['parques__detalle-parque-detalles']}>
      <div className={Styles['parques__detalle-parque-contenedor-img']}>
        {imagen ? (
          <Image
            className='img'
            src={imagenFinal}
            width={300}
            height={300}
            alt={`imagen de ${nombre}`}
            onError={() => setErrorCarga(true)}
          />
        ): (<p>No hay imagen Disponible</p>)}
        
      </div>
      <div className={Styles['parques__detalle-parque-contenedor-info']}>
        <h3>{canton} | {nombre} | {direccion}</h3>
        <div className={Styles['parques__detalle-parque-contenedor-info-puntuacion']}>
          {Array.from({length: 5}).map((_, index) => (
            index < puntuacion && '⭐' 
          ))}
        </div>
        <div className={Styles['parques__detalle-parque-contenedor-botones']}>
          <Boton
            tipoBoton='btn-parque'
            texto={pais}
            onClick={verEnMapa}
            icono={faEarth}
            clases={Styles['parques__detalle-parque-boton-ubicacion']}
          />

          <Boton
            tipoBoton='btn-parque'
            texto={continente}
            onClick={verEnMapa}
            icono={faCircleDot}
            clases={Styles['parques__detalle-parque-boton-ubicacion']}
          />

          <Boton
            tipoBoton='btn-parque'
            texto={canton}
            onClick={verEnMapa}
            icono={faCity}
            clases={Styles['parques__detalle-parque-boton-ubicacion']}
          />
        </div>
      </div>
    </div>
  )
}
