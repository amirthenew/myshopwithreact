import React ,{useContext}from 'react';
import { ProductsContext } from './context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div>
           {
products.map((item)=>{
return item
})

        } 
        </div>
    

   
      );
}
 
export default Store;

<div>
<h1>
my shop
</h1>
</div>