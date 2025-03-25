import React, { useContext, useState } from 'react'
import Styles from './comentariosFormulario.module.css'
import { Boton } from '@/components/comunes/Boton/Boton'
import Foto from '@/components/comunes/Foto/Foto'
import { AutenticacionContext } from '@/context/AutenticacionContext'
import { postComentario } from '@/utilidades/api/comentariosApi'
import { useRouter } from 'next/navigation'

export default function ComentariosFormulario({
  idParque,
  agregarComentario
}) {

  const [comentario,setComentario] = useState('')
  const {autenticado} = useContext(AutenticacionContext)
  const router = useRouter()

  function manejarCambioComentario(e) {
    setComentario(e.target.value)
  }

  async function enviarComentario(e) {
    e.preventDefault()

    if(comentario.trim() === '') {
      return null
    }

    if(!autenticado) {
      router.push(`/autenticacion/login?redireccion=/parques/${idParque}&mensaje=Debes iniciar sesión para comentar`)
      return
    }
    
    try {
      const respuesta = await postComentario(idParque, comentario)
      console.log(respuesta)
      agregarComentario(respuesta.comentario)
      setComentario('')
    } catch (error) {
      console.error("Error al publicar comentario:", error.message)
    }
  }

  function cancelarComentario() {
    setComentario('')
  }

  return (
    <div className={Styles['parques__detalle-comentario-formulario-contenedor-perfil-formulario']}>
      <div className={Styles['parques__detalle-comentario-formulario-contenedor-perfil']}>
        <Foto/>
      </div>
      <form className={Styles['parques__detalle-comentario-formulario']} onSubmit={(e) => enviarComentario(e)}>
        <input 
          type="text"
          value={comentario}
          onChange={(e) => manejarCambioComentario(e)}
          className={Styles['parques__detalle-comentario-formulario-input']}
        />
        <div className={Styles['parques__detalle-comentario-formulario-contenedor-botones']}>
          <Boton
            texto='Cancelar'
            onClick={cancelarComentario}
          />
          <Boton
            texto='Comentar'
            tipoBoton='primario'
            type='submit'
          />
        </div>
      </form>
    </div>
  )
}
