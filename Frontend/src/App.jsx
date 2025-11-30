// File: Frontend/src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Added .jsx
import Footer from './components/Footer.jsx'; // Added .jsx
import CartSidebar from './components/CartSidebar.jsx'; // Added .jsx
import Home from './pages/Home.jsx'; // Added .jsx
import Shop from './pages/Shop.jsx'; // Added .jsx
import ProductPage from './pages/ProductPage.jsx'; // Added .jsx
import Contact from './pages/Contact.jsx'; // Added .jsx
import Cart from './pages/Cart.jsx'; // Added .jsx
import Checkout from './pages/Checkout.jsx'; // Added .jsx
import About from './pages/About.jsx'; // Added .jsx
import Services from './pages/Services.jsx'; // Added .jsx

const App = () => {
  // cartItems now stores objects like: { ...product, quantity: N }
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to add a product (with a specific quantity) to the cart
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        // Product exists, update quantity
        const newItems = [...prevItems];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + quantity,
        };
        return newItems;
      } else {
        // New product, add it
        return [...prevItems, { ...product, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  // Function to remove all instances of a product by its index in the cart array
  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };
  
  // Function to update the quantity of an item at a specific index
  const updateQuantity = (index, newQuantity) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      if (newQuantity > 0) {
        newItems[index] = { ...newItems[index], quantity: newQuantity };
      } else {
        // If quantity drops to 0, remove the item
        newItems.splice(index, 1);
      }
      return newItems;
    });
  };

  // Function to clear the cart after successful checkout
  const clearCart = () => setCartItems([]);

  // Calculate total count of items (sum of quantities)
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <Navbar cartCount={totalCartCount} />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemoveItem={removeFromCart} 
        onUpdateQuantity={updateQuantity} // Pass the new function
      />

      <main className="flex-grow pt-20"> {/* Added padding top for sticky navbar */}
        <Routes>
          <Route path="/" element={<Home onAddToCart={addToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage onAddToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} onUpdateQuantity={updateQuantity} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
          
          <Route path="/about" element={<About />} /> 
          <Route path="/services" element={<Services />} /> 

        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;