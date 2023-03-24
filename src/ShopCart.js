import React,{useContext} from 'react';
import styles from './Cart.module.css'
import Cart from './shared/Cart';
//context
import { CartContext } from './context/CartContextProvider';


const ShopCart = () => {
  
const {state,dispatch} = useContext(CartContext)
    return (

        <div className={styles.container}>
        <div>
        {state.selectedItems.map(item=> <Cart key={item.id} data={item}/>)}
        </div>

        {
          state.itemsCounter > 0 && <div>
          <p><span>total items</span> {state.itemsCounter}</p>
          <p><span>total payment</span> {state.total}</p>
          <div>
          
          <button onClick={()=> dispatch({type : 'CHECKOUT'})}>check out</button>
          <button onClick={()=> dispatch({type : 'CLEAR'})}>Clear</button>
          
          </div>
          </div>
        }
  
        </div>
      );
}
 
export default ShopCart;