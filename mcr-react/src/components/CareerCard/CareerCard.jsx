import React from 'react';
import styles from './CareerCard.module.css'

import CareerButton from '../UI/CareerButton/CareerButton';

const CareerCard = ({title, description, onClick}) => {

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
        <div className={`col-xl-9 py-5 px-3 ${styles.item}`}>
            <h4>{title}</h4>
            <p className="my-4">{description}</p>
            <CareerButton onClick={onClick}/>
        </div>
    </div>
  )
}

export default CareerCard