import React,{useEffect,useState} from 'react';
import { getApi } from '../services/api';

const ProductContextProvider = () => {
const [products,setProducts] = useState([])

    useEffect(()=>{
fetchAPI()

},[])

const fetchAPI = async()=>{
    setProducts(await getApi())
    fetchAPI
    }
    return (<div>
        </div>  );
}
 
export default ProductContextProvider;