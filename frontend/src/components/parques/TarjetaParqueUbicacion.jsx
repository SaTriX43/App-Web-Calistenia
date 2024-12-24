'use client'

import React from "react";
import Styles from "./TarjetaParqueUbicacion.module.css";
import Image from "next/image";
import { faCircleDot, faCity, faEarth } from "@fortawesome/free-solid-svg-icons";
import { Boton } from "../comunes/Boton";
import Link from "next/link";

export default function TarjetaParqueUbicacion({
  imagen,
  titulo,
  puntuacion = 1,
  pais,
  continente,
  canton,
  link
}) {

  function verEnMapa() {
    console.log('viendo en mapa')
  }

  return (
    <article className={Styles["parques__tarjeta"]}>
      <div className={Styles["parques__tarjeta-contedor-img"]}>
        <Image
          src={imagen}
          width={300}
          height={300}
          className="img"
          alt="Imagen de parque"
        />
      </div>

      {/* contenedor de informacion del parque */}
      <div className={Styles["parques__tarjeta-contedor-info"]}>
        <Link href={link}>
          <h3 className={Styles['parques__tarjeta-titulo']}>{titulo}</h3>
        </Link>
        
        <div className={Styles['parques__tarjeta-contenedor-puntuacion']}>
          {Array.from({length : 5}).map((_,index) => (
            index < puntuacion && '⭐' 
          ))}
        </div>

        {/* contenedor de botones para pais continente y canton */}

        <div className={Styles['parques__tarjeta-contenedor-botones']}>
          <Boton
            tipoBoton='btn-parque'
            texto={pais}
            onClick={verEnMapa}
            icono={faEarth}
            clases={Styles['parques__tarjeta-boton-ubicacion']}
          />

          <Boton
            tipoBoton='btn-parque'
            texto={continente}
            onClick={verEnMapa}
            icono={faCircleDot}
            clases={Styles['parques__tarjeta-boton-ubicacion']}
          />

          <Boton
            tipoBoton='btn-parque'
            texto={canton}
            onClick={verEnMapa}
            icono={faCity}
            clases={Styles['parques__tarjeta-boton-ubicacion']}
          />
        </div>

      </div>
      
      
    </article>
  );
}
