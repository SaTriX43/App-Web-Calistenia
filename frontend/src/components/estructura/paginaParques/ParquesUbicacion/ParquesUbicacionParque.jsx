'use client'
import React, { useEffect, useState } from 'react'
import Styles from './ParquesUbicacionParque.module.css'
import { getParques } from '@/utilidades/api/get/parqueApi'
import { Publicidad } from '@/components/parques/publicidad/Publicidad'
import { Paginacion } from '@/components/parques/paginacion/Paginacion'
import TarjetaParqueUbicacion from '@/components/parques/TarjetaParqueUbucacion/TarjetaParqueUbicacion'
import TarjetaParqueRecomendado from '@/components/parques/TarjetaParqueRecomendacion/TarjetaParqueRecomendado'

function ParquesUbicacionParque() {
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



  return (
    <div className={Styles["parques__divisor"]}>
      {/* contenedor de parques  */}
      <div className="flex flex-col items-center">
        {/* componente TarjetaParquesUbicaion */}
        <div className={Styles["parques__contenedor"]}>
          {parques.map((parque) => (
            <TarjetaParqueUbicacion
              key={parque.id}
              id={parque.id}
              titulo={parque.nombre}
              direccion={parque.direccion}
              imagen={parque.imagenes?.[0]}
              pais={parque.pais}
              continente={parque.continente}
              canton={parque.canton}
              puntuacion={parque.puntuacion}
            />
          ))}
        </div>
        {/* paginacion  */}
        <Paginacion
          total={total}
          pagina={pagina}
          limite={limite}
          cambiarPagina={cambiarPagina}
        />
      </div>

      {/* contenedor publicidad y parques recomendados  */}
      <div className={Styles["parques__contenedor-publicidad-recomnedados"]}>
        {/* <Publicidad /> */}
        <h2 className="text-[30px] text-center">Parques Recomendados</h2>
        {/* ParquesRecomendados  */}
        <div className={Styles["parques__contenedor-recomendados"]}>
          {parques.slice(0, 3).map((parque) => (
            <TarjetaParqueRecomendado
              key={parque.id}
              id={parque.id}
              titulo={parque.nombre}
              imagen={parque.imagenes?.[0]}
              puntuacion={parque.puntuacion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParquesUbicacionParque;
