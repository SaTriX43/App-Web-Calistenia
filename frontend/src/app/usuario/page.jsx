'use client'

import React, {useContext} from 'react'
import Styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { AutenticacionContext } from '@/context/AutenticacionContext'
import useAutenticacionRedireccion from '@/components/hooks/useAutenticacionRedireccion'
export default function Usuario() {

  useAutenticacionRedireccion('/usuario')

  const {usuario, loading} = useContext(AutenticacionContext)

  if(loading) return <div>Cargando.....</div>
  if(!usuario) return <h3>Usuario no encontrado</h3>

  return (
    <section className={Styles['usuario']}>
      <div className={Styles['usuario__encabezado']}>
        <FontAwesomeIcon
          icon={faUser}
          className={Styles['usuario__encabezado-icono']}
        />
        <div>
          <p><b>Usuario:</b> {usuario.nombre}</p>
          <p><b>Correo:</b> {usuario.email}</p>
        </div>
      </div>
    </section>
  )
}
