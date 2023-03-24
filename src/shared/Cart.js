import React, { useContext } from 'react';

// Context
import { CartContext } from '../context/CartContextProvider';

// Functions
import {shorter} from '../helper/functions'
//styles
import styles from './Cart.module.css'


const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container}>
            <img src={image} alt="product" />
            <div>
                <h3>{shorter(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>remove</button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;