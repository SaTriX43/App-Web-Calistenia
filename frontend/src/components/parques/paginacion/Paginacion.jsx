'use client'
import React from 'react'
import Styles from './Paginacion.module.css'

export const Paginacion = ({
  pagina,
  total,
  limite,
  cambiarPagina
}) => {

  const totalPaginas = Math.ceil(total / limite)

  return (
    <div className={Styles['parques__contenedor-paginacion']}>
      <button
      onClick={() => cambiarPagina(pagina - 1)}  
      disabled={pagina === 1}>
        Atras
      </button>

      <span>{pagina} de {totalPaginas}</span>
      <button 
        onClick={() => cambiarPagina(pagina + 1)}
        disabled= {pagina === totalPaginas}
        >Siguiente</button>
    </div>
  )
}
