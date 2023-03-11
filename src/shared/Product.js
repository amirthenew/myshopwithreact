
import React,{useContext,useState} from 'react';
import './Product.css'
//function
import {shorter,isInCart} from '../helper/functions'
import {Link } from 'react-router-dom';


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