import React,{useEffect} from 'react';
import { getApi } from './services/api';
import './App.css';
import Store from './Store';
//context
import ProductContextProvider from './context/ProductContextProvider';


function App() {


  return (
   <ProductContextProvider>
   <Store/>
   
   </ProductContextProvider>
  );
}

export default App;
