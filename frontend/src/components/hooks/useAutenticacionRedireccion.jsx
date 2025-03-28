'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const urlBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export default function useAutenticacionRedireccion(rutaProtegida) {

  const router = useRouter()
  const [cargando , setCargando] = useState(true)
  
  useEffect(() => {
    async function verificarToken() {
      try {
        const peticion = await fetch(`${urlBase}/autenticacion/sesion`, {
          method:'GET',
          credentials: 'include'
        })

        if(!peticion.ok) {
          throw new Error('No se pudo verificar el token')
        }

      } catch (error) {
        console.error(`Error al verificar token`,error)
        const redireccion = rutaProtegida || '/'
        router.push(`/autenticacion/login?redireccion=${redireccion}&mensaje=Debe iniciar sesión para acceder a esta página`)
      }finally {
        setCargando(false)
      }
    }
    verificarToken()
  },[router, rutaProtegida])

  return {cargando}
}
