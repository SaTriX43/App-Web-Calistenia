'use client'

import AutenticacionFormulario from "@/components/autenticacion-formulario/AutenticacionFormulario"
import { iniciarSesionUsuario } from "@/utilidades/api/autenticacionApi"
import { useState } from "react"


export default function Login() {

  const [mensaje , setMensaje] = useState('')

  async function manejarInicioSesion(data) {
    try {
      const respuesta = await iniciarSesionUsuario(data)
      localStorage.setItem('token',respuesta.token)
      alert(respuesta.mensaje)
      setMensaje(respuesta.mensaje)
    } catch (error) {
      console.log(`Error al iniciar sesion ${error.message}`)
      throw new Error(error || 'Error al iniciar sesión');
    }
  }

  return (
    <AutenticacionFormulario
      mensaje={mensaje}
      setMensaje={setMensaje}
      titulo='Iniciar Sesion'
      campos={[
        {label:'Correo Electronico', name:'email', type:'email', required: true},
        {label:'Contraseña', name:'pass', type:'password', required: true}
      ]}
      textoBoton='Iniciar Sesion'
      onSubmit={manejarInicioSesion}
      redireccionTexto='No tienes una cuenta?'
      redireccionLinkText='Registrate aqui'
      redireccionHref='/autenticacion/register'
    />
  )
}
