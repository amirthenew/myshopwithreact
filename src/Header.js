import React,{useContext} from 'react';
import styles from './Header.module.css'
import cart from '../src/img/cart.png'
import { CartContext } from './context/CartContextProvider';
import { Link } from 'react-router-dom';

const Header = () => {

  const {state} = useContext(CartContext)

    return (
        <div className={styles.header}>
        <h1>header</h1>
        <div className={styles.cart}>
        <Link to='/cart'>
        <img className={styles.cart} src={cart}/>
        </Link>
        <span>{state.itemsCounter}</span>
        </div>

        </div>
      );
        
}
 
export default Header;