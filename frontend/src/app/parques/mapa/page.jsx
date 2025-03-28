'use client'
import React, { useEffect, useState } from 'react'
import Styles from './page.module.css'
import { getParques } from '@/utilidades/api/parqueApi'
import InformacionLinks from '@/components/comunes/InformacionLinks/InformacionLinks.jsx'
import dynamic from 'next/dynamic';
const Mapa = dynamic(() => import('@/components/parques/Mapa/Mapa.jsx'), {
  ssr: false,
});


export default function PaginaMapa() {

  const [parques, setParques] = useState([])
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    async function peticionFetch() {
      try {
        const parques = await getParques()
        setParques(parques.data)
      } catch (error) {
        console.log(error)
        setError('Error al cargar los parques. Por favor, intenta de nuevo.')
      } finally {
        setCargando(false)
      }
    }

    peticionFetch()
  },[])

  if(cargando) {
    return <p>cargando ubicaciones....</p>
  }

  if(error) {
    return <p>{error}</p>
  }

  return (
    <div className={Styles['parques__mapa-contenedor-mapa-sobre']}>
      <Mapa
        latitud={-1.8312}
        longitud={-78.1834}
        zoom={6}
        ubicaciones={parques}
        clases='parques__mapa'
      />
      
      <InformacionLinks/>
    </div>
  )
}
