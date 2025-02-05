'use client'

import React from 'react'
import Styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Usuario() {



  return (
    <section className={Styles['usuario']}>
      <div className={Styles['usuario__encabezado']}>
        <FontAwesomeIcon
          icon={faUser}
          className={Styles['usuario__encabezado-icono']}
        />
        <div>
          <p><b>Usuario:</b> Santiago Gonzales</p>
          <p><b>Correo:</b> santiagofg43@gmail.com</p>
        </div>
      </div>
    </section>
  )
}
