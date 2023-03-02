import React,{useEffect,useState,createContext} from 'react';
import { getApi } from '../services/api';

const ProductContext = createContext()

const ProductContextProvider = (props) => {
const [products,setProducts] = useState([])



    useEffect(()=>{
const fetchAPI = async()=>{
    setProducts(await getApi())
    
    }
    fetchAPI()
},[])


    return (
        <ProductContext.Provider value={products}>
        {props.children}
        </ProductContext.Provider>
      );
}
 
export default ProductContextProvider;