'use client'

import { getParqueId } from "@/utilidades/api";
import { useParams } from "next/navigation";
import React, {useEffect, useState } from "react";
import Styles from './page.module.css'
import Detalles from "./componentesDetalle/Detalles";
import Publicidad from "./componentesDetalle/Publicidad";
import Mapa from "./componentesDetalle/Mapa";

export default function DetalleParque() {

  const [parque, setParque] = useState([])
  const { id } = useParams()

  // peticion a base de datos 
  useEffect(() => {
    async function peticionFetch(id) {
      try {
        const data = await getParqueId(id);
        console.log(data)
        setParque(data)
      } catch (error) {
        console.log(error)
      }
    }

    peticionFetch(id)
  },[])

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
        <Mapa latitud={parque.latitud} longitud={parque.longitud} nombre={parque.nombre} />
        <Publicidad/>
      </div>
    </section>
  )
}
