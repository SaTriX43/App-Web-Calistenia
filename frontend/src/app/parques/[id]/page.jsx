'use client'

import { getParqueId, getParques } from "@/utilidades/api";
import { useParams } from "next/navigation";
import React, {useEffect, useState } from "react";
import Styles from './page.module.css'
import Detalles from "./componentesDetalle/Detalles";
import Mapa from "./componentesDetalle/Mapa";
import DetallePublicidad from "./componentesDetalle/DetallePublicidad";

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
        <DetallePublicidad 
          parques= {parques}
        />
      </div>
    </section>
  )
}
