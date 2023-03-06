import React, { useContext } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';

const ProductDetails = (props) => {
console.log(props);
    // const id = props.match.params.id;
    const data = useContext(ProductsContext)
    const product = data[1]
    const {image, title, description, price, category} = product;
    console.log(title);

    return ( 


        <div>
        <h1>details</h1>
        <img src={image}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <p><span>catgory : </span>{category}</p>
        <div>
        <span>{price}$</span>
        <Link to='/products'>back</Link>
        </div> 
        </div>
     )}
export default ProductDetails;
