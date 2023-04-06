import React,{useReducer,createContext,useEffect} from 'react';




const initialState = {
    selectedItems : [],
    itemsCounter :0,
    total:0,
    checkout : false
}



const totalProduct = (items)=>{
    const itemsCounter = items.reduce((total,product)=>total+product.quantity,0)
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter,total}
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
                    localStorage.setItem('productlist',JSON.stringify(state.selectedItems))
            }
            return{
                ...state,
                selectedItems:[...state.selectedItems],
                ...totalProduct(state.selectedItems),
                checkout:false
            }
            case 'REMOVE_ITEM':
                const newSelectedItems = state.selectedItems.filter(item=> item.id !== action.payload.id)
                localStorage.setItem('productlist',JSON.stringify(newSelectedItems))
                return {
                    ...state,
                    selectedItems :[...newSelectedItems],
                    ...totalProduct(newSelectedItems)
                }
            case 'INCREASE' :

                const indexI = state.selectedItems.findIndex(item=>item.id=== action.payload.id)
                state.selectedItems[indexI].quantity ++;
                const listInLocal = JSON.parse(localStorage.getItem('productlist'))
                console.log(listInLocal);
                console.log(state.selectedItems);
                localStorage.setItem('productlist',JSON.stringify(state.selectedItems))


                
                return {
                 
                    ...state,
                    ...totalProduct(state.selectedItems)
                }
            case 'DECREASE' :
                const indexD = state.selectedItems.findIndex(item=>item.id === action.payload.id)
                state.selectedItems[indexD].quantity --;
                localStorage.setItem('productlist',JSON.stringify(state.selectedItems))
                return {
                    ...state,
                    ...totalProduct(state.selectedItems)
                }
            case 'CHECKOUT':
                localStorage.removeItem('productlist')
                return{
                    selectedItems : [],
                    itemsCounter : 0,
                    total:0,
                    checkout : true
                }
            case 'CLEAR':
                localStorage.removeItem('productlist')
                return{
                    selectedItems : [],
                    itemsCounter : 0,
                    total:0,
                    checkout : false
                }

                default:
                    return state;
    }
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    

const [state,dispatch] = useReducer(cartReducer,initialState)

useEffect(()=>{

    const productList =  JSON.parse(localStorage.getItem('productlist'))
    initialState.selectedItems = productList
    const count = [];
    productList.map((item)=>{
    count.push(item.quantity)
    })

    const itemsCounter = count.reduce(
    (accumulator, currentValue) => accumulator + currentValue,initialState.itemsCounter)
    initialState.itemsCounter = itemsCounter

;

     },[])

    return (
<CartContext.Provider value={{state,dispatch}}>
{children}
</CartContext.Provider>  
        
        );
};
 
export default CartContextProvider;
