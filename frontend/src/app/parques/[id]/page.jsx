'use client'

import { getParqueId, getParques } from "@/utilidades/api";
import { useParams } from "next/navigation";
import React, {useEffect, useState } from "react";
import Styles from './page.module.css'
import Detalles from "./componentesDetalle/Detalles";
import Publicidad from "./componentesDetalle/Publicidad";
import Mapa from "./componentesDetalle/Mapa";

export default function DetalleParque() {
  const [parques, setParques] = useState([]) 
  const [parque, setParque] = useState(null)
  const { id } = useParams()

  // peticion a base de datos 
  useEffect(() => {
    async function peticionFetch() {
      try {
        const data = await getParqueId(id);
        setParque(data)

        const parquesData = await getParques();
        console.log(parquesData.data)
        setParques(parquesData.data)
      } catch (error) {
        console.log(error)
      }
    }

    peticionFetch()
  },[])

  if(!parque) {
    return <p className="mt-[200px]">Cargando parque....</p>
  }

  return (
    <section className={Styles['parques__detalle-parque']}>
      <Detalles
        imagen={parque.imagen}
        nombre={parque.nombre}
        direccion={parque.direccion}
        puntuacion={parque.puntuacion}
        canton={parque.canton}
        pais= {parque.pais}
        continente={parque.continente}
      />
      <div className={Styles['parques__detalle-parque-divisor']}>
        <Mapa 
          latitud={parque.latitud} 
          longitud={parque.longitud} 
          nombre={parque.nombre}
          ubicaciones={parques}
        />
        <Publicidad/>
      </div>
    </section>
  )
}
