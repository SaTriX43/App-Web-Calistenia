'use client'

import React, {useContext} from 'react'
import Styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AutenticacionContext } from '@/context/AutenticacionContext'
import useAutenticacionRedireccion from '@/components/hooks/useAutenticacionRedireccion'
import { Boton } from '@/components/comunes/Boton/Boton'
import { deslogearseUsuario, eliminarUsuario } from '@/utilidades/api/post/autenticacionApi'
import { useRouter } from 'next/navigation'
export default function Usuario() {

  useAutenticacionRedireccion('/usuario')

  const {actualizarSesion} = useContext(AutenticacionContext)
  const router = useRouter()
  const {usuario, loading} = useContext(AutenticacionContext)

  // funcion para deslogearse 
  async function manejarDeslogeo() {
    const deslogeo = await deslogearseUsuario()



    if(deslogeo) {
      router.push('/')
      actualizarSesion()
    }
  }

  // funcion para eliminar cuenta 
  async function manejarEliminarCuenta() {
    if(confirm('Seguro que deseas eliminar la cuenta')) {
      await eliminarUsuario()
      router.push('/')
      actualizarSesion()
    }
  } 


  if(loading) return <div>Cargando.....</div>
  if(!usuario) return <h3>Usuario no encontrado</h3>

  return (
    <section className={Styles['usuario']}>
      <header className={Styles['usuario__encabezado']}>
        <FontAwesomeIcon
          icon={faUser}
          className={Styles['usuario__encabezado-icono']}
        />
        <div>
          <p><b>Usuario:</b> {usuario.nombre}</p>
          <p><b>Correo:</b> {usuario.email}</p>
        </div>
      </header>
      <main className={Styles['usuario__cuerpo']}>
        <Boton
          tipoBoton='primario'
          texto='Deslogearse'
          onClick={manejarDeslogeo}
        />
        <Boton
          tipoBoton='secundario'
          texto='Elimnar Cuenta'
          onClick={manejarEliminarCuenta}
        />
      </main>
    </section>
  )
}
