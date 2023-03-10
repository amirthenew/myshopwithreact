
import './App.css';

import {Route,Routes,Navigate} from'react-router-dom'
//components
import Store from './Store';
import Header from './Header';
import ProductDetails from './shared/ProductDetails';
//context
import ProductContextProvider from './context/ProductContextProvider';


function App() {


  return (
   <ProductContextProvider>
   <Header/>
   <Routes>
   <Route path='/products/:id' element={<ProductDetails/>} />
   <Route path='/products' element={<Store/>} />
   <Route path='/*' element={<Navigate to ='/products'/>}/>
   </Routes>
   
   </ProductContextProvider>
  );
}

export default App;
