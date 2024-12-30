import React from 'react'
import Styles from './PiePagina.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export const PiePagina = () => {
  return (
    <footer className={Styles['footer']}>
      {/* logo  */}
      <div className='flex gap-[10px] items-center'>
        <div className={Styles['footer__contenedor-logo']}>
          <Image
            src={'/logo-calistenia.png'}
            width={30}
            height={30}
            alt='logo calistenia'
          />
        </div>
        <h3 className='text-[16px] font-[600] sm:text-[23px]'>HubThenics</h3>
      </div>
      {/* redes sociales  */}
      <div className={Styles['footer__contenedor-social']}>
        <FontAwesomeIcon icon={faInstagram} className={`${Styles['footer__icon-social']} text-purple-400 hover:text-purple-600`}/>
        <FontAwesomeIcon icon={faFacebook} className={`${Styles['footer__icon-social']} text-blue-600 hover:text-blue-800`}/>
        <FontAwesomeIcon icon={faTwitter} className={`${Styles['footer__icon-social']} text-blue-400 hover:text-blue-600`}/>
      </div>
      {/* paginas  */}
      <div className={Styles['footer__contenedor-paginas']}>
        <li className={Styles['footer__li-paginas']}>
          <Link href='/parques' className={Styles['footer__a-paginas']}>Parques</Link>
        </li>
      </div>

      {/* copyright  */}
      <div className={Styles['footer__contenedor-copyright']}>
        <h3><span className='font-[600]'>@Copyright</span> Santiago Gonzales</h3>
      </div>
    </footer>
  )
}
