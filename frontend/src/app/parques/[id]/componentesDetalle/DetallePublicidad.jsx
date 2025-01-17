import React from 'react'
import Styles from './DetallePublicidad.module.css'
import { Publicidad } from '@/components/parques/publicidad/Publicidad'
import TarjetaParqueRecomendado from '@/components/parques/TarjetaParqueRecomendacion/TarjetaParqueRecomendado'

export default function DetallePublicidad({parques}) {
  return (
    <div className={Styles['parques__detalle-parque-contenedor-publicidad-recomendados']}>
      {/* <Publicidad/> */}
      <h3 className='text-[20px] font-[600]'>Parques recomendados</h3>
      <div className={Styles['parques__detalle-parque-recomendados']}>
        {parques.slice(0,3).map((parque) => (
          <TarjetaParqueRecomendado
            key={parque.id}
            id={parque.id}
            titulo={parque.nombre}
            imagen={parque.imagen}
            puntuacion={parque.puntuacion}
          />
        ))}
      </div>
    </div>
  )
}
