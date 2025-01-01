'use client'
import React, { useState } from 'react'
import Styles from './AutenticacionFormulario.module.css'
import { Boton } from '../comunes/Boton/Boton';
import Link from 'next/link';
import InformacionLinks from '../comunes/informacionLinks/InformacionLinks';

export default function AutenticacionFormulario({
  titulo,
  onSubmit,
  campos,
  textoBoton,
  redireccionTexto,
  redireccionHref,
  redireccionLinkText
}) {

  const [formulario,setFormulario] = useState(
    campos.reduce((accion, campo) => ({...accion,[campo.name] : '' }), {} )
  )

  // funcion para manejar cambio 
  function manejarCambio(e) {
    const {name , value} = e.target;
    setFormulario({...formulario, [name] : value})
  }

  // funcion para enviar Formulario 
  async function enviarFormulario(e) {
    e.preventDefault();
    try {
      // Llamar a la función onSubmit (recibida como prop)
      await onSubmit(formulario);

      // Limpiar el formulario después de un submit exitoso
      setFormulario(
        campos.reduce((accion, campo) => ({ ...accion, [campo.name]: '' }), {})
      );
    } catch (error) {
      console.error('Error enviando los datos:', error);
    }
  }


  return (
    <section className={Styles['autenticacion']}>
      <h3 className='text-[30px] font-[600]'>{titulo}</h3>
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
