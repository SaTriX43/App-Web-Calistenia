"use client";
import { createContext, useState, useEffect } from "react";


const AutenticacionContext = createContext();

function AutenticacionProvider({children}) {

  const [usuario, setUsuario] = useState(null);
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);

  
    async function actualizarSesion() {
      try {
        const peticion = await fetch('https://app-web-calistenia-production.up.railway.app/autenticacion/sesion', {
          credentials : 'include'
        })

        if(!peticion.ok){
          throw new Error('No autenticado')
        }

        const data = await peticion.json()
        setAutenticado(data.autenticado)
        setUsuario(data.usuario)
        
      } catch (error) {
        console.log(`A ocurrido un error al autenticar el usuario: ${error.message}`)
        setAutenticado(false)
        setUsuario(null)
      } finally {
        setLoading(false)
      }
    }


  useEffect(() => {
    actualizarSesion()
  },[])

  return (
    <AutenticacionContext.Provider value={{usuario, autenticado, loading, actualizarSesion}}>
    {children}
    </AutenticacionContext.Provider>
  )
}

export {AutenticacionContext, AutenticacionProvider}