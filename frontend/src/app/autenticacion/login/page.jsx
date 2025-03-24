'use client';

import AutenticacionFormulario from "@/components/AutenticacionFormulario/AutenticacionFormulario.jsx";
import { AutenticacionContext } from "@/context/AutenticacionContext";
import { iniciarSesionUsuario } from "@/utilidades/api/autenticacionApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Login() {

  const { actualizarSesion } = useContext(AutenticacionContext)

  const router = useRouter();
  const searchParams = useSearchParams();

  // Variables estáticas derivadas de useSearchParams
  const mensajeRedireccion = searchParams ? searchParams.get('mensaje') : null;
  const redireccionUrl = searchParams ? searchParams.get('redireccion') : '/';

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState(null)

  // =---------------------------------- 
  // Redirige si ya estás autenticado
  useEffect(() => {
    if (mensajeRedireccion) {
      setMensaje(mensajeRedireccion);
    }
  }, [router, mensajeRedireccion]);
  // -------------------------- 

  // Maneja el inicio de sesión
  async function manejarInicioSesion(data) {
    try {
      const respuesta = await iniciarSesionUsuario(data);
      setMensaje(respuesta.mensaje);
    
      
      // redirige despues de iniciar sesion a la pagina de donde se intento acceder
      setTimeout(() => {
        router.push(redireccionUrl || '/');
      }, 2000);

      actualizarSesion()
    } catch (error) {
      console.error(`Error al iniciar sesión: ${error.message}`);
      setError(error.message)
    }
  }

  return (
    <AutenticacionFormulario
      mensaje={mensaje}
      setMensaje={setMensaje}
      error={error}
      setError={setError}
      titulo="Iniciar Sesión"
      campos={[
        { label: 'Correo Electrónico', name: 'email', type: 'email', required: true },
        { label: 'Contraseña', name: 'pass', type: 'password', required: true }
      ]}
      textoBoton="Iniciar Sesión"
      onSubmit={manejarInicioSesion}
      redireccionTexto="¿No tienes una cuenta?"
      redireccionLinkText="Regístrate aquí"
      redireccionHref="/autenticacion/register"
    />
  );
}
