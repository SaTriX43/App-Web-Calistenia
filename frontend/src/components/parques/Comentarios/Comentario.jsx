'use client'
import React, { useState } from 'react'
import Styles from './comentario.module.css'
import Foto from '@/components/comunes/Foto/Foto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Comentario({
  comentarioId,
  usuario,
  comentario,
  fechaCreacion,

  comentariosEditando,

  eliminarComentario,
  toggleEditanto,
  editarComentario
  
}) {

  const [nuevoTexto, setNuevoTexto] = useState('')

  return (
    <div className={Styles['parques__detalle-comentario-contenedor-perfil-comentario']}>
      <div className={Styles['parques__detalle-comentario-contenedor-perfil']}>
        <Foto/>
      </div>
      <div className={Styles['parques__detalle-comentario-contenedor-comentario']}>
        {comentariosEditando[comentarioId] ? (
          <textarea 
            type="text"
            value={nuevoTexto}
            className={Styles['parques__detalle-comentario-textarea']}
            onChange={(e) => {
              setNuevoTexto(e.target.value)
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`; 
            } }
            rows={1}
          />
        ): (
          <>
            <p><b>{usuario}</b> - hace {fechaCreacion}</p>
            <p className='whitespace-normal break-words'>{comentario}</p>
          </>
        )}
        
      </div>
      <div className={Styles['parques__detalle-comentario-contenedor-iconos']}>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => eliminarComentario(comentarioId, usuario)}
          className={Styles['parques__detallie-comentario-icono-trash']}
        />
        {comentariosEditando[comentarioId] ? (
          <>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() =>  {
                setNuevoTexto(comentario)
                toggleEditanto(comentarioId,usuario)
              }}
            />
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() => editarComentario(comentarioId, nuevoTexto)}
            />
          </>
        ) : (
          <FontAwesomeIcon
            icon={faPen}
            className={Styles['parques__detallie-comentario-icono-pen']}
            onClick={() => toggleEditanto(comentarioId, usuario)}
         />
        )}
        
      </div>
    </div>
  )
}
