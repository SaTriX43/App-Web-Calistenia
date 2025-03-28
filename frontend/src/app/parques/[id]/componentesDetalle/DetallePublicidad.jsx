import React from 'react'
import Styles from './DetallePublicidad.module.css'
import TarjetaParqueRecomendado from '@/components/parques/TarjetaParqueRecomendacion/TarjetaParqueRecomendado'

export default function DetallePublicidad({parques}) {

  if(!parques || parques.length === 0) {
    return <p>No hay parques recomendados disponibles</p>
  }

  return (
    <div className={Styles['parques__detalle-parque-contenedor-publicidad-recomendados']}>
      <h3 className='text-[20px] font-[600]'>Parques recomendados</h3>
      <div className={Styles['parques__detalle-parque-recomendados']}>
        {parques.slice(0,3).map((parque) => (
          <TarjetaParqueRecomendado
            key={parque.id}
            id={parque.id}
            titulo={parque.nombre}
            imagen={parque.imagenes?.[0]}
            puntuacion={parque.puntuacion}
          />
        ))}
      </div>
    </div>
  )
}
