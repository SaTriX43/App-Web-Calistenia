'use client'
import React from 'react'
import Image from 'next/image'
import Styles from './BarraNavegacion.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const BarraNavegacionDesktop = () => {

  const pathname = usePathname()

  return (
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
          <h2 className='text-[16px] font-[600] sm:text-[25px]'>HubThenics</h2>
        </div>
        
        <div className={Styles['navbar__contenedor-paginas']}>
          <li className={`${Styles['navbar__li-pagina']} ${pathname === '/' ? 'text-black underline' : ''}`}>
            <Link href="/" className={Styles['navbar__links-pagina']}>Inicio</Link>
          </li>

          <li className={`${Styles['navbar__li-pagina']} ${pathname.startsWith('/parques') ? 'text-black underline' : ''}`}>
            <Link href="/parques" className={Styles['navbar__links-pagina']}>Parques</Link>
          </li>

          <li className={`${Styles['navbar__li-pagina']} ${pathname.startsWith('/autenticacion') ? 'text-black underline' : ''}`}>
            <Link href="/autenticacion/login" className={Styles['navbar__links-pagina']}>Iniciar Sesion</Link>
          </li>
        </div>
      </div>
    </nav>
  )
}
