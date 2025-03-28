"use client";
import { createContext, useState, useEffect } from "react";


const AutenticacionContext = createContext();

const urlBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

function AutenticacionProvider({children}) {

  const [usuario, setUsuario] = useState(null);
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);
  
    async function actualizarSesion() {
      try {
        const peticion = await fetch(`${urlBase}/autenticacion/sesion`, {
          credentials : 'include'
        })

        if(!peticion.ok){
          throw new Error(`No autenticado: ${peticion.status} - ${peticion.statusText}`)
        }

        const data = await peticion.json()
        setAutenticado(data.autenticado)
        setUsuario(data.usuario)
        
      } catch (error) {
        console.log(`Ha ocurrido un error al autenticar el usuario: ${error.message}`)
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