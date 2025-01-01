'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function useAutenticacion(rutaProtegida) {

  const router = useRouter()
  const buscarParametro = useSearchParams()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) {
      const redireccion = rutaProtegida || '/'
      router.push(`/autenticacion/login?redireccion=${redireccion}`)
    }
  },[router, rutaProtegida])
}
