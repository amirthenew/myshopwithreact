
import React from 'react';
import './Product.css'
//function
import {shorter} from '../helper/functions'
import {Link } from 'react-router-dom';


const Product = ({productData}) => {
    return ( <div className='container'>

    <div className='box'>
           <img src={productData.image} alt="product" style={{width: "200px"}} />
        <h3>{shorter(productData.title)}</h3>
        <p>{productData.price}</p>
        <div>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div>
        <button> Add to Cart
        </button>
        </div>
        </div>
    </div>
 
        </div> );
}
 
export default Product;