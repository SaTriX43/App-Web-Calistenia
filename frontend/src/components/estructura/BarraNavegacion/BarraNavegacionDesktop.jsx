'use client'
import React from 'react'
import Image from 'next/image'
import Styles from './BarraNavegacion.module.css'
import Link from 'next/link'

export const BarraNavegacionDesktop = () => {
  return (
    <nav className={Styles['navbar']}>
      {/* logo  */}
      <div className='container flex max-w-[1000px] items-center justify-between'>
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
        
        <div className={Styles['navbar__contenedor-paginas']}>
          <li className={Styles['navbar__li-pagina']}>
            <Link href="/" className={Styles['navbar__links-pagina']}>Inicio</Link>
          </li>

          <li className={Styles['navbar__li-pagina']}>
            <Link href="/parques" className={Styles['navbar__links-pagina']}>Parques</Link>
          </li>
        </div>
      </div>
    </nav>
  )
}
