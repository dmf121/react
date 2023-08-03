import React from 'react';
import styles from './CareerButton.module.css'

import OrangeButton from '../OrangeButton/orangeButton';

const CareerButton = ({onClick}) => {
  

  return (
    <OrangeButton 
        className={styles.myBtnApply}
        btnText='Apply Now'
        onClick={onClick}
    />
  )
}

export default CareerButton