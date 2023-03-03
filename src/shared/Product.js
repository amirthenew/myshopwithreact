
import React from 'react';


const Product = ({productData}) => {
    return ( <div>

        <img src=''/>
        <h3>{productData.title}</h3>
        <p>price</p>
        <div>
        <a>details</a>
        <div>
        <button> Add to Cart
        </button>
        </div>
        </div>
        </div> );
}
 
export default Product;