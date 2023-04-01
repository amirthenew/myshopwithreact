import React,{useContext} from 'react';
import styles from './Header.module.css'
import { CartContext } from './context/CartContextProvider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
const Header = () => {

  const cartPlus = <FontAwesomeIcon icon={faCartPlus}/> 
  const {state} = useContext(CartContext)

    return (
        <div className={styles.header}>

        <Link style={{color:'#fff',textDecoration:'none'}} to='/products'><h3 style={{lineHeight:'45px'}}>bcak to shop</h3></Link>
        <div className={styles.cart}>
          <Link to='/cart'>
          <span className={styles.counter}>{state.itemsCounter}</span>
          <i>{cartPlus}</i>
          </Link>
          
        </div>

        </div>
    )
        
}
 
export default Header;