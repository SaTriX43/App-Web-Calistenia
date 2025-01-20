'use client';

import AutenticacionFormulario from "@/components/AutenticacionFormulario/AutenticacionFormulario.jsx";
import { iniciarSesionUsuario } from "@/utilidades/api/post/autenticacionApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Variables estáticas derivadas de useSearchParams
  const mensajeRedireccion = searchParams ? searchParams.get('mensaje') : null;
  const redireccionUrl = searchParams ? searchParams.get('redireccion') : '/';

  const [mensaje, setMensaje] = useState('');

  // Redirige si ya estás autenticado
  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (mensajeRedireccion) {
      setMensaje(mensajeRedireccion);
    }

    if (token) {
      setMensaje('Ya estás autenticado');
      setTimeout(() => router.push('/'), 3000); // Redirige después de 3 segundos
    }
  }, [router, mensajeRedireccion]);

  // Maneja el inicio de sesión
  async function manejarInicioSesion(data) {
    try {
      const respuesta = await iniciarSesionUsuario(data);
      localStorage.setItem('token', respuesta.token);
      setMensaje(respuesta.mensaje);

      setTimeout(() => {
        router.push(redireccionUrl);
      }, 3000);
    } catch (error) {
      console.error(`Error al iniciar sesión: ${error.message}`);
      setError('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  }

  return (
    <AutenticacionFormulario
      mensaje={mensaje}
      setMensaje={setMensaje}
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
