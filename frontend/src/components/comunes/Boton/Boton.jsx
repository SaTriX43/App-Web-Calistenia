'use client'
import React from 'react'
import Styles from './Boton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Boton = (
  {
    texto ,
    clases ,
    onClick,
    icono,
    type = 'button',
    tipoBoton = 'primario' | 'btn-parque'
  }
) => {

  const baseBoton = `
    flex 
    h-[30px]

    gap-[5px]
    px-[5px]

    border-[2px] 

    items-center 
    justify-center 
    text-[18px] 
    cursor-pointer 
    transition-all duration-3000 ease
    `;


  const botonPrimario = `
      bg-yellow-300 
      hover:bg-yellow-500
      text-black 
      border-none
    `;


  const botonParque = `
      p-[5px]
      border-gray-500
      hover:bg-[#282828]
      hover:translate-y-[-3px]
    `

  const tipoBotonEstilo = tipoBoton === 'primario' ? botonPrimario : botonParque
  return (
    <button onClick={onClick} type={type} className={`${baseBoton} ${tipoBotonEstilo} ${clases} `}>
      {icono && <FontAwesomeIcon icon={icono}/>}
      {texto}
    </button>
  )
}
