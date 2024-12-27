'use client'

import { getParqueId } from "@/utilidades/api";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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
    <div className="mt-[200px]">
      <h1>Detalle de parques con id {parque.id}</h1>
      <p>{parque.descripcion}</p>
    </div>
  )
}
