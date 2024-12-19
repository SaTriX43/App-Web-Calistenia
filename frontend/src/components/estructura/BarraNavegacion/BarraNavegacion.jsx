import React from 'react'
import Styles from './BarraNavegacion.module.css'
import Image from 'next/image'

export const BarraNavegacion = () => {
  return (
    <nav className={Styles['navbar']}>
      <div className={Styles['navbar__contenedor-logo']}>
        <Image
          src={'/logo-calistenia.png'}
          width={30}
          height={30}
          alt='icono-pagina'
          className={Styles['navbar__logo']}
        />
      </div>
      <div className={Styles['navbar__contenedor-paginas']}>

        <li className={Styles['navbar__pagina']}>
          <a href="#" className={Styles['navbar__links-pagina']}>Inicio</a>
        </li>

        <li className={Styles['navbar__pagina']}>
          <a href="#" className={Styles['navbar__links-pagina']}>Parques</a>
        </li>
      </div>
    </nav>
  )
}
