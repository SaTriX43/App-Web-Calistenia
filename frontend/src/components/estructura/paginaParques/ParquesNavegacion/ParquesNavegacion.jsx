'use client'

import React from 'react'
import Styles from './ParquesNavegacion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faMap, } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const ParquesNavegacion = () => {

  const pathname = usePathname()

  return (
    <nav className={Styles['parques__nav']}>
        <Link href='/parques' className={`${Styles['parques__nav-link']} ${pathname === '/parques' ? Styles['parques__nav-link-activo'] : ''}`}>
          <FontAwesomeIcon className={Styles['parques__nav-link-icon']} icon={faLocation}/>
          <p className={Styles['parques__nav-link-p']}>Ubicacion</p>
        </Link>

        <Link href='/parques/mapa' className={`${Styles['parques__nav-link']} ${pathname === '/parques/mapa' ? Styles['parques__nav-link-activo'] : ''}`}>
            <FontAwesomeIcon className={Styles['parques__nav-link-icon']} icon={faMap}/>
            <p className={Styles['parques__nav-link-p']}>Mapa</p>
        </Link>

        <Link href='/parques/agregarUbicacion' className={`${Styles['parques__nav-link']} ${pathname === '/parques/agregar' ? Styles['parques__nav-link-activo'] : ''}`}>
            <FontAwesomeIcon className={Styles['parques__nav-link-icon']} icon={faLocationDot}/>
            <p className={Styles['parques__nav-link-p']}>Agregar Ubicacion</p>
        </Link>
    </nav>
  )
}
