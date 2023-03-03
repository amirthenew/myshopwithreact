import React ,{useContext}from 'react';
import { ProductsContext } from './context/ProductContextProvider';
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div>
           {
products.map((product)=>{ 
    <Product 
    key={product.id} 
productData={products}/>})

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