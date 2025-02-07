'use client'

import React, { useEffect, useState } from 'react'
import Styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { getUsuarioId } from '@/utilidades/api/get/usuarioApi'
import { jwtDecode } from 'jwt-decode'

export default function Usuario() {

const [usuario, setUsuario] = useState({})

  useEffect(() => {
    async function obtenerUsuario() {
      const token = localStorage.getItem('token')
      if(!token) {
        console.log('No hay token almacenado');
        return;
      }
      try {
        const decoded = jwtDecode(token)
        const userId = decoded.id
        const usuario = await getUsuarioId(userId)
        setUsuario(usuario)
        return usuario
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
