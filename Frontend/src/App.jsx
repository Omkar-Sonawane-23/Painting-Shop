import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import { INITIAL_PRODUCTS } from './data/products';

export default function App() {
  // Data State
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // UI State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Cart State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  }, [pathname]);

  // --- Simulating API Call ---
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate network delay
      setTimeout(() => {
        setProducts(INITIAL_PRODUCTS);
        setLoading(false);
      }, 800);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
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
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart} 
        onCheckout={checkout}
      />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={
            <Home 
              products={products} 
              onShopNow={() => {}} // Navigation handled in Home via Link
              onCategoryClick={() => {}} // Navigation handled in Home via Link
            />
          } />
          
          <Route path="/shop" element={
            <Shop 
              products={products} 
              loading={loading} 
              addToCart={addToCart}
            />
          } />
          
          <Route path="/product/:id" element={
            <ProductPage 
              products={products}
              addToCart={addToCart} 
            />
          } />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}