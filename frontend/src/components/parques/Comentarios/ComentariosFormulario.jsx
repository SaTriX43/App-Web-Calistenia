import React from 'react'
import Styles from './comentariosFormulario.module.css'
import { Boton } from '@/components/comunes/Boton/Boton'
import Foto from '@/components/comunes/Foto/Foto'

export default function ComentariosFormulario({
  idParque
}) {

  

  return (
    <div className={Styles['parques__detalle-comentario-formulario-contenedor-perfil-formulario']}>
      <div className={Styles['parques__detalle-comentario-formulario-contenedor-perfil']}>
        <Foto/>
      </div>
      <form className={Styles['parques__detalle-comentario-formulario']}>
        <input 
          type="text"
          className={Styles['parques__detalle-comentario-formulario-input']}
        />
        <div className={Styles['parques__detalle-comentario-formulario-contenedor-botones']}>
          <Boton
            texto='Cancelar'
          />
          <Boton
            texto='Comentar'
            tipoBoton='primario'
          />
        </div>
      </form>
    </div>
  )
}
