
import React,{useContext} from 'react';
import './Product.css'
//function
import {shorter,isInCart,quantityCount} from '../helper/functions'
import {Link } from 'react-router-dom';

import trashSvg from '../img/trash.svg'


//context
import { CartContext } from '../context/CartContextProvider';

const Product = ({productData}) => {

    const{state,dispatch} = useContext(CartContext);
    return ( <div className='container'>

    <div className='box'>
           <img className='image' src={productData.image} alt="product" style={{width: "200px"}} />
        <h3>{shorter(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div>

        {quantityCount(state,productData.id) > 1 &&  <button onClick={()=>dispatch({type:'DECREASE',payload : productData})}>-</button>}
        {quantityCount(state,productData.id) === 1 && <button onClick={()=>dispatch({type:'REMOVE_ITEM' ,payload :productData})}><img alt='remove' style={{width:'15px'}} src={trashSvg}/></button> }
        {
            isInCart(state,productData.id) ?
            <button onClick={()=>dispatch({type:'INCREASE',payload: productData})}>+</button> :
            <button onClick={()=>dispatch({type:'ADD_ITEM',payload: productData})}>Add to cart</button>
        }

        
        
        </div>
        </div>
    </div>
 
        </div> );
}
 
export default Product;