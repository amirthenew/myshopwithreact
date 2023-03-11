import React,{useContext} from 'react';
import styles from './Header.module.css'
import cart from '../src/img/cart.png'
import { CartContext } from './context/CartContextProvider';

const Header = () => {

  const {state} = useContext(CartContext)
console.log(state);
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