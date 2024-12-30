'use client'

import React, {useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Styles from './contacto.module.css'
import { Boton } from '@/components/comunes/Boton/Boton'
import { contactoPost } from '@/utilidades/api/contactoApi.js'
import InformacionLinks from '@/components/comunes/informacionLinks/informacionLinks'

export default function Contacto() {

  // variable que guarda datos del form 
  const formularioInicial = {
    id: uuidv4(),
    nombre: '',
    email: '',
    mensaje: '',
    asunto: 'peticion'
  }


  let [formulario , setFormulario] = useState(formularioInicial)
  let [mensaje, setMensaje] = useState('')
  let [error , setError] = useState(null)


  function manejarCambio(e) {
    const {name , value} = e.target;
    setFormulario({...formulario, [name] : value})
  }

  function manejarEnvio(e) {
    e.preventDefault()
  
    async function peticionPost() {
      try {
        const respuesta = await contactoPost(formulario)
        setMensaje(respuesta.mensaje)
        setError(null)

        setTimeout(() => setMensaje(''), 3000)

      } catch (error) {
        console.log(error.message)
        setError(error)
        setTimeout(() => setError(null), 5000)
      }
    }

    // valida si todo esta en orden 
    if(formulario.nombre && formulario.email && formulario.mensaje) {
      peticionPost()

      // rsetea el formulario 
      setFormulario({
        ...formularioInicial,
        id: uuidv4()
      })
    }
  }


  return (
    <section className={Styles['informacion__contacto']}>
      <h1 className='text-[40px]'>contacto</h1>
      {/* error  */}
      {error && (
        <div className={Styles['informacion__contacto-error']}>
          <h1>{error}</h1>
        </div>
      )} 
      {/* mensaje  */}
      {mensaje.length > 0 && (
        <div className={Styles['informacion__contacto-respuesta']}>
          <h1>{mensaje}</h1>
        </div>
      )} 
      <form onSubmit={manejarEnvio} className={Styles['informacion__contacto-formulario']}>
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label htmlFor="nombre">Nombre</label>
          <input 
            type="text" 
            required 
            value={formulario.nombre} 
            name='nombre'
            onChange={manejarCambio}
            className={Styles['informacion__contacto-formulario-grupo-item']} 
            id='nombre'
          />
        </div>
        {/* ---------------------  */}
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label htmlFor="email">Correo Electronico</label>
          <input 
            type="email" 
            required 
            value={formulario.email} 
            name='email'
            onChange={manejarCambio}
            className={Styles['informacion__contacto-formulario-grupo-item']} 
            id='email'
          />
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
                checked={formulario.asunto === 'problema'}
                onChange={manejarCambio}
                id='radio-problema'
                type="radio"   
              />
            </label>

            <label className={Styles['informacion__contacto-formulario-grupo-item-radio']} htmlFor='radio-publicidad'>
              Publicidad
              <input 
                name='asunto'
                value='publicidad'
                checked={formulario.asunto === 'publicidad'}
                onChange={manejarCambio}
                id='radio-publicidad'
                type="radio"   
              />
            </label>

            <label className={Styles['informacion__contacto-formulario-grupo-item-radio']} htmlFor='radio-peticion'>
              Peticion
              <input 
                name='asunto'
                value='peticion'
                checked={formulario.asunto === 'peticion'}
                onChange={manejarCambio}
                id='radio-peticion'
                type="radio"   
              />
            </label>
          </div>
        </div>
        {/* ------------------------------  */}
        <div className={Styles['informacion__contacto-formulario-grupo']}>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea 
            value={formulario.mensaje} 
            name='mensaje'
            onChange={manejarCambio}
            required 
            className={Styles['informacion__contacto-formulario-grupo-item-textarea']} 
            id='mensaje'
          />
        </div>
        <Boton
          texto='Enviar'
          type='submit'
          tipoBoton='primario'
        />
      </form>
      <InformacionLinks/>
    </section>
  )
}
