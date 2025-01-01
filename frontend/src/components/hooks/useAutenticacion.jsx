'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function useAutenticacion() {

  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token) {
      router.push('/autenticacion/login')
    }
  },[])
}
