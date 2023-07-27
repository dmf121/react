import React, { useState, useEffect } from 'react'
import { Link, useNavigate  } from 'react-router-dom';


import styles from './Cart.module.scss'

const Cart = ({ cartItems, onRemoveFromCart, onQuantityChange }) => {
    


    const prices = [];

    const [userCart, setUserCart] = useState([]);


    const plus = (article) => {
        setUserCart(userCart.map((item) => {
            if (item.article === article) {
                item.count++
            }
                return item
            }))
    }

    const minus = (article) => {
        setUserCart(userCart.map((item) => {
            if (item.article === article) {
                item.count--
            } 
                return item
            }))
    }

    useEffect(() => {
        setUserCart(cartItems);
      }, [cartItems]);
    
    
    
      const navigate  = useNavigate ();


      const handleClearCart = () => {
        localStorage.clear();
        window.location.reload();
      };

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(userCart));
      }, [userCart]);

      const handleRemoveItem = (item) => {
        const product = item;
        onRemoveFromCart(product); 
      };


      useEffect(() => {
        onQuantityChange(userCart.reduce((sum, obj) => sum + obj.count, 0))
      }, [onQuantityChange, userCart]);

  return (
    
    <div className="container">
         
        <div className={styles.cart}>
            <Link onClick={() => navigate(-1)} className='link'>
                <button className='back-btn'>
                    <img src="../../img/back-btn.png" alt="" />
                    Back
                </button>
            </Link>
            <div className={styles.cartInner}>
                {userCart.length === 0 ? (
                    <h4 className='text-center'>Cart is empty</h4>
                ) : (
                        <>
                            {userCart.map((item, index) => (
                                <div className={`row ${styles.cartItem}`} key={index}>
                                    <div className={`col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 m-0 ${styles.number}`}>
                                        {prices.push(item.sale? item.newPrice*item.count : item.price*item.count)}
                                    </div>
                                    <div className={`col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 ${styles.img}`}><img src={`../.${item.photos[0]}`} alt="" /></div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-3 col-5'>
                                        <h5 className={styles.cartItemName}>
                                            <Link to={`/product/${item.category}/${item.id}`}>{item.name}</Link>
                                            </h5>
                                        <p>
                                            {item.category !== 'accessories' ? 'Size: ' : 'Color: '}
                                            {item.options}
                                        </p>
                                        
                                    </div>
                                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-3 col-12 d-flex justify-content-center py-4'>
                                                <button className={styles.cartItemQuantity} type='button' onClick={() => minus(item.article)} disabled={item.count === 1} > <img src="../../img/cart-minus.png" alt="" /> </button>
                                                <h5 className='my-auto mx-2'>{item.count}</h5>
                                                <button className={styles.cartItemQuantity} type='button' onClick={() => plus(item.article)}><img src="../../img/cart-plus.png" alt="" /></button>
                                               
                                                
                                            </div>
                                      
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 d-flex ">
                                    <h5 className=' px-1 mx-auto my-auto'>{`$${
                                            prices[index].toFixed(2)
                                            }`}
                                    </h5>
                                    <button className={`col-1 ${styles.cartItemRemove} mx-auto my-auto`} onClick={() => handleRemoveItem(item)}> <img src="../../img/cart-remove.png" alt="" /> </button>
                                    </div>
                                </div>
                                
                            ))}
                            <div className={styles.cartBottom}>
                                <h3 className='px-3'>Total price: ${prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2)}</h3>
                                <div className={styles.cartBottomButtons}>
                                    <button className={styles.clearBtn} onClick={handleClearCart}>Clear Cart</button>
                                    <Link to='/order'><button className={styles.placeBtn}>Place Order</button></Link>
                                </div>
                            </div>
                            
                        </>
                    )}
            
                    
                    
                    
            </div>
        </div>
    </div>
  )
}

export default Cart