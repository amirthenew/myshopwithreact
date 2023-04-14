import React ,{useContext}from 'react';
    import{  ProductsContext } from './context/ProductContextProvider';
import Product from './shared/Product';

import styles from './Store.module.css'

const Store = () => {

    const products = useContext(ProductsContext)
    console.log(products);
    products.map((item)=>{
    console.log(item.category);
    
    })

    return (
        <div className={styles.container}>
        
           {
            products.map(product=>
            <Product
            key={product.id}
            productData={product}
            />
    
 ) } 
        </div>
    

   
      );
}
 
export default Store;

