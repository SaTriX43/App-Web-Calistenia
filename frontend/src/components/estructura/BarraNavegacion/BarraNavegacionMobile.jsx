'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Styles from './BarraNavegacion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const BarraNavegacionMobile = () => {

  const [bars, setBars] = useState(false)

  function manejarBars() {
    setBars(!bars)
  }

  return (
    <>
      <nav className={Styles['navbar']}>
        {/* logo  */}
        <div className='container flex max-w-[1000px] max-h-[70px] items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <div className={Styles['navbar__contenedor-logo']} >
              <Image
                src={'/logo-calistenia.png'}
                width={30}
                height={30}
                alt='icono-pagina'
                className={Styles['navbar__logo']}
              />
            </div>
            <h2 className='text-[16px] font-[600] sm:text-[25px]'>SaTriXThenics</h2>
          </div>
          
          {/* bars  */}
          <FontAwesomeIcon onClick={manejarBars} icon={faBars} className={Styles['navbar__bars']}/>
        </div>
      </nav>
      <div className={`${Styles['navbar__contenedor-paginas']}  ${bars ? Styles['navbar__contenedor-paginas-activo'] : ''}`}>
        <li className={Styles['navbar__li-pagina']}>
          <Link href="/" className={Styles['navbar__links-pagina']}>Inicio</Link>
        </li>

        <li className={Styles['navbar__li-pagina']}>
          <Link href="/parques" className={Styles['navbar__links-pagina']}>Parques</Link>
        </li>
      </div>
    </>
  )
}
