'use client'

import React from 'react'
import Styles from './contacto.module.css'
import { Boton } from '@/components/comunes/Boton/Boton'

export default function Contacto() {
  return (
    <div className={Styles['informacion__contacto']}>
      <h1 className='text-[40px]'>contacto</h1>
      <form action="" className={Styles['informacion__contacto-formulario']}>
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label for="nombre">Nombre</label>
          <input type="text" className={Styles['informacion__contacto-formulario-grupo-item']} id='nombre'/>
        </div>
        {/* ---------------------  */}
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label for="email">Correo Electronico</label>
          <input type="text" className={Styles['informacion__contacto-formulario-grupo-item']} id='email'/>
        </div>
        {/* ------------------------  */}
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label>Asunto</label>
          <div className={Styles['informacion__contacto-formulario-radios']}>
            <label className={Styles['informacion__contacto-formulario-grupo-item-radio']} htmlFor='radio-problema'>
              Problema
              <input 
                name='asunto'
                value='problema'
                id='radio-problema'
                type="radio"   
              />
            </label>
            


            <label className={Styles['informacion__contacto-formulario-grupo-item-radio']} htmlFor='radio-publicidad'>
              Publicidad
              <input 
                name='asunto'
                value='publicidad'
                id='radio-publicidad'
                type="radio"   
              />
            </label>

            <label className={Styles['informacion__contacto-formulario-grupo-item-radio']} htmlFor='radio-peticion'>
              Peticion
              <input 
                name='asunto'
                value='peticion'
                id='radio-peticion'
                type="radio"   
              />
            </label>
          </div>
        </div>
        {/* ------------------------------  */}
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label for="mensaje">Mensaje</label>
          <textarea className={Styles['informacion__contacto-formulario-grupo-item-textarea']} id='mensaje'/>
        </div>
        <Boton
          texto='Enviar'
          type='submit'
          tipoBoton='primario'
        />
      </form>
    </div>
  )
}
