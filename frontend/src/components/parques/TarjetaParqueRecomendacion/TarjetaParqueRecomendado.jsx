'use client'

import React from 'react'
import Styles from './TarjetaParqueRecomendado.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function TarjetaParqueRecomendado({
  titulo,
  imagen,
  puntuacion = 1,
  id
}) {
  return (
    <article className={Styles['parques__tarjeta-recomendado']}>
      <div className={Styles['parques__tarjeta-recomendado-contenedor-img']}>
        <Image
          src={imagen}
          width={300}
          height={300}
          className="img"
          alt="Imagen de parque"
        />
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
