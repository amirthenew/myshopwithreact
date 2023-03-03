
import React from 'react';
import './Product.css'


const Product = ({productData}) => {
    return ( <div className='container'>

        <img src={productData.image} alt="product" style={{width: "200px"}} />
        <h3>{productData.title}</h3>
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