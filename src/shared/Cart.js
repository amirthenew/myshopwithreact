import React, { useContext } from 'react';

// Context
import { CartContext } from '../context/CartContextProvider';

// Functions
import {shorter} from '../helper/functions'
//styles
import styles from './Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;
    const faTrashs = <FontAwesomeIcon icon={faTrash}/>
    return (

        <div className={styles.container}>
            <img src={image} alt="product" />
            <div>
                <h3>{shorter(title)}</h3>
                <p>{price} $</p>
                <span>quantity : {quantity}</span>
                
            </div>
            <div>
               
            </div>
            <div className={styles.buttons}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                    <button className={styles.trash} onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>{faTrashs}</button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;