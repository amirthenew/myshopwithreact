
import './App.css';
import {Link,Route,Routes} from'react-router-dom'
import Store from './Store';
//context
import ProductContextProvider from './context/ProductContextProvider';


function App() {


  return (
   <ProductContextProvider>
   <Routes>
   <Route path='/product' element={<Store/>} />
   </Routes>
   
   </ProductContextProvider>
  );
}

export default App;
