import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 
import CartSidebar from './components/CartSidebar.jsx'; 
import Home from './pages/Home.jsx'; 
import Shop from './pages/Shop.jsx'; 
import ProductPage from './pages/ProductPage.jsx'; 
import Contact from './pages/Contact.jsx'; 
import Cart from './pages/Cart.jsx'; 
import Checkout from './pages/Checkout.jsx'; 
import About from './pages/About.jsx'; 
import Services from './pages/Services.jsx'; 
import AdminLogin from './pages/AdminLogin.jsx'; 
import AdminDashboard from './Context/AdminDashboard.jsx';
import AdminProducts from './pages/AdminProducts.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute.jsx';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
        return newItems;
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };
  
  const updateQuantity = (index, newQuantity) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      if (newQuantity > 0) {
        newItems[index] = { ...newItems[index], quantity: newQuantity };
      } else {
        newItems.splice(index, 1);
      }
      return newItems;
    });
  };

  const clearCart = () => setCartItems([]);
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Navbar cartCount={totalCartCount} />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemoveItem={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
      />

      <main className="flex-grow pt-20"> 
        <Routes>
          {/* User Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />

          {/* Public Routes */}
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} onUpdateQuantity={updateQuantity} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} /> 
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}