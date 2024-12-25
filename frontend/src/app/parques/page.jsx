'use client'

import ParquesUbicacionParque from '@/components/estructura/paginaParques/ParquesUbicacion/ParquesUbicacionParque'
import Styles from '../../estilos/parques.module.css'
import Descripcion from '@/components/parques/Descripcion/Descripcion'


const Parques = () => {
  return (
    <section className={Styles['parques']}>
      <ParquesUbicacionParque/>
      <Descripcion/>
    </section>
  )
}


export default Parques