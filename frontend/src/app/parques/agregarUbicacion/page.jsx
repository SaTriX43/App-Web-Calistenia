'use client'
import React from 'react'
import Styles from './page.module.css'
import useAutenticacion from '@/components/hooks/useAutenticacion'

export default function AgregarUbicacion() {

  useAutenticacion('/autenticacion/login')


  return (
    <section className={Styles['parques__agregar-ubicacion']}>
      <h1 className='text-[30px]'>
        bienvenidos a agregar ubicacion de parques
      </h1>
    </section>
  )
}
