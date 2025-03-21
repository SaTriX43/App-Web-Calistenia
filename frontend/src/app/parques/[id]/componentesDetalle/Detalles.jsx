'use client'
import React, { useState } from 'react'
import Styles from './Detalles.module.css'
import Image from 'next/image'
import { faCircleDot, faCity, faEarth } from '@fortawesome/free-solid-svg-icons'
import { Boton } from '@/components/comunes/Boton/Boton'
import Carousel from '@/components/comunes/carousel/Carousel'

export default function Detalles({
  imagenes,
  nombre,
  direccion,
  puntuacion,
  canton,
  pais,
  continente
}) {

  console.log(imagenes)

  // Ruta de la imagen predeterminada desde 'public'
  const imagenPredeterminada = "/imagen-parque-no-disponible.png";

  // Estado para manejar errores de carga de la imagen
  const [mostrarCarousel, setMostrarCarousel] = useState(false)

  // Usar la imagen predeterminada si hay un error de carga
  const imagenFinal = imagenes && imagenes.length > 0 && imagenes[0]
  ? imagenes[0]
  : imagenPredeterminada;

  return (
    <div className={Styles['parques__detalle-parque-detalles']}>
      <div className={Styles['parques__detalle-parque-contenedor-img']} onClick={() => setMostrarCarousel(true)}>
          <Image
            className='img'
            src={imagenFinal} 
            width={300}
            height={300}
            alt={`imagen de ${nombre}`}
          />
      </div>

      {mostrarCarousel && (
          <Carousel images={imagenes} onClose={() => setMostrarCarousel(false)}/>
      )}

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
            icono={faEarth}
            clases={Styles['parques__detalle-parque-boton-ubicacion']}
          />

          <Boton
            tipoBoton='btn-parque'
            texto={continente}
            icono={faCircleDot}
            clases={Styles['parques__detalle-parque-boton-ubicacion']}
          />

          <Boton
            tipoBoton='btn-parque'
            texto={canton}
            icono={faCity}
            clases={Styles['parques__detalle-parque-boton-ubicacion']}
          />
        </div>
      </div>
    </div>
  )
}
