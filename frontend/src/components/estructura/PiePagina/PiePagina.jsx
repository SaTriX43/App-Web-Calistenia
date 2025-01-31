import React from 'react'
import Styles from './PiePagina.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export const PiePagina = () => {
  return (
    <footer className={Styles['footer']}>
      {/* logo  */}
      <div className='flex gap-[10px] items-center'>
        <div className={Styles['footer__contenedor-logo']}>
          <Image
            src={'/logo-calistenia.png'}
            width={50}
            height={50}
            alt='logo calistenia'
          />
        </div>
        <h3 className='text-[16px] font-[600] sm:text-[23px]'>HubThenics</h3>
      </div>
      {/* redes sociales  */}
      <div className={Styles['footer__contenedor-social']}>

        <a href="https://www.facebook.com/profile.php?id=61571200568609" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className={`${Styles['footer__icon-social']} text-blue-600 hover:text-blue-800`}/>
        </a>

        <a href="https://www.instagram.com/hubthenics/" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className={`${Styles['footer__icon-social']} text-purple-400 hover:text-purple-600`}/>
        </a>

        <a href="https://x.com/HubThenics" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className={`${Styles['footer__icon-social']} text-blue-400 hover:text-blue-600`}/>
        </a>

        <a href="https://www.tiktok.com/@hubthenics?is_from_webapp=1&sender_device=pc" target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} className={`${Styles['footer__icon-social']}  hover:text-gray-300`}/>
        </a>
        
        
        
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
