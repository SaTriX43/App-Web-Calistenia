import React, {useContext, useState } from 'react'
import Image from 'next/image'
import Styles from './BarraNavegacion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AutenticacionContext } from '@/context/AutenticacionContext'

export const BarraNavegacionMobile = () => {

  const [bars, setBars] = useState(false)
  const { autenticado } = useContext(AutenticacionContext)
  const pathname = usePathname()

  function manejarBars() {
    setBars(!bars)
  }

  return (
    <>
      <nav className={Styles['navbar']}>
        {/* logo  */}
        <div className='container flex max-w-[1000px] max-h-[70px] items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <Link href='/'>
              <div className={Styles['navbar__contenedor-logo']} >
                <Image
                  src={'/logo-calistenia.png'}
                  width={50}
                  height={50}
                  alt="Icono de Calistenia Ecuador"
                  className={Styles['navbar__logo']}
                />
              </div>
            </Link>
            <h2 className='text-[16px] font-[600] sm:text-[25px]'>HubThenics</h2>
          </div>
          
          {/* bars  */}
          <FontAwesomeIcon onClick={manejarBars} icon={faBars} className={Styles['navbar__bars']}/>
        </div>
      </nav>
      <ul className={`${Styles['navbar__contenedor-paginas']}  ${bars ? Styles['navbar__contenedor-paginas-activo'] : ''}`}>
        <li className={Styles['navbar__li-pagina']}>
          <Link 
            href="/" 
            className={`${Styles['navbar__links-pagina']} ${pathname === '/' ? 'text-black' : ''}`}
            onClick={() => {setBars(false)}}
          >
            Inicio
          </Link>
        </li>

        <li className={Styles['navbar__li-pagina']}>
          <Link 
            href="/parques" 
            className={`${Styles['navbar__links-pagina']} ${pathname.startsWith('/parques') ? 'text-black' : ''}`}
            onClick={() => {setBars(false)}}
          >
            Parques
          </Link>
        </li>

        

        {!autenticado ? (
          <li className={Styles['navbar__li-pagina']}>
            <Link 
              href="/autenticacion/login" 
              className={`${Styles['navbar__links-pagina']} ${pathname.startsWith('/autenticacion') ? 'text-black' : ''}`}
              onClick={() => {setBars(false)}}
            >
              Iniciar Sesión
            </Link>
          </li>
        ): (
          <li className={`${Styles['navbar__li-pagina']} ${pathname.startsWith('/usuario') ? 'text-black underline' : ''}`}>
           <Link href="/usuario" className={Styles['navbar__links-pagina']}>
             <FontAwesomeIcon
               icon={faUser}
             />
             Ver Perfil
           </Link>
          </li>
        )}
       
      </ul>
    </>
  )
}
