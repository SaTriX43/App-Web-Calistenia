'use client'

import ParquesUbicacionParque from '@/components/estructura/paginaParques/ParquesUbicacion/ParquesUbicacionParque'
import Styles from '../../estilos/parques.module.css'


const Parques = () => {
  return (
    <section className={Styles['parques']}>
      <ParquesUbicacionParque/>
    </section>
  )
}


export default Parques