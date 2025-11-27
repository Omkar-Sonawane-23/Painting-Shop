// Frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

export default function App() {
  const [cart, setCart] = useState([]);
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-yellow-200">
      <Navbar cartCount={cart.length} />

      {/* padding-top ≈ navbar height so content starts below it */}
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart items={cart} removeFromCart={removeFromCart} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
