import React,{useEffect} from 'react';
import { getApi } from './services/api';
import './App.css';

//context
import ProductContextProvider from './context/ProductContextProvider';


function App() {


  return (
   <ProductContextProvider>
   </ProductContextProvider>
  );
}

export default App;
