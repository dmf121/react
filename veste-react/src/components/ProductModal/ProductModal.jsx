import React from 'react'
import styles from './ProductModal.module.scss'
import { useLocation } from 'react-router-dom';


const ProductModal = ({ product, onClose, isOpen }) => {
    if (!isOpen) {
        return null;
      }
    
      const handleClose = () => {
        onClose(); 
      };


  return (
    <div className={styles.bg}>
        <div className={styles.modal}>
            <div className="container">
            <div className={styles.image}>
                <img src={product.photos[0]} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>{`$${product.price}`}</p>
            <p>{product.description}</p>
            <button onClick={handleClose} className={styles.closeBtn}>Закрити</button>
            </div>
        </div>
    </div>
  )
}

export default ProductModal