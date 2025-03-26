import React from 'react';
import Styles from './condiciones.module.css';
import InformacionLinks from '@/components/comunes/InformacionLinks/InformacionLinks.jsx';

export const metadata = {
  title: "Condiciones de Uso - Calistenia Ecuador",
  description: "Lee las condiciones de uso de Calistenia Ecuador para usar nuestra plataforma de manera segura y responsable.",
};

export default function Condiciones() {
  return (
    <section className={Styles['informacion__condiciones']}>
      <div className={Styles['informacion__condiciones-contenedor']}>
        <h1 className="text-[30px] font-[600]">Condiciones de Uso</h1>
        <hr className="w-full" />
        
        <h2 className="text-[25px] my-[20px]">Bienvenidos a HubThenics</h2>
        <p>
          Gracias por unirte a nuestra comunidad de calistenia. Esta plataforma está diseñada para ayudarte a mejorar
          tu rendimiento físico, descubrir parques para entrenar y conectarte con otros entusiastas de la calistenia.
          Por favor, lee las siguientes condiciones de uso antes de continuar.
        </p>

        <div className={Styles['informacion__condiciones-secciones']}>

          <div>
            <h3 className='text-[25px] font-[600]'>1. Uso del Sitio</h3>
            <p>
              El sitio y la aplicación están destinados exclusivamente para promover la práctica de la calistenia y el 
              estilo de vida saludable. Cualquier uso indebido, como compartir contenido ofensivo, inadecuado, o violar 
              las reglas de las comunidades listadas en nuestra plataforma, será motivo de suspensión inmediata.
            </p>
          </div>

          <div>
            <h3 className='text-[25px] font-[600]'>2. Responsabilidad del Usuario</h3>
            <p>
              Los usuarios son responsables de garantizar que cualquier ejercicio o rutina realizada sea segura 
              para su condición física. Recomendamos consultar a un profesional médico antes de comenzar nuevas 
              actividades físicas intensas.
            </p>
          </div>

          <div>
            <h3 className='text-[25px] font-[600]'>3. Contenido Generado por el Usuario</h3>
            <p>
              Si subes información, fotos, o reseñas de parques, asegúrate de que sean verídicas y respeten los derechos 
              de terceros. Nos reservamos el derecho de eliminar contenido que incumpla estas reglas.
            </p>
          </div>

          <div>
            <h3 className='text-[25px] font-[600]'>4. Propiedad Intelectual</h3>
            <p>
              Todos los textos, imágenes, y funcionalidades del sitio son propiedad de HubThenics o sus licenciantes. 
              Queda prohibido copiarlos, distribuirlos o utilizarlos sin autorización.
            </p>
          </div>

          <div>
            <h3 className='text-[25px] font-[600]'>5. Modificaciones en las Condiciones</h3>
            <p>
              Nos reservamos el derecho de actualizar estas condiciones en cualquier momento. Cualquier cambio será 
              notificado oportunamente en la plataforma.
            </p>
          </div>

          <div>
            <h3 className='text-[25px] font-[600]'>6. Jurisdicción</h3>
            <p>
              Cualquier disputa relacionada con el uso de nuestra plataforma será resuelta bajo las leyes aplicables 
              en Ecuador.
            </p>
          </div>

        </div>
      </div>
      <InformacionLinks />
    </section>
  );
}
