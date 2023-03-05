
import React from 'react';
import './Product.css'
//function
import {shorter} from '../helper/functions'
import { Route,Routes,Link } from 'react-router-dom';


const Product = ({productData}) => {
    return ( <div className='container'>

        <img src={productData.image} alt="product" style={{width: "200px"}} />
        <h3>{shorter(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
        <a href='#'>details</a>
        <div>
        <button> Add to Cart
        </button>
        </div>
        </div>
        </div> );
}
 
export default Product;