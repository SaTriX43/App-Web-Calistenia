'use client'

import React, { useEffect, useState } from 'react'
import Styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { getUsuario } from '@/utilidades/api/get/usuarioApi'
export default function Usuario() {

const [usuario, setUsuario] = useState({})

  useEffect(() => {
    async function obtenerUsuario() {
      try {
        const usuario = await getUsuario()
        setUsuario(usuario.usuario)
      } catch (error) {
        console.log(`Error en la peticion usuario ${error.error}`)
      }
    }

    obtenerUsuario()
  },[])

  return (
    <section className={Styles['usuario']}>
      <div className={Styles['usuario__encabezado']}>
        <FontAwesomeIcon
          icon={faUser}
          className={Styles['usuario__encabezado-icono']}
        />
        <div>
          <p><b>Usuario:</b> {usuario.nombre}</p>
          <p><b>Correo:</b> {usuario.correo}</p>
        </div>
      </div>
    </section>
  )
}
