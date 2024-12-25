'use client'
import React, { useEffect, useState } from 'react'
import Styles from '../../estilos/parques.module.css'
import TarjetaParquesUbicaion from '../../components/parques/TarjetaParqueUbucacion/TarjetaParqueUbicacion'
import TarjetaParqueRecomendado from '@/components/parques/TarjetaParqueRecomendacion/TarjetaParqueRecomendado'
import { getParques } from '@/utilidades/api'

const Parques = () => {


  const [parques, setParques] = useState([])//variable que guarda los parques
  const [errorParques , setErrorParques] = useState(null);
  const [cargando, setCargando] = useState(true)

  // variables de paginacion 
  const [pagina, setPagina] = useState(1)
  const [limite] = useState(10)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchParques = async () => {
      try {
        const datos = await getParques(pagina, limite)
        setParques(datos.data)
        setTotal(datos.total)
      } catch (error) {
        setErrorParques(error.message)
      }finally {
        setCargando(false)
      }
    }

    fetchParques()
  },[pagina, limite])

  
  function cambiarPagina(nuevaPagina) {
    if(nuevaPagina > 0 && nuevaPagina <= Math.ceil(total / limite)) {
      setPagina(nuevaPagina)
      setCargando(true)
    }
  }


  if(cargando) {
    return <h1>Cargando....</h1>
  }

  if(errorParques) {
    return <h1>Error {errorParques}</h1>
  }

  const totalPaginas = Math.ceil(total / limite)


  return (
    <section className={Styles['parques']}>
      <div className={Styles['parques__divisor']}>
        {/* contenedor de parques  */}
        <div className='flex flex-col items-center'>
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
          <div className={Styles['parques__contenedor-paginacion']}>
              <button
              onClick={() => cambiarPagina(pagina -1)}  
              disabled={pagina === 1}>
                Atras
              </button>

              <span>{pagina} de {totalPaginas}</span>
              <button 
                onClick={() => cambiarPagina(pagina +1)}
                disabled= {pagina === totalPaginas}
                >Siguiente</button>
            </div>
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