import React from 'react'
import Styles from './InformacionLinks.module.css'
import Link from 'next/link'

export default function InformacionLinks() {
  return (
    <div className={Styles['informacion-sobre']}>
        <Link href='/informacion/sobre-nosotros'>
          <li>Sobre nosotros</li>
        </Link>
        <Link href='/informacion/condiciones'>
          <li>Condiciones</li>
        </Link>
        <Link href='/informacion/contacto'>
          <li>Contacto</li>
        </Link>
      </div>
  )
}
