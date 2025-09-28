import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  

  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contactt/>} />
    </Routes>
    
  )
}

export default App
