
import React,{useReducer} from 'react';

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    checkout : false
}

const cartReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item=>item.id === action.payload.id)) {
                state.selectedItems.push(
                    {
                        ...action.payload,
                        quantity : 1
                    })
            }
            return{
                ...state,
                selectedItems:[...state.selectedItems]
            }
            case 'REMOVE_ITEM':
                const newSelectedItems = state.selectedItems.filter(item=> item.id !== action.payload.id)
                return {
                    ...state,selectedItems :[...newSelectedItems]
                }
            case 'INCREASE' :

                const indexI = state.selectedItems.findIndex(item=>item.id=== action.payload.id)
                state.selectedItems[indexI].quantity ++;
                return {
                 
                    ...state,
                }
            case 'DECREASE' :
                const indexD = state.selectedItems.findIndex(item=>item.id = item.payload.id)
                state.selectedItems[indexD].quantity --;
                return {
                    ...state,
                }
            case 'CHECKOUT' :
                return{
                    selectedItems : [],
                    itemsCounter : 0,
                    checkout : true
                }
            case 'CLEAR':
                return{
                    selectedItems : [],
                    itemsCounter : 0,
                    checkout : false
                }

    }
}

const CartContextProvider = () => {

const [state,dispatch] = useReducer(cartReducer,initialState)

    return (<div>
        <h1>cart</h1>
        </div>  );
}
 
export default CartContextProvider;
