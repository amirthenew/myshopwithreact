import React,{useEffect,useState,createContext} from 'react';
import { getApi } from '../services/api';

export const ProductsContext = createContext()

const ProductContextProvider = ({children}) => {
const [products,setProducts] = useState([])



    useEffect(()=>{
const fetchAPI = async()=>{
    setProducts(await getApi())
    
    }
    fetchAPI()
},[])


    return (
        <ProductsContext.Provider value={products}>
        {children}
        </ProductsContext.Provider>
      );
}
 
export default ProductContextProvider;