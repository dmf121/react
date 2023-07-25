import React from 'react'

import styles from './ProductCard.module.scss'

const ProductCard = ({ product }) => {
    
  return (
    <div>
        <div  className={`${styles.card} my-4`} >
            <div className={styles.image}>
              {product.sale ? (
                <div>
                  <h5>Sale</h5>
                  <img src={product.photos[0]} alt={product.name} />
                </div>
                ) : (<img src={product.photos[0]} alt={product.name} /> )
              }
            </div>

            <div className={styles.info}>
                <h5>{product.name}</h5>
                {product.sale ? ( 
                        <div className='d-flex'>
                            <p style={{ textDecoration: 'line-through' }}>{`$${product.price}`}</p>
                            <h5 className='px-3'>{`$${product.newPrice}`}</h5>
                        </div>
                    ) : (
                        <h5>{`$${product.price}`}</h5>
                    )}
            </div>
            <div className={styles.viewDetails}>
                <h5>View Details</h5>
            </div>
        </div>
    </div>
    
  )
}


export default ProductCard