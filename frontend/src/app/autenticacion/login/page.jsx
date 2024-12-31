'use client'

import AutenticacionFormulario from "@/components/autenticacion-formulario/AutenticacionFormulario"


export default function Login() {

  function manejarInicioSesion(data) {
    console.log(`Iniciado sesion con datos ${JSON.stringify(data)}`)
  }

  return (
    <AutenticacionFormulario
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
