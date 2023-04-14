import React,{useContext,useEffect} from 'react';
import styles from './Header.module.css'
import { CartContext } from './context/CartContextProvider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import{  ProductsContext } from './context/ProductContextProvider';
const Header = () => {

  const cartPlus = <FontAwesomeIcon icon={faCartPlus}/> 
  const {state} = useContext(CartContext)

  

  localStorage.getItem('productList')
  const productList =  JSON.parse(localStorage.getItem('productlist'))
  if (productList) {
    const count = [];
    productList.map((item)=>{
    count.push(item.quantity)})
    const itemsCounter = count.reduce((a,b)=>a+b,0)
    state.itemsCounter = itemsCounter
  console.log(itemsCounter);   
  }

  
  

  const products = useContext(ProductsContext)
  console.log(products.map((item)=>{
    item.category == "men's clothing" ? console.log(item) : console.log('not');

  }));

  const changeCategory = ()=>{
    console.log('category');
  }


    return (
      <div className={styles.header}>
      <div className={styles.upperdiv}>
      <Link style={{color:'#fff',textDecoration:'none'}} to='/products'><h3 style={{lineHeight:'45px'}}>bcak to shop</h3></Link>
      <div className={styles.cart}>
        <Link className={styles.link} to='/cart'>
        <span className={styles.counter}>
        
        {
          state.itemsCounter
        }
        
        </span>
        <i>{cartPlus}</i>
        </Link>
        
      </div>

      </div>
      <div className={styles.categorybar}>
      <ul>
      
      <li onClick={changeCategory}>mens clothes</li>
      <li>women clothes</li>
      <li>Electronic</li>
      <li>Jwellery</li>
      </ul>
      </div>
      </div>

    )
        
}
 
export default Header;