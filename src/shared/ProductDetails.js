import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';
import Product from './Product';


const ProductDetails = (props) => {

    

    console.log(data);
    const id = props.match.params.id
    const data = useContext(ProductsContext)
    const product = data[id-1]
    const {image,title,description,price,category} = product


    return ( 
        <div>
        <h1>details</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <p><span>catgory : </span>{category}</p>
        <div>
        <span>{price}$</span>
        <Link to='/products'>back to shop</Link>
        </div>
        
        </div>
     );
}
 
export default ProductDetails;