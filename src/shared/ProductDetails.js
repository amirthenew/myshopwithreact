import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';


const ProductDetails = (props) => {

    
const data = useContext(ProductsContext)
    console.log(data);


    return ( 
<h1>details</h1>
     );
}
 
export default ProductDetails;