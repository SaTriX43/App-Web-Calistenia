'use client'
import React, { useEffect, useState } from 'react'
import Styles from './AutenticacionFormulario.module.css'
import { Boton } from '../comunes/Boton/Boton';
import Link from 'next/link';
import InformacionLinks from '../comunes/InformacionLinks/InformacionLinks';

export default function AutenticacionFormulario({
  titulo,
  onSubmit,
  mensaje,
  setMensaje,
  campos,
  textoBoton,
  redireccionTexto,
  redireccionHref,
  redireccionLinkText
}) {

  const [formulario,setFormulario] = useState(
    campos.reduce((accion, campo) => ({...accion,[campo.name] : '' }), {} )
  )

  const [error , setError] = useState(null)

  // limpia el mensaje 
  useEffect(() => {
    const time = setTimeout(() => setMensaje(''), 3000)
    return () => clearTimeout(time)
  },[mensaje, setMensaje])

  // funcion para manejar cambio 
  function manejarCambio(e) {
    const {name , value} = e.target;
    setFormulario({...formulario, [name] : value})
  }

  // funcion para enviar Formulario 
  async function enviarFormulario(e) {
    e.preventDefault();
    try {
      setError(null)
      // Llamar a la función onSubmit (recibida como prop)
      await onSubmit(formulario);

      setFormulario(
        campos.reduce((accion,campo) => ({...accion, [campo.name] : ''}), {})
      )
    } catch (error) {
      setError(error.message || `A ocurrido un error`)
    }
  }


  return (
    <section className={Styles['autenticacion']}>
      <h3 className='text-[30px] font-[600]'>{titulo}</h3>
      {mensaje && (
        <div className={Styles['autenticacion-mensaje']}>
          <p>{mensaje}</p>
        </div>
      )}
      <div className={Styles['autenticacion-contenedor']}>
        <form className={Styles['autenticacion-form']} onSubmit={enviarFormulario}>
          {campos.map((campo) => (
            <div key={campo.name} className={Styles['autenticacion-form-group']}>
              <label htmlFor={campo.name}>{campo.label}</label>
              <input 
                required= {campo.required}
                type={campo.type}
                id={campo.name}
                name={campo.name}
                onChange={manejarCambio}
                value={formulario[campo.name]}
                className={Styles['autenticacion-form-group-item-input']}
              />
            </div>
          ))}
          {error && (
            <p className='text-red-300 text-[20px]'>{error}</p>
          )}
          <Boton
            tipoBoton='primario'
            texto={textoBoton}
            type='submit'
            clases='mt-[20px]'
          />
        </form>
        <div className={Styles['autenticacion-contenedor-redireccion']}>
          <p className='text-[18px]'>{redireccionTexto}</p>
          <Link href={redireccionHref}>
            <p className={Styles['autenticacion-contenedor-redireccion-enlace']}>
              {redireccionLinkText}
            </p>
           
          </Link>
        </div>
      </div>
      <InformacionLinks/>
    </section>
  )
}
