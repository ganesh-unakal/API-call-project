import Header from './component/Header/Header'
import './App.css';
import Products from './component/products/Products';
import { useState } from 'react';
import Cart from './component/Cart/cart';
import CartProvider from './component/store/CartContextProvider';
import {Route, Routes} from 'react-router-dom';
import About from './component/pages/About';
import Home from './component/pages/Home';


function App() {
 const [showCart, setShowCart]=useState(false);

 const showCartHandler =()=>{
  setShowCart(true);
 }

 const hideCartHandler = () =>{
  setShowCart(false)
 }

// const router =createBrowserRouter([
//   {
//     path: '/ABOUT', element:<About />
//   }
// ])


  return (
    <CartProvider>
     {showCart && < Cart onClose={hideCartHandler} />}
    <Header onShowCart={showCartHandler} />
   {/*<Products />*/}

    <Routes>
      <Route path= '/'  element={<Home />} />
      <Route path='/ABOUT' element={<About />} />
      <Route path= '/STORE' element={<Products />} />
    </Routes>
  
    </CartProvider >
)

}

export default App;
