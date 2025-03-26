'use client'

import React, { useState } from 'react'
import Styles from './TarjetaParqueRecomendado.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TarjetaParqueRecomendado({
  titulo,
  imagen,
  puntuacion = 1,
  id
}) {

  // Ruta de la imagen predeterminada desde 'public'
    const imagenPredeterminada = "/imagen-parque-no-disponible.png";
  
    // Estado para manejar errores de carga de la imagen
    const [errorCarga, setErrorCarga] = useState(false);
  
    // Usar la imagen predeterminada si hay un error de carga
    const imagenFinal = !imagen || errorCarga ? imagenPredeterminada : imagen;
  


  return (
    <article className={Styles['parques__tarjeta-recomendado']}>
      <div className={Styles['parques__tarjeta-recomendado-contenedor-img']}>
        <Link className='w-full' href={`/parques/${id}`}>
          <Image
            src={imagenFinal}
            width={300}
            height={300}
            className="img"
            alt="Imagen de parque"
            onError={() => setErrorCarga(true)}
          />
        </Link>
      </div>
      <div className={Styles['parques__tarjeta-recomendado-contenedor-info']}>
        <Link href={`/parques/${id}`}>
          <h3 className={Styles['parques__tarjeta-recomendado-titulo']}>{titulo}</h3>
        </Link>
        
        <div className={Styles['parques__tarjeta-recomendado-contenedor-puntuacion']}>
          {Array.from({length: 5}).map((_, index) => (
            index < puntuacion && '⭐' 
          ))}
        </div>
      </div>
    </article>
  )
}
