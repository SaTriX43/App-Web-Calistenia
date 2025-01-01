'use client'

import AutenticacionFormulario from '@/components/autenticacion-formulario/AutenticacionFormulario'
import { registrarUsuario } from '@/utilidades/api/autenticacionApi'
import React from 'react'

export default function Register() {

  async function manejarRegistrarse(data) {
    try {
      const respuesta = await registrarUsuario(data)
      alert(`${respuesta.mensaje} ${JSON.stringify(respuesta.usuario)}`)
    } catch (error) {
      console.log(`Error al registrar usuario ${error.message} `)
      alert(error)
    }
  }

  return (
    <AutenticacionFormulario
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
