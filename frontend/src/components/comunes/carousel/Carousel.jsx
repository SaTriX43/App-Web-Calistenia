import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from './carousel.module.css';
import { CustomNextArrow, CustomPrevArrow } from './customArrows/CustomArrows.jsx'; // Asegúrate de que la ruta sea correcta

export default function Carousel({ images, onClose }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const imagenes = images && images.length > 0 ?
    images : ['/imagen-parque-no-disponible.png']

  return (
    <div className={Styles.modalOverlay} onClick={onClose}>
      <div className={Styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={Styles.modalClose} onClick={onClose}>X</button>
        <Slider {...settings}>
          {imagenes.map((img, index) => (
            <div key={index} className={Styles.slide}>
              <img src={img} alt={`Imagen ${index + 1}`} className={Styles.image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
