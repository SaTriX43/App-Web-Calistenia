import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Styles from '../carousel.module.css';

export function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={Styles.customNextArrow} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

export function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={Styles.customPrevArrow} onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}
