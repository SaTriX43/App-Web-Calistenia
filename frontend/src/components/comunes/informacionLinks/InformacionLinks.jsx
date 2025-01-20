import React from 'react'
import Styles from './InfoLinks.module.css'
import Link from 'next/link'

export default function InformacionLinks() {
  return (
    <div className={Styles['informacion-sobre']}>
        <Link href='/informacion/SobreNosotros'>
          <li>Sobre nosotros</li>
        </Link>
        <Link href='/informacion/Condiciones'>
          <li>Condiciones</li>
        </Link>
        <Link href='/informacion/Contacto'>
          <li>Contacto</li>
        </Link>
      </div>
  )
}
