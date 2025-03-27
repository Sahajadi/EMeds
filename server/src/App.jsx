import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/Adminpanel'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import Product from './pages/Product'
import PrescriptionUpload from "./pages/PrescriptionUpload"
import Checkout from "./pages/Checkout"  // Add this import
import { useState } from 'react'  // Add this import
import GetStarted from './pages/GetStarted';
import Protected from './pages/Protected'
import OrderConfirmation from './pages/OrderConfirmation'



function App() {
  const [cart, setCart] = useState([]);  // Add cart state

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path='/' element={<Protected><Home addToCart={addToCart} /></Protected>} />
          <Route path='/cart' element={<Dashboard/>} />
          {/* <Route path='/adminpanel' element={<AdminPanel/>} /> */}
          <Route path='/product' element={<Product/>} />
          <Route path="/upload-prescription" element={<PrescriptionUpload addToCart={addToCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/get-started" element={<GetStarted addToCart={addToCart} />} />
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
