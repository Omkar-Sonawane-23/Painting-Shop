import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingCart, Search, Menu, X, ChevronRight, Filter, Star, Info, MapPin, Phone, Mail, Instagram, Facebook, Loader, ShieldCheck, Droplet, Layers, Trash2 } from 'lucide-react';

// ==========================================
// DATA SECTION (In local: src/data/products.js)
// ==========================================

const INITIAL_PRODUCTS = [
  { 
    id: 1,
    name: '24 Karat Gold', 
    category: 'solid', 
    price: 1200, 
    rating: 5, 
    description: 'Pure, rich gold tone. The standard for luxury finishes. Excellent coverage and metallic brilliance.', 
    imageColor: 'linear-gradient(135deg, #FFD700, #B8860B)',
    features: ['No Rust', 'UV Resistant', 'High Gloss']
  },
  { 
    id: 2,
    name: 'Zombie Midnight', 
    category: 'special', 
    price: 1800, 
    rating: 5, 
    description: 'A deep, mysterious shift from dark navy to teal. Perfect for night driving aesthetics.', 
    imageColor: 'linear-gradient(135deg, #2c3e50, #4ca1af)',
    features: ['Color Shift', 'Deep Depth', 'Stealth Look']
  },
  { 
    id: 3,
    name: 'Blurple', 
    category: 'solid', 
    price: 1200, 
    rating: 4, 
    description: 'The perfect blend of blue and purple. Vivid, deep, and unmistakable.', 
    imageColor: 'linear-gradient(135deg, #0000FF, #800080)',
    features: ['Vivid', 'High Pigment', 'Solid Tone']
  },
  { 
    id: 4,
    name: 'Radioactive Green', 
    category: 'interference', 
    price: 1500, 
    rating: 5, 
    description: 'Glowing green that pops aggressively under direct sunlight. Not for the faint of heart.', 
    imageColor: 'linear-gradient(135deg, #32CD32, #006400)',
    features: ['High Vis', 'Neon Effect', 'Interference']
  },
  { 
    id: 5,
    name: 'Carbon Lava', 
    category: 'carbon', 
    price: 1600, 
    rating: 5, 
    description: 'Molten red with a metallic carbon texture. Looks like liquid magma.', 
    imageColor: 'linear-gradient(135deg, #FF4500, #8B0000)',
    features: ['Metallic', 'Texture', 'Bold']
  },
  { 
    id: 6,
    name: 'Reptile Flip', 
    category: 'chroma', 
    price: 2200, 
    rating: 5, 
    description: 'Insane color shift: Green -> Gold -> Blue. A true chroma pearl that changes with every angle.', 
    imageColor: 'linear-gradient(135deg, #0ba360, #3cba92, #ffd700)',
    features: ['Multi-Chrome', '5-Color Shift', 'Extreme']
  }
];

const CATEGORIES = [
  { id: 'solid', name: 'Solid Pearls', description: 'Single and solid color pearls.', color: 'bg-yellow-500' },
  { id: 'interference', name: 'Interference Pearls', description: 'Iridescent colors and finishes.', color: 'bg-blue-500' },
  { id: 'carbon', name: 'Carbon Pearls', description: 'Highly metallic and bold.', color: 'bg-gray-500' },
  { id: 'oem', name: 'OEM+ Pearls', description: 'Solid colors with subtle holographic effect.', color: 'bg-red-600' },
  { id: 'special', name: 'Special Effect', description: 'Optically variable (color changing).', color: 'bg-purple-600' },
  { id: 'chroma', name: 'Chroma Pearls', description: 'Vivid, hard shifting 5-6 color changes.', color: 'bg-emerald-500' },
];

// ==========================================
// COMPONENTS SECTION
// ==========================================

// --- Navbar Component ---
const Navbar = ({ cartCount, activePage, setActivePage, isMobileMenuOpen, setIsMobileMenuOpen, onOpenCart }) => {
  const navItems = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <nav className="bg-zinc-950/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-zinc-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => { setActivePage('home'); setIsMobileMenuOpen(false); }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-red-600 rounded-lg mr-3 transform group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(234,179,8,0.4)] flex items-center justify-center">
              <span className="font-black text-black text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider leading-none bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">XTREME</span>
              <span className="font-bold text-[10px] text-yellow-500 tracking-[0.3em] leading-none mt-1">KOLORZ</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button 
                  key={item}
                  onClick={() => setActivePage(item.toLowerCase())} 
                  className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${activePage === item.toLowerCase() ? 'text-yellow-500' : 'text-zinc-400 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
              </div>
              <input 
                className="bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 w-32 focus:w-56 transition-all duration-300 text-sm text-zinc-200 focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 placeholder-zinc-600" 
                placeholder="Search pigments..." 
              />
            </div>
            
            <div 
              className="relative cursor-pointer hover:text-yellow-500 transition-colors p-2 group"
              onClick={onOpenCart}
            >
              <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-zinc-950 animate-pulse">
                  {cartCount}
                </span>
              )}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-zinc-300 hover:text-white p-2">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full z-50 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { setActivePage(item.toLowerCase()); setIsMobileMenuOpen(false); }}
                className={`block w-full text-left px-4 py-4 rounded-xl text-lg font-bold ${activePage === item.toLowerCase() ? 'bg-zinc-900 text-yellow-500 border border-zinc-800' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer Component ---
const Footer = () => (
  <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-2xl font-black text-white tracking-tighter mb-4">XTREME KOLORZ</h4>
          <p className="text-zinc-500 text-sm max-w-sm leading-relaxed">
            Premium automotive pearls engineered for depth, durability, and head-turning brilliance.
          </p>
        </div>
        
        <div>
          <h5 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">Contact</h5>
          <ul className="space-y-3 text-zinc-500 text-sm">
            <li className="flex items-start"><MapPin size={16} className="mr-2 mt-0.5 text-yellow-500"/> Pune, Maharashtra 411048</li>
            <li className="flex items-center"><Phone size={16} className="mr-2 text-yellow-500"/> +91 777 50 777 52</li>
            <li className="flex items-center"><Mail size={16} className="mr-2 text-yellow-500"/> info@kustomkoats.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-900 pt-8 text-center">
        <p className="text-zinc-600 text-xs">© 2025 Kustom Koats. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// --- CartSidebar Component ---
const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-zinc-900 border-l border-zinc-800 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950">
          <h2 className="text-xl font-black text-white uppercase tracking-wide flex items-center gap-2">
            <ShoppingCart size={20} className="text-yellow-500" /> Your Cart
          </h2>
          <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors"><X size={24} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500">
              <ShoppingCart size={48} className="mb-4 opacity-50" />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/50">
                <div className="h-20 w-20 rounded-lg bg-zinc-800 shadow-sm flex-shrink-0" style={{ background: item.imageColor }}></div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider">100ml Pack</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-yellow-500 font-mono font-bold">₹{item.price}</span>
                    <button onClick={() => onRemove(idx)} className="text-zinc-600 hover:text-red-500 transition-colors p-1"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-6 bg-zinc-950 border-t border-zinc-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-zinc-400 text-sm uppercase font-bold">Subtotal</span>
              <span className="text-2xl font-bold text-white">₹{total}</span>
            </div>
            <button onClick={onCheckout} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl uppercase tracking-wide transition-transform hover:-translate-y-1 active:scale-95">Checkout Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- ProductCard Component ---
const ProductCard = ({ product, onViewDetails, onAddToCart }) => {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name.split(' ')[0] || 'Pearl';

  return (
    <div 
      className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 group flex flex-col shadow-lg cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-800">
        <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-700" style={{ background: product.imageColor }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/20 opacity-90"></div>
        <button 
          onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}
          className="absolute bottom-3 right-3 bg-white text-black p-3 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-yellow-400 active:scale-95 z-10"
        >
          <ShoppingCart size={18} />
        </button>
        <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 shadow-sm">{categoryName}</div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1 truncate">{product.name}</h3>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} fill={i < product.rating ? "currentColor" : "none"} className={i >= product.rating ? "text-zinc-700" : ""} />
            ))}
          </div>
        </div>
        <div className="mt-auto flex justify-between items-end pt-4 border-t border-zinc-800/50">
          <div>
            <p className="text-zinc-500 text-[10px] uppercase font-bold mb-0.5">Per 100ml</p>
            <p className="text-xl font-bold text-white font-mono tracking-tight">₹{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// PAGES SECTION
// ==========================================

const Home = ({ onShopNow, onCategoryClick }) => (
  <>
    <div className="relative bg-zinc-950 overflow-hidden h-[600px] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" alt="Luxury Paint" className="w-full h-full object-cover opacity-50 transform scale-105" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl animate-in slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <span className="text-yellow-500 text-xs font-bold tracking-widest uppercase">Premium Grade Pigments</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            PAINT THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600">IMPOSSIBLE</span>
          </h1>
          <button onClick={onShopNow} className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-400 flex items-center gap-2">
            Explore Colors <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-black text-white mb-10">PEARL TYPES</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((cat) => (
          <div key={cat.id} onClick={() => onCategoryClick(cat.id)} className="group bg-zinc-900 rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all border border-zinc-800 hover:border-yellow-500/50 h-48 flex flex-col justify-between relative overflow-hidden">
            <div className={`absolute -top-8 -right-8 w-32 h-32 ${cat.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
            <h3 className="text-base font-bold text-white uppercase relative z-10">{cat.name}</h3>
            <p className="text-[10px] text-zinc-500 relative z-10">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

const Shop = ({ products, loading, activeCategory, setActiveCategory, onViewDetails, onAddToCart }) => {
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.category === activeCategory);
  }, [products, activeCategory]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sticky top-24">
            <div className="flex items-center mb-6 pb-4 border-b border-zinc-800">
              <Filter size={18} className="mr-2 text-yellow-500" /><h3 className="font-bold text-lg text-white tracking-wide">FILTERS</h3>
            </div>
            <div className="space-y-1">
              <button onClick={() => setActiveCategory('all')} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${activeCategory === 'all' ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}>ALL PEARLS</button>
              {CATEGORIES.map(cat => (
                <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${activeCategory === cat.id ? 'bg-white text-black' : 'text-zinc-400 hover:text-white'}`}>{cat.name}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 text-zinc-500">
              <Loader size={40} className="animate-spin mb-4 text-yellow-500" /><p className="text-sm font-bold uppercase tracking-widest">Loading Pigments...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(p => (
                <ProductCard key={p.id} product={p} onViewDetails={onViewDetails} onAddToCart={onAddToCart} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductPage = ({ product, onBack, onAddToCart }) => {
  const categoryName = CATEGORIES.find(c => c.id === product.category)?.name;
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button onClick={onBack} className="flex items-center text-zinc-400 hover:text-white mb-8 transition-colors text-sm font-bold uppercase">
        <ChevronRight className="rotate-180 mr-2" size={16} /> Back to Shop
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square border border-zinc-800 bg-zinc-900">
          <div className="w-full h-full" style={{ background: product.imageColor }}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/60"></div>
        </div>
        <div className="flex flex-col pt-4">
          <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-4">{categoryName}</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{product.name}</h1>
          <p className="text-zinc-300 text-lg leading-relaxed font-light mb-10">{product.description}</p>
          <div className="mt-auto bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-white">₹{product.price}</span><span className="text-zinc-600 text-lg uppercase font-bold">Per 100ml</span>
            </div>
            <button onClick={() => onAddToCart(product)} className="w-full bg-white hover:bg-zinc-200 text-black font-black py-5 px-8 rounded-2xl shadow-xl flex items-center justify-center gap-3 text-lg uppercase">
              <ShoppingCart size={22} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ cartItems, onRemove, onCheckout, onStartShopping }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 min-h-screen">
      <h2 className="text-3xl font-black text-white mb-8 uppercase">Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <div className="text-center py-32 bg-zinc-900 rounded-3xl border border-zinc-800">
          <ShoppingCart size={64} className="mx-auto text-zinc-800 mb-6" /><p className="text-zinc-500 text-lg font-medium mb-6">Your cart is feeling light.</p>
          <button onClick={onStartShopping} className="px-8 py-3 bg-white text-black font-bold rounded-xl">Start Shopping</button>
        </div>
      ) : (
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
          {cartItems.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="flex items-center p-6 border-b border-zinc-800 gap-6">
              <div className="h-20 w-20 rounded-xl shadow-md" style={{ background: item.imageColor }}></div>
              <div className="flex-1"><h3 className="text-white font-bold text-lg">{item.name}</h3></div>
              <div className="text-white font-mono font-bold text-xl">₹{item.price}</div>
              <button onClick={() => onRemove(idx)} className="p-2 text-zinc-600 hover:text-red-500"><X size={20} /></button>
            </div>
          ))}
          <div className="p-8 bg-zinc-950 border-t border-zinc-800">
            <div className="flex justify-between text-2xl font-black text-white mb-8"><span>TOTAL</span><span>₹{total}</span></div>
            <button onClick={onCheckout} className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-4 rounded-xl text-lg">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Contact = () => (
  <div className="max-w-7xl mx-auto py-16 px-4 min-h-screen">
    <h2 className="text-4xl font-black text-white mb-8 uppercase">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div className="space-y-6">
        <div className="flex items-start gap-4"><div className="bg-zinc-900 p-3 rounded-xl text-yellow-500"><MapPin size={24}/></div><p className="text-zinc-500">Pune, Maharashtra 411048</p></div>
        <div className="flex items-start gap-4"><div className="bg-zinc-900 p-3 rounded-xl text-yellow-500"><Phone size={24}/></div><p className="text-zinc-500">+91 777 50 777 52</p></div>
        <div className="flex items-start gap-4"><div className="bg-zinc-900 p-3 rounded-xl text-yellow-500"><Mail size={24}/></div><p className="text-zinc-500">info@kustomkoats.in</p></div>
      </div>
      <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        <form className="space-y-5">
          <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none" placeholder="Name" />
          <input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none" placeholder="Email" />
          <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-white outline-none" placeholder="Message"></textarea>
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl uppercase">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
);

// ==========================================
// MAIN APP COMPONENT
// ==========================================

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // UI State
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Cart State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- DATA FETCHING (MongoDB / API Placeholder) ---
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // In your local Node.js backend, you would use:
        // const response = await fetch('http://localhost:5000/api/products');
        // const data = await response.json();
        // setProducts(data);

        // Fallback for preview:
        console.log("Simulating API fetch from MongoDB...");
        setTimeout(() => {
          setProducts(INITIAL_PRODUCTS);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
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

  const renderContent = () => {
    if (selectedProduct) {
      return (
        <ProductPage 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
          onAddToCart={addToCart}
        />
      );
    }

    switch (activePage) {
      case 'home':
        return (
          <Home 
            onShopNow={() => setActivePage('shop')} 
            onCategoryClick={(id) => { setActiveCategory(id); setActivePage('shop'); }} 
          />
        );
      case 'shop':
        return (
          <Shop 
            products={products} 
            loading={loading} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            onViewDetails={(prod) => setSelectedProduct(prod)}
            onAddToCart={addToCart}
          />
        );
      case 'cart':
        return (
          <Cart 
            cartItems={cart} 
            onRemove={removeFromCart} 
            onCheckout={checkout}
            onStartShopping={() => setActivePage('shop')}
          />
        );
      case 'about':
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans flex flex-col">
      <Navbar 
        cartCount={cart.length} 
        activePage={activePage} 
        setActivePage={(page) => { setActivePage(page); setSelectedProduct(null); }}
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
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}