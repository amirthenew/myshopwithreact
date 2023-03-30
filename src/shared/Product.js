
import React,{useContext} from 'react';
import './Product.css'
//function
import {shorter,isInCart,quantityCount} from '../helper/functions'
import {Link } from 'react-router-dom';

//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'




//context
import { CartContext } from '../context/CartContextProvider';

const Product = ({productData}) => {
    const faTrashs = <FontAwesomeIcon icon={faTrash}/>
    const PlusIcon = <FontAwesomeIcon icon={faPlus}/>
    const minusIcon = <FontAwesomeIcon icon={faMinus}/>
    const cartPlus = <FontAwesomeIcon icon={faCartPlus}/> 
    const{state,dispatch} = useContext(CartContext);
    return ( <div className='container'>

    <div className='box'>
    <Link to={`/products/${productData.id}`}><img className='image' src={productData.image} alt="product" style={{width: "200px"}} /></Link>
        <h3>{shorter(productData.title)}</h3>
        <div className='priceandcounter'>
        <span className='price'>{productData.price} $</span>
        <div>

        {quantityCount(state,productData.id) > 1 &&  <button className='icon' onClick={()=>dispatch({type:'DECREASE',payload : productData})}>{minusIcon}</button>}
        {quantityCount(state,productData.id) === 1 && <button className='icon' onClick={()=>dispatch({type:'REMOVE_ITEM' ,payload :productData})}>{faTrashs}</button> }
        {quantityCount(state,productData.id) > 0 && <span className='count'>{quantityCount(state,productData.id)}</span> }
        {
            isInCart(state,productData.id) ?
            <button className='icon' onClick={()=>dispatch({type:'INCREASE',payload: productData})}>{PlusIcon}</button> :
            <button className='icon' onClick={()=>dispatch({type:'ADD_ITEM',payload: productData})}>{cartPlus}</button>
        }

        
    
        </div>
        </div>
        
        <div className='details'>

        
        </div>
        
    </div>
 
        </div> );
}
 
export default Product;