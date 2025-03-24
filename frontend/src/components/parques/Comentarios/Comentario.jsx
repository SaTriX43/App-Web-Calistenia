import React from 'react'
import Styles from './comentario.module.css'
import Foto from '@/components/comunes/Foto/Foto'

export default function Comentario({
  usuario,
  comentario,
  fechaCreacion
}) {
  return (
    <div className={Styles['parques__detalle-comentario-contenedor-perfil-comentario']}>
      <div className={Styles['parques__detalle-comentario-contenedor-perfil']}>
        <Foto/>
      </div>
      <div className={Styles['parques__detalle-comentario-contenedor-comentario']}>
        <p><b>{usuario}</b> - hace {fechaCreacion}</p>
        <p className='whitespace-normal break-words'>{comentario}</p>
      </div>
    </div>
  )
}
