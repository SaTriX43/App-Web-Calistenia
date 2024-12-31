'use client'

import React, { useState } from 'react'
import Styles from './login.module.css'
import { Boton } from '@/components/comunes/Boton/Boton'
import Link from 'next/link'

export default function Login() {

  let formularioInicial = {
    email:'',
    pass:''
  }

  const [formulario, setFormulario] = useState(formularioInicial)

  // funcion para cambiar valores 
  function manejarCambio(e) {
    const {name , value} = e.target;
    setFormulario({...formulario, [name] : value})
  }

  // funcion para enviar Formulario 
  function enviarFormulario(e) {
    e.preventDefault()
    console.log('Enviando formulario', formulario)
  }

  return (
    <section className={Styles['autenticacion__login']}>
      <h3 className='text-[30px] font-[600]'>Iniciar Sesion</h3>
      <div className={Styles['autenticacion__login-contenedor']}>
        <form className={Styles['autenticacion__login-form']} onSubmit={enviarFormulario}>
          <div className={Styles['autenticacion__login-form-group']}>
            <label htmlFor="email">Correo Electronico</label>
            <input 
              required
              type="email"
              id='email'
              name='email'
              onChange={manejarCambio}
              value={formulario.email}
              className={Styles['autenticacion__login-form-group-item-input']}
            />
          </div>

          <div className={Styles['autenticacion__login-form-group']}>
            <label htmlFor="pass">Contraseña</label>
            <input 
              required
              type="password"
              id='pass'
              name='pass'
              onChange={manejarCambio}
              value={formulario.pass}
              className={Styles['autenticacion__login-form-group-item-input']}
            />
          </div>
          <Boton
            tipoBoton='primario'
            texto='Iniciar Sesion'
            type='submit'
            clases='mt-[20px]'
          />
        </form>
        <div className={Styles['autenticacion__login-contenedor-redireccion']}>
          <p className='text-[18px]'>No tienes una cuenta?</p>
          <Link href='/autenticacion/register'>
            <p className={Styles['autenticacion__login-contenedor-redireccion-enlace']}>Registrate aqui</p>
           
          </Link>
        </div>
      </div>
    </section>
  )
}
