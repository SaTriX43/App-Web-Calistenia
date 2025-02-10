'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function useAutenticacionRedireccion(rutaProtegida) {

  const router = useRouter()
  
  useEffect(() => {
    async function verificarToken() {
      try {
        const peticion = await fetch('http://localhost:4000/autenticacion/sesion', {
          method:'GET',
          credentials: 'include'
        })

        if(!peticion.ok) {
          throw new Error('No se pudo verificar el token')
        }

      } catch (error) {
        const redireccion = rutaProtegida || '/'
        router.push(`/autenticacion/login?redireccion=${redireccion}&mensaje=Debe de iniciar sesion para acceder a esta pagina`)
      }
    }
    verificarToken()
  },[router, rutaProtegida])
}
