import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Navbar } from './Navbar';
import { Cart } from './Cart';
import { Contact } from './Contact';
import { useState } from 'react';
import { Product } from './Product';

 



function App() {
  const [cartItems, setCartItems] = useState([])
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route element={<Navbar cartItems={cartItems} setCartItems={setCartItems}></Navbar>}>
        <Route path='/' element={<Home cartItems={cartItems} setCartItems={setCartItems}></Home>}></Route>
        <Route path='/Cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>}></Route>
        <Route path='/Product' element={<Product cartItems={cartItems} setCartItems={setCartItems}></Product>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
