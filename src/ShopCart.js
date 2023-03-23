import React,{useContext} from 'react';
import styles from './Cart.module.css'
import Cart from './shared/Cart';
//context
import { CartContext } from './context/CartContextProvider';


const ShopCart = () => {
  
const {state,dispatch} = useContext(CartContext)
    return (

        <div className={styles.container}>
        <span>my Cart</span>
        <span>price</span>
        <button>Add to cart</button>

        </div>
      );
}
 
export default ShopCart;