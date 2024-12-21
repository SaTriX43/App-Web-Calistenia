'use client'
import React from 'react'
import Styles from './Boton.module.css'

export const Boton = (
  {
    texto ,
    clases ,
    onClick,
    tipoBoton = 'primario' | 'secundario'
  }
) => {

  const baseBoton = `
    flex 
    h-[30px]

    border-none
    border-black
    border-[2px] 

    items-center 
    justify-center 
    text-[18px] 
    cursor-pointer 
    text-black 
    transition-all duration-3000 ease
    `;


  const botonPrimario = `
    bg-yellow-300 
    hover:bg-yellow-500
    `;


  const botonSecundario = `
    bg-sky-400 
    hover:bg-sky-500
    `

  const tipoBotonEstilo = tipoBoton === 'primario' ? botonPrimario : botonSecundario
  return (
    <button onClick={onClick} className={`${baseBoton} ${tipoBotonEstilo} ${clases}`}>
      {texto}
    </button>
  )
}
