import React, { useContext } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';
import styles from './ProductDetails.module.css'
import Cart from '../Cart';
const ProductDetails = () => {
const params = useParams()
    const id = params.id
    const data = useContext(ProductsContext)
    const product = data[id-1]
    const {image,title, description, price, category} = product;
    console.log(product);

    return ( 


        <div className={styles.container}>
<div className={styles.imgbox}>
<img src={image}/>
</div>
<div className={styles.cartdetais}>
<h2>{title}</h2>
<p>{description}</p>
<p><span>catgory : </span>{category}</p>
<div>
<span>{price}$</span>
<Link to='/products'>back</Link>
</div>
</div>

<Cart/>


 
        </div>
     )}
export default ProductDetails;
