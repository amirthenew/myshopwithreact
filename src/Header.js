import React from 'react';
import styles from './Header.module.css'
import cart from '../src/img/cart.png'

const Header = () => {
    return (
        <div className={styles.header}>
        <h1>header</h1>
        <div className={styles.cart}>
        <img className={styles.cart} src={cart}/>
        <span>1</span>
        </div>

        </div>
      );
        
}
 
export default Header;