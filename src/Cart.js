import React from 'react';
import styles from './Cart.module.css'



const Cart = () => {
    return (

        <div className={styles.container}>
        <span>my Cart</span>
        <span>price</span>
        <button>Add to cart</button>
        </div>
      );
}
 
export default Cart;