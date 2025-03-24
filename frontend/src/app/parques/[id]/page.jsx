"use client";

import { getParqueId, getParques } from "@/utilidades/api/get/parqueApi";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Styles from "./page.module.css";
import Detalles from "./componentesDetalle/Detalles";
import Mapa from "../../../components/parques/Mapa/Mapa";
import DetallePublicidad from "./componentesDetalle/DetallePublicidad";
import Head from "next/head";
import ComentariosFormulario from "@/components/parques/Comentarios/ComentariosFormulario";
import Comentario from "@/components/parques/Comentarios/Comentario";

export default function DetalleParque() {
  const [parques, setParques] = useState([]);
  const [parque, setParque] = useState(null);
  const { id } = useParams();

  // peticion a base de datos
  useEffect(() => {
    async function peticionFetch() {
      try {
        const data = await getParqueId(id);
        console.log(data)
        setParque(data);

        const parquesData = await getParques();
        setParques(parquesData.data);
      } catch (error) {
        console.log(error);
      }
    }

    peticionFetch();
  }, []);

  if (!parque) {
    return <p className="mt-[200px]">Cargando parque....</p>;
  }


  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Conoce ${parque.nombre}, ubicado en ${parque.direccion}. Descubre su puntuación, ubicación y otros detalles para que tu experiencia en calistenia sea inmejorable.`}
        />
        <meta
          property="og:title"
          content={`${parque.nombre} - Detalles del Parque`}
        />
        <meta
          property="og:description"
          content={`Descubre ${parque.nombre} en ${parque.direccion}. Más detalles sobre este parque de calistenia en Ecuador.`}
        />
        <meta
          property="og:image"
          content={
            parque.imagenes?.[0] ||
            "https://res.cloudinary.com/do2t2cxvo/image/upload/v1738339923/parques/cpk1ypyi8mj1kuxxm51w.jpg"
          }
        />
        <meta
          property="og:url"
          content={`https://app-calistenia.vercel.app/parque/${id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${parque.nombre} - Detalles del Parque`}
        />
        <meta
          name="twitter:description"
          content={`Conoce ${parque.nombre} ubicado en ${parque.direccion}.`}
        />
        <meta
          name="twitter:image"
          content={
            parque.imagenes?.[0] ||
            "https://res.cloudinary.com/do2t2cxvo/image/upload/v1738339923/parques/cpk1ypyi8mj1kuxxm51w.jpg"
          }
        />
      </Head>

      <section className={Styles["parques__detalle-parque"]}>
        <Detalles
          imagenes={parque.imagenes}
          nombre={parque.nombre}
          direccion={parque.direccion}
          puntuacion={parque.puntuacion}
          canton={parque.canton}
          pais={parque.pais}
          continente={parque.continente}
        />
        <div className={Styles["parques__detalle-parque-divisor"]}>
          <div className="w-full d-flex flex-column">
            <Mapa
              latitud={parque.latitud}
              longitud={parque.longitud}
              ubicaciones={parques}
              clases={"parques__detalle-parque-mapa"}
            />
            <div className={Styles['parques__detalle-contenedor-formulario-comentarios']}>
              <h1 className="text-[35px] font-[600]">Comentarios</h1>
              <ComentariosFormulario
                idParque = {id}
              />

              <div className={Styles['parques__detalle-contendor-comentarios']}>
                <Comentario/>
              </div>
            </div>
          </div>
          
          <DetallePublicidad parques={parques} />
        </div>
      </section>
    </>
  );
}
