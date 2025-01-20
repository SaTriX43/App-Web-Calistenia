import React from 'react';
import Styles from './sobre-nosotros.module.css';
import { Boton } from '@/components/comunes/Boton/Boton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import InformacionLinks from '@/components/comunes/InformacionLinks/InformacionLinks';
import Link from 'next/link';

export default function SobreNosotros() {
  return (
    <section className={Styles['informacion__sobre-nosotros']}>
      <div className={Styles['informacion__sobre-nosotros-contenedor']}>

        {/* Título principal */}
        <h1 className="text-[30px] font-[600]">Sobre Nosotros</h1>
        <hr className="w-full" />

        {/* Introducción */}
        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h2 className="text-[25px]">Nuestra Historia</h2>
          <p>
            HubThenics nació con el propósito de conectar a los apasionados de la calistenia en un solo lugar. 
            Desde sus inicios, nuestro objetivo ha sido ofrecer herramientas para mejorar el entrenamiento, descubrir parques 
            increíbles, y crear una comunidad unida por el amor al movimiento.
          </p>
        </div>

        {/* Misión */}
        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h3 className='text-[25px] font-[600]'>Misión</h3>
          <p>
            Promover un estilo de vida activo y saludable al alcance de todos, creando un espacio donde las personas puedan 
            descubrir lugares para entrenar, compartir experiencias y superarse cada día.
          </p>
        </div>

        {/* Visión */}
        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h3 className='text-[25px] font-[600]'>Visión</h3>
          <p>
            Ser el punto de referencia mundial para la comunidad de calistenia, brindando acceso a información útil y 
            fomentando una red global de apoyo entre atletas.
          </p>
        </div>

        {/* Valores */}
        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h3 className='text-[25px] font-[600]'>Valores</h3>
          <ul className='text-[18px]'>
            <li>💪 Superación personal.</li>
            <li>🌎 Comunidad e inclusión.</li>
            <li>🛠 Innovación constante.</li>
            <li>♻️ Sostenibilidad y cuidado del medio ambiente.</li>
          </ul>
        </div>

        {/* Equipo */}
        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h3 className='text-[25px] font-[600]'>Conoce a nuestro equipo</h3>
          <p>
            Detrás de HubThenics hay un equipo apasionado por la calistenia y la tecnología. Cada uno de nosotros 
            aporta su experiencia para ofrecerte la mejor plataforma posible.
          </p>
        </div>

        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h3 className='text-[25px]'>No tienes una cuenta gratuita todavia?</h3>
          <Link href='/autenticacion/register'>
            <Boton
              texto='Crear Cuenta'
              clases='max-w-[200px]'
              tipoBoton='primario'
            />
          </Link>
        </div>

        <div className={Styles['informacion__sobre-nosotros-seccion']}>
          <h3 className='text-[25px]'>Conectate con nosotros</h3>
          <div className={Styles['informacion__sobre-nosotros-seccion-contenedor-botones']}>
            <a className='' href="https://www.facebook.com/profile.php?id=61571200568609" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                className={`${Styles['informacion__sobre-nosotros-seccion-botones']} text-blue-600 hover:text-blue-800`}
              />
            </a>


            <a href="https://www.instagram.com/hubthenics/" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className={`${Styles['informacion__sobre-nosotros-seccion-botones']} text-purple-400 hover:text-purple-600`}
              />
            </a>
            
            
            <a href="https://x.com/HubThenics" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className={`${Styles['informacion__sobre-nosotros-seccion-botones']} text-blue-400 hover:text-blue-600`}
              />
            </a>
            

            <a href="https://www.tiktok.com/@hubthenics?is_from_webapp=1&sender_device=pc" target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTiktok}
                className={`${Styles['informacion__sobre-nosotros-seccion-botones']} hover:text-gray-300`}
              />
            </a>
          </div>
          
          <div className={Styles['informacion__sobre-nosotros-seccion']}>
            <h3 className='text-[25px]'>Contacto</h3>
            <Link href='/informacion/contacto'>
              <Boton
                texto='Enviar email'
                clases='max-w-[150px]'
              />
            </Link>
          </div>
        </div>

      </div>
      <InformacionLinks/>
    </section>
  );
}
