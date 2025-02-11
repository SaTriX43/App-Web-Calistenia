'use client'

import AutenticacionFormulario from '@/components/AutenticacionFormulario/AutenticacionFormulario'
import { AutenticacionContext } from '@/context/AutenticacionContext'
import { registrarUsuario } from '@/utilidades/api/post/autenticacionApi'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

export default function Register() {

  const {autenticado} = useContext(AutenticacionContext)
  const [mensaje , setMensaje] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()
  

  // ------------------------- 
    // me redirige si ya estoy logeado 
    useEffect(() => {
      if(autenticado) {
        setMensaje('Ya estás autenticado');
        setTimeout(() => router.push('/'), 3000); // Redirige después de 3 segundos
      } 
    },[router])
    // ------------------------- 

  // funcion para registrarse 
  async function manejarRegistrarse(data) {
    try {
      const respuesta = await registrarUsuario(data)
      alert(respuesta.mensaje)
      setMensaje(respuesta.mensaje)
    } catch (error) {
      console.log(`Error al registrar usuario ${error.message} `)
      setError(error.message)
    }
  }

  return (
    <AutenticacionFormulario
      mensaje={mensaje}
      setMensaje={setMensaje}
      error={error}
      setError={setError}
      titulo='Registrate'
      campos={[
        {label:'Nombre', name:'name', type:'text', required: true},
        {label:'Correo Electronico', name:'email', type:'email', required: true},
        {label:'Contraseña', name:'pass', type:'password', required: true},
        {label:'Vuelve a escribir Contraseña', name:'pass2', type:'password', required: true}
      ]}
      textoBoton='Registrate'
      onSubmit={manejarRegistrarse}
      redireccionTexto='Tienes una cuenta?'
      redireccionLinkText='Inicia Sesion aqui'
      redireccionHref='/autenticacion/login'
    />
  )
}
