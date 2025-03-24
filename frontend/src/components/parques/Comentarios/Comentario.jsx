import React from 'react'
import Styles from './comentario.module.css'
import Foto from '@/components/comunes/Foto/Foto'

export default function Comentario() {
  return (
    <div className={Styles['parques__detalle-comentario-contenedor-perfil-comentario']}>
      <div className={Styles['parques__detalle-comentario-contenedor-perfil']}>
        <Foto/>
      </div>
      <div className={Styles['parques__detalle-comentario-contenedor-comentario']}>
        <p><b>Santiago</b> - hace 10min</p>
        <p>Hola me gusta jugar minecraft</p>
      </div>
    </div>
  )
}
