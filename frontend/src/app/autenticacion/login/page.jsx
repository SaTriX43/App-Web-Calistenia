'use client'

import AutenticacionFormulario from "@/components/autenticacion-formulario/AutenticacionFormulario"
import { iniciarSesionUsuario } from "@/utilidades/api/autenticacionApi"


export default function Login() {

  async function manejarInicioSesion(data) {
    try {
      const respuesta = await iniciarSesionUsuario(data)
      alert(`Sesion iniciada con exito ${respuesta}`)
    } catch (error) {
      console.log(`Error al iniciar sesion ${error.message}`)
    }
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
