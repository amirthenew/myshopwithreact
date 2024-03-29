import React,{useContext} from 'react';
import styles from './ShopCart.module.css'
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
//context
import { CartContext } from './context/CartContextProvider';


const ShopCart = () => {
  
const {state,dispatch} = useContext(CartContext)
    return (

        <div className={styles.container}>
        <div className={styles.cart}>
        {state.selectedItems.map(item=> <Cart key={item.id} data={item}/>)}
        </div>

        {
          state.itemsCounter > 0 && 
          


<div className={styles.total}>
<span> total payment : {state.total} $</span> 
<div className={styles.buttonbox}>
<button className={styles.btn}  onClick={()=> dispatch({type : 'CHECKOUT'})}>check out</button>
<button className={styles.btn} onClick={()=> dispatch({type : 'CLEAR'})}>Clear</button>
</div>

</div>


        }
        {
          state.checkout && <div>
              <h3>Checked Out Successfully</h3>
              <Link to="/products">Buy More</Link>
          </div>
      }

      {
          !state.checkout && state.itemsCounter === 0 && <div>
              <h3>Want to Buy?</h3>
              <Link to="/products">Go to Shop</Link>
          </div>
      }
        </div>
      );
}
 
export default ShopCart;