
import './App.css';

import {Route,Routes,Navigate} from'react-router-dom'
//components
import Store from './Store';
import Header from './Header';
import ProductDetails from './shared/ProductDetails';
import Footer from './Footer';
import ShopCart from './ShopCart';
//context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';



function App() {


  return (
   <ProductContextProvider>
   <CartContextProvider>
   <Header/>
   <Routes>
   <Route path='/products/:id' element={<ProductDetails/>} />
   <Route path='/products' element={<Store/>} />
   <Route path='/cart' element={<ShopCart/>} />
   <Route path='/*' element={<Navigate to ='/products'/>}/>
   </Routes>
   <Footer/>
   </CartContextProvider>

   </ProductContextProvider>
  );
}

export default App;
