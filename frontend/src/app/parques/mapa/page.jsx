'use client'
import React, { useEffect, useState } from 'react'
import Styles from './page.module.css'
import { getParques } from '@/utilidades/api/parqueApi'
import Mapa from '@/components/parques/Mapa/Mapa.jsx'
import Link from 'next/link'
import InformacionLinks from '@/components/comunes/informacionLinks/informacionLinks'

export default function PaginaMapa() {

  const [parques, setParques] = useState([])

  useEffect(() => {
    async function peticionFetch() {
      try {
        const parques = await getParques()
        setParques(parques.data)
      } catch (error) {
        
      }
    }

    peticionFetch()
  },[])


  return (
    <div className={Styles['parques__mapa-contenedor-mapa-sobre']}>
      <Mapa
        latitud={-1.8312}
        longitud={-78.1834}
        zoom={6}
        esGeneral={false}
        ubicaciones={parques}
        clases='parques__mapa'
      />
      
      <InformacionLinks/>
    </div>
  )
}
