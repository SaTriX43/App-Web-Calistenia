'use client'

import AutenticacionFormulario from "@/components/autenticacion-formulario/AutenticacionFormulario"
import useAutenticacion from "@/components/hooks/useAutenticacion"
import { iniciarSesionUsuario } from "@/utilidades/api/autenticacionApi"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


export default function Login() {

  const router = useRouter()
  const buscarParametro = useSearchParams()

  const [mensaje , setMensaje] = useState('')

  // me redirige si ya estoy logeado 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setMensaje('Ya estás autenticado');
      setTimeout(() => router.push('/'), 3000); // Redirige después de 3 segundos
    }
  },[router])

  

  async function manejarInicioSesion(data) {
    try {
      const respuesta = await iniciarSesionUsuario(data)
      localStorage.setItem('token',respuesta.token)
      const redireccionUrl = buscarParametro.get('redireccion') || '/';
      setMensaje(respuesta.mensaje)

      setTimeout(() => {
        router.push(redireccionUrl);
      },3000)
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
