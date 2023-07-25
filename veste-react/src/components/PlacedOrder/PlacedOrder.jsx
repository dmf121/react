import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom';

import styles from './PlacedOrder.module.scss'

const PlacedOrder = () => {
    useEffect(() => {
        const isReloaded = localStorage.getItem('isReloaded');
    
        if (!isReloaded) {
          // Викликаємо перезавантаження
          window.location.reload();
          // Зберігаємо інформацію про перезавантаження у сховищі
          localStorage.setItem('isReloaded', true);

        }
      }, []);
  return (
    <div className={`${styles.done} container text-center`}>
        <h3>Thank you! Your order placed</h3>
        <Link to='/'>To the home page</Link>
    </div>
  )
}

export default PlacedOrder