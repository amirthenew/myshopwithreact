import React,{useEffect,useState,createContext} from 'react';
import { getApi } from '../services/api';

export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {
const [products,setProducts] = useState([])



    useEffect(()=>{
const fetchAPI = async()=>{
    setProducts(await getApi())
    
    }
    fetchAPI()
},[])


    return (
        <ProductContext.Provider value={products}>
        {children}
        </ProductContext.Provider>
      );
}
 
export default ProductContextProvider;