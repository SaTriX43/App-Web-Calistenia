"use client";

import { getParqueId, getParques } from "@/utilidades/api/parqueApi";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Styles from "./page.module.css";
import Detalles from "./componentesDetalle/Detalles";
import Mapa from "../../../components/parques/Mapa/Mapa";
import DetallePublicidad from "./componentesDetalle/DetallePublicidad";
import Head from "next/head";
import ComentariosFormulario from "@/components/parques/Comentarios/ComentariosFormulario";
import Comentario from "@/components/parques/Comentarios/Comentario";
import { deleteComentarioId, getComentariosId } from "@/utilidades/api/comentariosApi";
import { AutenticacionContext } from "@/context/AutenticacionContext";
import { useRouter } from "next/navigation";

export default function DetalleParque() {
  const {usuario, autenticado} = useContext(AutenticacionContext)
  const [parques, setParques] = useState([]);
  const [parque, setParque] = useState(null);
  const [comentarios, setComentarios] = useState([])
  const router = useRouter()
  const { id } = useParams();

  // peticion a base de datos
  useEffect(() => {
    async function peticionFetch() {
      try {
        const data = await getParqueId(id);
        const dataComentarios = await getComentariosId(id)
        setParque(data);
        setComentarios(dataComentarios)

        const parquesData = await getParques();
        setParques(parquesData.data);
      } catch (error) {
        console.log(error);
      }
    }

    peticionFetch();
  }, []);

  // funcion para agregar comentario 
  function agregarComentario(comentario) {
    const nuevoComentario= {...comentario, usuario: usuario.nombre}
    setComentarios((prevComentario) => [nuevoComentario, ...prevComentario])
  }

  //funcion para eliminar comentario
  async function eliminarComentario(comentarioId, comentarioUsuario) {
    if(!autenticado) {
      router.push(`/autenticacion/login?redireccion=/parques/${id}&mensaje=Debes iniciar sesión para eliminar comentario`)
      return
    }

    if(usuario.nombre !== comentarioUsuario) {
      alert(`Debe de ser su comentario para poder eliminarlo`)
      return
    }

    const confirmacion = window.confirm(`Seguro que deseas eliminar tu comentario?`)

    if(!confirmacion) return


    try {
      const respuesta = await deleteComentarioId(comentarioId)
      if(respuesta && respuesta.mensaje) {
        setComentarios(prev => prev.filter(comentario => comentario.id !== comentarioId))
      }
      
    } catch (error) {
      alert(error)
    }
  }


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
          <div className="w-full max-w-[600px] max-[800px]:max-w-[800px] d-flex flex-column">
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
                agregarComentario = {agregarComentario}
              />

              <div className={Styles['parques__detalle-contendor-comentarios']}>
                {comentarios.length === 0 ? (
                  <h1 className="text-[30px] text-center">No hay comentarios</h1>
                ): (
                  comentarios.map((comentario,index) => (
                    <Comentario
                      key={index}
                      comentarioId = {comentario.id}
                      usuario= {comentario.usuario}
                      comentario = {comentario.comentario}
                      fechaCreacion = {comentario.fecha_creacion}
                      eliminarComentario = {eliminarComentario}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          
          <DetallePublicidad parques={parques} />
        </div>
      </section>
    </>
  );
}
