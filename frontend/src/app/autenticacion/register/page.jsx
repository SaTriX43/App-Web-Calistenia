'use client'

import AutenticacionFormulario from '@/components/autenticacion-formulario/AutenticacionFormulario'
import React from 'react'

export default function Register() {

  function manejarRegistrarse(data) {
    console.log(`Registrase con datos ${data}`)
  }

  return (
    <AutenticacionFormulario
          titulo='Registrate'
          campos={[
            {label:'Nombre', name:'name', type:'text', required: true},
            {label:'Correo Electronico', name:'email', type:'email', required: true},
            {label:'Contraseña', name:'pass', type:'password', required: true},
            {label:'Vuelve a escribir Contraseña', name:'pass-2', type:'password', required: true}
          ]}
          textoBoton='Registrate'
          onSubmit={manejarRegistrarse}
          redireccionTexto='Tienes una cuenta?'
          redireccionLinkText='Inicia Sesion aqui'
          redireccionHref='/autenticacion/login'
        />
  )
}
