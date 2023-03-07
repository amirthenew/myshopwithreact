
import React,{useReducer} from 'react';

const initialState ={
    selectedItems : [],
    itemsCounter : 0,
    total : 0,
    checkout : false
}



const CartContextProvider = () => {

const [state,dispatch] = useReducer(cartReducer,initialState)

    return (<div>
        <h1>cart</h1>
        </div>  );
}
 
export default CartContextProvider;
