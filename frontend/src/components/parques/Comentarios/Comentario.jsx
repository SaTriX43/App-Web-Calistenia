import React from 'react'
import Styles from './comentario.module.css'
import Foto from '@/components/comunes/Foto/Foto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Comentario({
  comentarioId,
  usuario,
  comentario,
  fechaCreacion,
  eliminarComentario
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
      <div className={Styles['parques__detalle-comentario-contenedor-iconos']}>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => eliminarComentario(comentarioId, usuario)}
          className={Styles['parques__detallie-comentario-icono-trash']}
        />
        <FontAwesomeIcon
          icon={faPen}
          className={Styles['parques__detallie-comentario-icono-pen']}
        />
      </div>
    </div>
  )
}
