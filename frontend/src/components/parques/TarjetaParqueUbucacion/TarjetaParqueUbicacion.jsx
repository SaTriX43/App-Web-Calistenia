'use client';

import React, { useState } from "react";
import Styles from "./TarjetaParqueUbicacion.module.css";
import Image from "next/image";
import { faCircleDot, faCity, faEarth } from "@fortawesome/free-solid-svg-icons";
import { Boton } from "../../comunes/Boton/Boton";
import Link from "next/link";

export default function TarjetaParqueUbicacion({
  imagen,
  titulo,
  direccion,
  puntuacion = 1,
  pais,
  continente,
  canton,
  id,
}) {
  // Ruta de la imagen predeterminada desde 'public'
  const imagenPredeterminada = "/imagen-parque-no-disponible.png";

  // Estado para manejar errores de carga de la imagen
  const [errorCarga, setErrorCarga] = useState(false);

  // Usar la imagen predeterminada si hay un error de carga
  const imagenFinal = !imagen || errorCarga ? imagenPredeterminada : imagen;


  return (
    <article className={Styles["parques__tarjeta"]}>
      <div className={Styles["parques__tarjeta-contenedor-img"]}>
        <Link className="w-full" href={`/parques/${id}`}>
          <Image
            key={id}
            src={imagenFinal}
            width={300}
            height={300}
            className="img"
            alt={`Imagen de parque: ${titulo}`}
            // Detectar errores en la carga
            onError={() => setErrorCarga(true)}
          />
        </Link>  
      </div>

      {/* contenedor de informacion del parque */}
      <div className={Styles["parques__tarjeta-contenedor-info"]}>
        <Link href={`/parques/${id}`}>
          <h3 className={Styles["parques__tarjeta-titulo"]}>{titulo} | {direccion}</h3>
        </Link>

        <div className={Styles["parques__tarjeta-contenedor-puntuacion"]}>
          {Array.from({ length: 5 }).map((_, index) =>
            index < puntuacion ? "⭐" : ""
          )}
        </div>

        {/* contenedor de botones para pais continente y canton */}
        <div className={Styles["parques__tarjeta-contenedor-botones"]}>

          <Boton
            tipoBoton="btn-parque"
            texto={pais}
            icono={faEarth}
            clases={Styles["parques__tarjeta-boton-ubicacion"]}
          />

          <Boton
            tipoBoton="btn-parque"
            texto={continente}
            icono={faCircleDot}
            clases={Styles["parques__tarjeta-boton-ubicacion"]}
          />

          <Boton
            tipoBoton="btn-parque"
            texto={canton}
            icono={faCity}
            clases={Styles["parques__tarjeta-boton-ubicacion"]}
          />
        </div>
      </div>
    </article>
  );
}
