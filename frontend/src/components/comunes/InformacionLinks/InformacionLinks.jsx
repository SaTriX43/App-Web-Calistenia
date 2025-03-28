import React from 'react'
import Styles from './InfoLinks.module.css'
import Link from 'next/link'

export default function InformacionLinks() {
  return (
    <ul className={Styles['informacion-sobre']}>
        <Link href='/informacion/SobreNosotros'>
          <li>Sobre nosotros</li>
        </Link>
        <Link href='/informacion/condiciones'>
          <li>Condiciones</li>
        </Link>
        <Link href='/informacion/contacto'>
          <li>Contacto</li>
        </Link>
    </ul>
  )
}
