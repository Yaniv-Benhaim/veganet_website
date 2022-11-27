import './App.css';
import react, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/Products';
import Home from './pages/Home';
import NavBar from './components/NavBar'
import Solutions from './pages/Solutions';
import Developers from './pages/Developers';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

function App() {


  
  return (
    <div className="App">
     
      <BrowserRouter >
        <NavBar />
        <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/contact" element={<Contact />} />

            {/* Payment */}
            <Route path="/product-details" element={<ProductDetails />} />

        
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
