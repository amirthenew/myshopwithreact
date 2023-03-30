import React, { useContext } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { ProductsContext } from '../context/ProductContextProvider';
import styles from './ProductDetails.module.css'
import { CartContext } from '../context/CartContextProvider';
import {shorter,isInCart,quantityCount} from '../helper/functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'


const ProductDetails = (productData) => {
    const{state,dispatch} = useContext(CartContext);

    const params = useParams()
    const id = params.id
    const data = useContext(ProductsContext)
    const product = data[id-1]
    const {image,title, description, price, category} = product;
    const faTrashs = <FontAwesomeIcon icon={faTrash}/>
    const PlusIcon = <FontAwesomeIcon icon={faPlus}/>
    const minusIcon = <FontAwesomeIcon icon={faMinus}/>
    const cartPlus = <FontAwesomeIcon icon={faCartPlus}/> 
    return ( 


<div className={styles.container}>
<div className={styles.imgbox}>
<img alt='image' src={image}/>
</div>
<div className={styles.cartdetais}>
<h2>{title}</h2>
<p>{description}</p>
<p><span>catgory : </span>{category}</p>
<div>
<span>{price}$</span>
<Link to='/products'>back</Link>
<div className={styles.box}>

{quantityCount(state,productData.id) > 1 &&  <button className={styles.icon} onClick={()=>dispatch({type:'DECREASE',payload : productData})}>{minusIcon}</button>}
{quantityCount(state,productData.id) === 1 && <button className={styles.icon} onClick={()=>dispatch({type:'REMOVE_ITEM' ,payload :productData})}>{faTrashs}</button> }
{quantityCount(state,productData.id) > 0 && <span className={styles.count}>{quantityCount(state,productData.id)}</span> }
{
    isInCart(state,productData.id) ?
    <button className={styles.icon} onClick={()=>dispatch({type:'INCREASE',payload: productData})}>{PlusIcon}</button> :
    <button className={styles.icon} onClick={()=>dispatch({type:'ADD_ITEM',payload: productData})}>{cartPlus}</button>
}



</div>
</div>
</div>



        </div>
     )}
export default ProductDetails;
