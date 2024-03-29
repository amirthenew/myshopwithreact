import React, { useContext } from 'react';

// Context
import { CartContext } from '../context/CartContextProvider';

// Functions
import {shorter} from '../helper/functions'
//styles
import styles from './Cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;
    const faTrashs = <FontAwesomeIcon icon={faTrash}/>
    const PlusIcon = <FontAwesomeIcon icon={faPlus}/>
    const minusIcon = <FontAwesomeIcon icon={faMinus}/>
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
                    <button  className={`${styles.icon} ${styles.minus}`} onClick={() => dispatch({type: "DECREASE", payload: props.data})}>{minusIcon}</button> :
                    <button className={`${styles.icon} ${styles.trash}`} onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>{faTrashs}</button>
                }
                <button className={`${styles.icon} ${styles.plus}`}  onClick={() => dispatch({type: "INCREASE", payload: props.data})}>{PlusIcon}</button>
            </div>
        </div>
    );
};

export default Cart;