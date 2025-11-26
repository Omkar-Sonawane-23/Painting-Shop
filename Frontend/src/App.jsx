import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart'; // Imported Cart Page
import Contact from './pages/Contact';
import { INITIAL_PRODUCTS } from './data/products';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(INITIAL_PRODUCTS);
        setLoading(false);
      }, 800);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartSidebarOpen(true); // Open sidebar for quick confirmation
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const checkout = () => {
    alert('Proceeding to payment gateway...');
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans flex flex-col">
      <Navbar 
        cartCount={cart.length} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onOpenCart={() => setIsCartSidebarOpen(true)}
      />
      
      {/* Quick View Cart Sidebar (matches wireframe mini-cart behavior) */}
      <CartSidebar 
        isOpen={isCartSidebarOpen} 
        onClose={() => setIsCartSidebarOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart} 
        onCheckout={checkout}
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop products={products} loading={loading} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage products={products} addToCart={addToCart} />} />
          {/* Full Cart Page route */}
          <Route path="/cart" element={<Cart cartItems={cart} onRemove={removeFromCart} onCheckout={checkout} />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}