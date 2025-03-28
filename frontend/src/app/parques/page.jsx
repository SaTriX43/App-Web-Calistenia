import ParquesUbicacionParque from '@/components/estructura/paginaParques/ParquesUbicacion/ParquesUbicacionParque'
import Styles from './parques.module.css'
import Descripcion from '@/components/parques/Descripcion/Descripcion'

export const metadata = {
  title: "Parques - Calistenia Ecuador",
  description: "Encuentra los mejores parques de calistenia en Ecuador para entrenar al aire libre.",
};

const Parques = () => {
  return (
    <section className={Styles['parques']}>
      <ParquesUbicacionParque/>
      <Descripcion/>
    </section>
  )
}


export default Parques