import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";
import Login from "./pages/Login";

function App() {
  

  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/thank-you" element={<ThankYou/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    
  )
}

export default App
