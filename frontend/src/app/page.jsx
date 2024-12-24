'use client'
import { Boton } from '@/components/comunes/Boton';
import Styles from '../estilos/Inicio.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons';
import { PiePagina } from '@/components/estructura/PiePagina/PiePagina';
import Link from 'next/link';


export default function Inicio() {
  return (
    <div className={Styles['inicio__pagina']}>
      {/* seccion de encabezado*/}
      <section className={Styles['inicio__sc-encabezado']}>
        <div className={Styles['inicio__encabezado-contenedor-info']}>
          <h1 className='text-[25px] text-yellow-300'>Encuentra los Mejores Parques de Calistenia en Ecuador</h1>
          <h3 className='text-[20px]'>Descubre lugares ideales para entrenar, mejora tu técnica y conecta con la comunidad calisténica en tu ciudad</h3>
          <Link href='/parques'>
            <Boton
              texto='Explorar Parques Ahora'
              tipoBoton='primario'
            />
          </Link>
        </div>
      </section>

      {/* seccion de beneficio */}
      <section className={Styles['inicio__sc-beneficio']}>
        <h1 className='text-[30px] text-yellow-400 font-[600]'>¿Por qué explorar parques con nosotros?</h1>
        <ul className={Styles['inicio__sc-beneficio-contenedor-razones']}>
          <li className={Styles['inicio__sc-beneficio-contenedor-razones-elementos']}>
            <h3 className='text-[23px] text-yellow-200'>
              Encuentra tu parque ideal
              <FontAwesomeIcon className='ml-[10px]' icon={faMagnifyingGlass}/>
            </h3>
            <p className='text-[18px]'>Accede a un mapa interactivo con los mejores parques de calistenia en Ecuador, desde espacios para principiantes hasta lugares avanzados.</p>
          </li>
          <li className={Styles['inicio__sc-beneficio-contenedor-razones-elementos']}>
            <h3 className='text-[23px] text-yellow-200'>
              Aprende más sobre cada lugar
              <FontAwesomeIcon className='ml-[10px]' icon={faBook}/>  
            </h3>
            <p className='text-[18px]'>Lee reseñas, conoce qué instalaciones ofrecen y elige el parque que se ajuste a tu rutina</p>
          </li>
          <li className={Styles['inicio__sc-beneficio-contenedor-razones-elementos']}>
            <h3 className='text-[23px] text-yellow-200'>
              Descubre la comunidad
              <FontAwesomeIcon className='ml-[10px]' icon={faPerson}/>
            </h3>
            <p className='text-[18px]'>Conecta con otros entusiastas de la calistenia y únete a eventos locales.</p>
          </li>
          <li className={Styles['inicio__sc-beneficio-contenedor-razones-elementos']}>
            <h3 className='text-[23px] text-yellow-200'>Comienza tu exploración hoy. ¡Encuentra tu parque más cercano ahora!</h3>
          </li>
        </ul>
      </section>


      {/* seccion de llamada a la accion  */}
      <section className='flex flex-col mt-[40px] items-center gap-[20px] pb-[70px]'>
        <h1 className='text-[30px] text-yellow-400 text-center'>¿Listo para llevar tu entrenamiento al aire libre? Explora los mejores parques y encuentra el lugar perfecto para tus rutinas.</h1>
        <Link href='/parques'>
          <Boton
            tipoBoton='primario'
            texto='Ver parques'
            clases='px-2'
          />
        </Link>
        
      </section>

      <PiePagina/>
    </div>
  );
}
