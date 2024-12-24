'use client'
import React from 'react'
import Styles from '../../estilos/parques.module.css'
import TarjetaParquesUbicaion from '../../components/parques/TarjetaParqueUbicacion'
import TarjetaParqueRecomendado from '@/components/parques/TarjetaParqueRecomendado'

const Parques = () => {
  return (
    <section className={Styles['parques']}>
      <div className={Styles['parques__divisor']}>
        {/* contenedor de parques  */}
        <div className={Styles['parques__contenedor']}>
          <TarjetaParquesUbicaion
            titulo='Parque girasoles'
            imagen={'/imagen-parque-mediana.png'}
            pais='Ecuador'
            continente='Sudamerica'
            canton='Duran'
            link='#'
            puntuacion={3}
          />
          <TarjetaParquesUbicaion
            titulo='Parque girasoles'
            imagen={'/imagen-parque-mediana.png'}
            pais='Ecuador'
            continente='Sudamerica'
            canton='Duran'
            link='#'
            puntuacion={3}
          />
        </div>

        {/* contenedor publicidad y parques recomendados  */}
        <div className={Styles['parques__contenedor-publicidad-recomnedados']}>
          <div className={Styles['parques__contenedor-publicidad']}>
            <p>publicdad</p>
          </div>
          <h2 className='text-[30px] text-center'>Parques Recomendados</h2>
          <div className={Styles['parques__contenedor-recomendados']}>
            <TarjetaParqueRecomendado
              titulo='Mmahuevo los andes'
              imagen={'/imagen-parque-pequenia.png'}
              link='#'
            />

            <TarjetaParqueRecomendado
              titulo='Mmahuevo los andes'
              imagen={'/imagen-parque-pequenia.png'}
              link='#'
            />

            <TarjetaParqueRecomendado
              titulo='Mmahuevo los andes'
              imagen={'/imagen-parque-pequenia.png'}
              link='#'
            />
          </div>
        </div>
      </div>
    </section>
  )
}


export default Parques