'use client'
import React, { useEffect, useState } from 'react'
import Styles from '../../estilos/parques.module.css'
import TarjetaParquesUbicaion from '../../components/parques/TarjetaParqueUbicacion'
import TarjetaParqueRecomendado from '@/components/parques/TarjetaParqueRecomendado'
import { getParques } from '@/utilidades/api'

const Parques = () => {

  const [parques, setParques] = useState([])
  const [errorParques , setErrorParques] = useState(null);
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const fetchParques = async () => {
      try {
        const datos = await getParques()
        setParques(datos)
      } catch (error) {
        setErrorParques(error.message)
      }finally {
        setCargando(false)
      }
    }

    fetchParques()
  },[])

  if(cargando) {
    return <h1>Cargando....</h1>
  }

  if(errorParques) {
    return <h1>Error {errorParques}</h1>
  }


  return (
    <section className={Styles['parques']}>
      <div className={Styles['parques__divisor']}>
        {/* contenedor de parques  */}
        <div className={Styles['parques__contenedor']}>
          {parques.map((parque) => (
            <TarjetaParquesUbicaion
              key={parque.id}
              id={parque.id}
              titulo={parque.nombre}
              imagen={parque.imagen}
              pais={parque.pais}
              continente={parque.continente}
              canton={parque.canton}
              link='#'
              puntuacion={parque.puntuacion}
            />
          ))}
        
        </div>

        {/* contenedor publicidad y parques recomendados  */}
        <div className={Styles['parques__contenedor-publicidad-recomnedados']}>
          <div className={Styles['parques__contenedor-publicidad']}>
            <p>publicdad</p>
          </div>
          <h2 className='text-[30px] text-center'>Parques Recomendados</h2>
          <div className={Styles['parques__contenedor-recomendados']}>
            {parques.slice(0,3).map((parque) => (
              <TarjetaParqueRecomendado
                key={parque.id}
                id={parque.id}
                titulo={parque.nombre}
                imagen={parque.imagen}
                puntuacion={parque.puntuacion}
                link='#'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default Parques