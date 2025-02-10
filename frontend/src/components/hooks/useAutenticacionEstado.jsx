'use client'

import { useEffect, useState } from 'react'

export default function useAutenticacionEstado() {

  const [autenticado, setAutenticado] = useState(false)
  
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

        const data = await peticion.json()

        setAutenticado(data.autenticado)
      } catch (error) {
        console.log(`A ocurrido un error: ${error}`)
        setAutenticado(false)
      }
    }
    verificarToken()
  },[])

  return autenticado
}
