import Image from 'next/image'
import Styles from './BarraNavegacion.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { AutenticacionContext } from '@/context/AutenticacionContext'

export const BarraNavegacionDesktop = () => {

  const pathname = usePathname()
  const { autenticado } = useContext(AutenticacionContext)

  return (
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
        
        <ul className={Styles['navbar__contenedor-paginas']}>
          <li className={`${Styles['navbar__li-pagina']} ${pathname === '/' ? 'text-black underline' : ''}`}>
            <Link href="/" className={Styles['navbar__links-pagina']}>Inicio</Link>
          </li>

          <li className={`${Styles['navbar__li-pagina']} ${pathname.startsWith('/parques') ? 'text-black underline' : ''}`}>
            <Link href="/parques" className={Styles['navbar__links-pagina']}>Parques</Link>
          </li>

         

          {!autenticado ? (
            <li className={`${Styles['navbar__li-pagina']} ${pathname.startsWith('/autenticacion') ? 'text-black underline' : ''}`}>
             <Link href="/autenticacion/login" className={Styles['navbar__links-pagina']}>Iniciar Sesión</Link>
            </li>
          ) : (
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
      </div>
    </nav>
  )
}
