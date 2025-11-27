import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, Menu, X, ChevronRight, Star, 
  Facebook, Instagram, Linkedin, MapPin, Phone, Mail, 
  CheckCircle, ArrowLeft, ArrowRight, Minus, Plus, 
  Download, Shield, Filter, Search 
} from 'lucide-react';
import { Routes, Route, Link, useLocation, useNavigate, useParams } from 'react-router-dom';

/* =========================================
   MOCK DATA (Preserved)
   ========================================= */
const CATEGORIES = [
  { id: 'solid', name: 'Solid Pearls', description: 'Single and solid color pearls.', icon: 'bg-zinc-900' },
  { id: 'interference', name: 'Interference', description: 'Iridescent colors and finishes.', icon: 'bg-zinc-800' },
  { id: 'carbon', name: 'Carbon Pearls', description: 'Highly metallic and bold.', icon: 'bg-zinc-700' },
  { id: 'oem', name: 'OEM+ Pearls', description: 'Subtle holographic effects.', icon: 'bg-zinc-600' },
  { id: 'special', name: 'Special Effect', description: 'Optically variable color changing.', icon: 'bg-zinc-500' },
  { id: 'chroma', name: 'Chroma Pearls', description: 'Vivid multi-color shift.', icon: 'bg-zinc-400' },
];

const PRODUCTS = [
  { 
    id: 1, 
    name: '24 Karat Gold', 
    category: 'solid', 
    price: 1200, 
    rating: 5, 
    code: 'SLD-001',
    description: 'Pure, rich gold tone. The standard for luxury finishes. Excellent coverage and metallic brilliance.', 
    features: ['Automotive Grade', 'UV Resistant', 'High Opacity'],
    imageColor: 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)' 
  },
  { 
    id: 2, 
    name: 'Carbon Red', 
    category: 'carbon', 
    price: 1450, 
    rating: 4.8, 
    code: 'CBN-004',
    description: 'Highly metallic and bold solid red pearl. Creates a deep, blood-red finish with carbon-like shimmer.', 
    features: ['Metallic', 'Deep Depth', '200°C Temp Rating'],
    imageColor: 'linear-gradient(135deg, #ef4444 0%, #7f1d1d 100%)' 
  },
  { 
    id: 3, 
    name: 'Interference Blue', 
    category: 'interference', 
    price: 1300, 
    rating: 4.5, 
    code: 'INT-022',
    description: 'Ghost pearl that appears white/clear but reflects vivid blue under direct light. Perfect for top coats.', 
    features: ['Ghost Effect', 'Mix with Clear', 'Subtle Shift'],
    imageColor: 'linear-gradient(135deg, #e0f2fe 0%, #3b82f6 100%)' 
  },
  { 
    id: 4, 
    name: 'Zombie Midnight', 
    category: 'special', 
    price: 1800, 
    rating: 5, 
    code: 'SPC-089',
    description: 'A deep, mysterious shift from dark navy to teal. Perfect for night driving aesthetics.', 
    features: ['Color Shift', 'Dark Base Req', 'Premium Pigment'],
    imageColor: 'linear-gradient(135deg, #0f172a 0%, #0d9488 100%)' 
  },
  { 
    id: 5, 
    name: 'Reptile Flip', 
    category: 'chroma', 
    price: 2800, 
    rating: 5, 
    code: 'CHR-007',
    description: 'Insane color shift: Green -> Gold -> Blue. A true chroma pearl that changes with every angle.', 
    features: ['Multi-Chrome', 'Extreme Shift', 'Show Car Quality'],
    imageColor: 'linear-gradient(135deg, #22c55e 0%, #eab308 50%, #3b82f6 100%)' 
  },
  { 
    id: 6, 
    name: 'Obsidian Black', 
    category: 'oem', 
    price: 1100, 
    rating: 4.7, 
    code: 'OEM-012',
    description: 'Deepest black with a subtle holographic sparkle. OEM+ quality for factory-match repairs with a twist.', 
    features: ['Factory Match', 'Holographic', 'Deep Black'],
    imageColor: 'linear-gradient(135deg, #000000 0%, #333333 100%)' 
  },
  { 
    id: 7, name: 'Blurple', category: 'solid', price: 1250, rating: 4.6, code: 'SLD-005',
    description: 'The perfect blend of blue and purple.', imageColor: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)', features: ['Vivid', 'Solid']
  },
  { 
    id: 8, name: 'Radioactive Green', category: 'interference', price: 1500, rating: 4.9, code: 'INT-033',
    description: 'Glowing green that pops aggressively.', imageColor: 'linear-gradient(135deg, #bef264 0%, #22c55e 100%)', features: ['Neon', 'Bright']
  }
];

/* =========================================
   COMPONENTS
   ========================================= */

// --- NAVBAR ---
const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/shop' },
    { name: 'Partner', path: '#' },
    { name: 'FAQ', path: '#' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'border-b border-gray-100 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
              <span className="text-white font-black text-xl">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-black leading-none tracking-tight">XTREME</span>
              <span className="text-[10px] font-bold text-sky-500 uppercase tracking-[0.25em] leading-none">Kolorz</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-medium transition-colors hover:text-sky-500 ${
                  location.pathname === link.path ? 'text-sky-500 font-bold' : 'text-zinc-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/shop" className="hidden md:block px-6 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-zinc-800 transition-colors">
              Order Now
            </Link>
            <Link to="/cart" className="relative p-2 text-zinc-800 hover:text-sky-500 transition-colors">
              <ShoppingCart size={24} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-sky-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-zinc-800">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium px-4 py-2 rounded-lg ${
                  location.pathname === link.path ? 'bg-sky-50 text-sky-600' : 'text-zinc-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

// --- CART SIDEBAR ---
const CartSidebar = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onCheckout }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <div className={`fixed inset-0 z-[100] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-zinc-900">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full"><X size={24} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-zinc-500 py-20">Your cart is empty.</div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-gray-100 flex-shrink-0" style={{ background: item.imageColor }} />
                <div className="flex-1">
                  <h4 className="font-bold text-zinc-900">{item.name}</h4>
                  <p className="text-sm text-zinc-500 capitalize">{item.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button onClick={() => onUpdateQuantity(idx, -1)} className="px-2 py-1 hover:bg-gray-50"><Minus size={14} /></button>
                      <span className="px-2 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(idx, 1)} className="px-2 py-1 hover:bg-gray-50"><Plus size={14} /></button>
                    </div>
                    <span className="font-bold">₹{item.price * item.quantity}</span>
                  </div>
                </div>
                <button onClick={() => onRemove(idx)} className="text-gray-400 hover:text-red-500 self-start"><Trash2 size={16} /></button>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-between mb-4"><span className="font-medium text-zinc-600">Subtotal</span><span className="font-bold text-xl">₹{total}</span></div>
            <button onClick={handleCheckout} className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl hover:bg-sky-600 transition-colors flex justify-center items-center gap-2">
              Proceed to Checkout <ArrowRight size={18}/>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- PRODUCT CARD ---
const ProductCard = ({ product, onAddToCart }) => (
  <div className="group bg-white rounded-2xl border border-gray-100 hover:border-sky-100 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
    <div className="aspect-square relative bg-gray-50 overflow-hidden">
      <div className="w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ background: product.imageColor }} />
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-900">
        {CATEGORIES.find(c => c.id === product.category)?.name || 'Pearl'}
      </div>
      <Link to={`/product/${product.id}`} className="absolute inset-0" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <Link to={`/product/${product.id}`}><h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-sky-500 transition-colors">{product.name}</h3></Link>
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />)}
        <span className="text-xs text-gray-400 ml-1">(24)</span>
      </div>
      <p className="text-sm text-gray-500 line-clamp-2 mb-6">{product.description}</p>
      <div className="mt-auto flex items-center justify-between">
        <div><span className="block text-xs text-gray-400 uppercase">Price / 100g</span><span className="text-xl font-bold text-zinc-900">₹{product.price}</span></div>
        <button onClick={() => onAddToCart(product)} className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-sky-500 transition-colors shadow-lg shadow-sky-500/20">
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  </div>
);

// --- FOOTER ---
const Footer = () => (
  <footer className="bg-black text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-black">K</div>
            <span className="font-bold text-xl tracking-tight">XTREME KOLORZ</span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-6">Premium automotive grade pearls engineered for depth, durability, and head-turning brilliance.</p>
          <div className="flex gap-4">
            <Facebook size={20} className="text-zinc-400 hover:text-sky-500 cursor-pointer" />
            <Instagram size={20} className="text-zinc-400 hover:text-sky-500 cursor-pointer" />
            <Linkedin size={20} className="text-zinc-400 hover:text-sky-500 cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-zinc-500">Products</h4>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li><Link to="/shop" className="hover:text-sky-500 transition-colors">Solid Pearls</Link></li>
            <li><Link to="/shop" className="hover:text-sky-500 transition-colors">Interference</Link></li>
            <li><Link to="/shop" className="hover:text-sky-500 transition-colors">Carbon Series</Link></li>
            <li><Link to="/shop" className="hover:text-sky-500 transition-colors">Chroma Shift</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-zinc-500">Support</h4>
          <ul className="space-y-3 text-sm text-zinc-300">
            <li><Link to="#" className="hover:text-sky-500 transition-colors">Technical Data Sheets</Link></li>
            <li><Link to="#" className="hover:text-sky-500 transition-colors">Mixing Ratios</Link></li>
            <li><Link to="#" className="hover:text-sky-500 transition-colors">Shipping Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-zinc-500">Contact</h4>
          <ul className="space-y-4 text-sm text-zinc-300">
            <li className="flex gap-3"><MapPin size={18} className="text-sky-500" /><span>Pune, Maharashtra 411048</span></li>
            <li className="flex gap-3"><Phone size={18} className="text-sky-500" /><span>+91 777 50 777 52</span></li>
            <li className="flex gap-3"><Mail size={18} className="text-sky-500" /><span>info@kustomkoats.in</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-900 pt-8 text-center text-xs text-zinc-600">&copy; 2025 Kustom Koats. All rights reserved.</div>
    </div>
  </footer>
);

// --- HOME PAGE ---
const Home = () => (
  <div className="bg-white text-zinc-900">
    {/* Hero Section */}
    <section className="min-h-screen flex items-center justify-center py-20 border-b border-gray-100 bg-zinc-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-white rounded-3xl p-12 md:p-20 shadow-xl shadow-gray-200/50 border border-gray-100">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-zinc-900">
            Showcasing the Finest <span className="text-sky-500">Automotive Grade Colors</span>
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed text-zinc-500 mb-10">
            Premium automotive-grade color technology used in coatings, workshops, and OEM industries.
          </p>
          <Link to="/shop" className="inline-block px-10 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-sky-500 transition-all shadow-lg hover:shadow-sky-500/25 transform hover:-translate-y-1">
            Explore Pearls
          </Link>
        </div>
      </div>
    </section>

    {/* Types of Pearls */}
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">Types of Pearls</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Solid Pearls", "Interference Pearls", "Carbon Pearls",
            "OEM+ Pearls", "Special Effect Pearls", "Chroma Pearls"
          ].map((item, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl h-48 md:h-60 flex items-center justify-center text-xl md:text-2xl font-bold hover:shadow-2xl hover:border-sky-100 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 group-hover:text-sky-500 transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Xtreme Kolorz */}
    <section className="py-24 border-t border-gray-100 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-gray-200/50 mb-16 border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Why Xtreme Kolorz?</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-5">
            Pearls are very fine inorganic and organic tinters that come in almost endless array of metallic, interference and pearlescent colors. They can be used for special effect finishes, as long as they are cleared over.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Pearls are usually mica or silica based pearls which are color additives coated with metal oxides. They are non-toxic, inert, and contain no actual metal—so they never rust or tarnish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {[
              "High quality, non-metallic pearls (no rust / tarnish)",
              "Wide range of colors & effects",
              "Suitable for automotive + other industries",
              "Strong customer support & technical help"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="text-sky-500 shrink-0" />
                <span className="font-medium text-lg">{text.replace('-', '')}</span>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-3xl h-80 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-sky-500/20">
            Image Placeholder
          </div>
        </div>
      </div>
    </section>

    {/* Industries */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-black mb-14 text-center">Industries</h2>
        <div className="bg-sky-50 rounded-3xl h-60 md:h-72 flex flex-col items-center justify-center text-center mb-8 border border-sky-100">
          <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-2">Short Title of Result</h3>
          <p className="text-lg md:text-xl text-sky-700">Description of Short Title of result</p>
        </div>
        <div className="flex justify-center gap-2 mb-16">
          {[1, 2, 3, 4, 5].map((_, i) => <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-200'}`} />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Order Products", desc: "As a professional you can order all Xtreme Kolorz products directly from the manufacturer.", contact: "sales@kustomkoats.in" },
            { title: "Partner Program", desc: "For painting businesses, Xtreme Kolorz offers a partner program with special benefits and support.", contact: "partner@kustomkoats.in" },
            { title: "Distribution Trade", desc: "Wholesalers and specialized dealers can include Xtreme Kolorz products in their trade program.", contact: "partner@kustomkoats.in" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed mb-6">{item.desc}</p>
              <div className="text-sm font-bold text-zinc-900">
                <p>Contact Us</p>
                <p className="text-sky-500">+91 777 50 777 52</p>
                <p className="text-sky-500">{item.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Search & FAQ */}
    <section className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl shadow-gray-200/50 text-center mb-20 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-black mb-8">Didn’t get What You are looking for</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input className="w-full bg-gray-50 border border-gray-200 rounded-full px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-sky-500 transition-all" placeholder="Search Here...." />
            <button className="px-10 py-4 bg-black text-white rounded-full text-lg font-bold hover:bg-sky-500 transition-colors shadow-lg">Search</button>
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-black mb-10 text-center">FAQ’s</h3>
        <div className="space-y-4 max-w-3xl mx-auto">
          {["What are automotive pearls used for?", "Are your pigments compatible with all clear coats?", "Do Xtreme Kolorz pearls fade over time?", "Can I order bulk quantities for industrial use?"].map((q, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center cursor-pointer hover:border-sky-200 transition-colors">
              <span className="text-lg font-semibold">{q}</span>
              <Plus size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10">Talk to our Sales Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2"><label className="font-bold ml-1">Name</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-sky-500 transition-colors" placeholder="Enter Name..." /></div>
            <div className="space-y-2"><label className="font-bold ml-1">Phone</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-sky-500 transition-colors" placeholder="Enter Phone..." /></div>
            <div className="space-y-2 md:col-span-2"><label className="font-bold ml-1">Email</label><input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-sky-500 transition-colors" placeholder="Enter Email..." /></div>
            <div className="space-y-2 md:col-span-2"><label className="font-bold ml-1">Message</label><textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-sky-500 transition-colors" placeholder="Enter Message..." /></div>
            <button className="md:col-span-2 w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-sky-500 transition-colors shadow-lg">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- SHOP PAGE ---
const Shop = ({ addToCart }) => {
  const [activeCat, setActiveCat] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const filtered = PRODUCTS.filter(p => (activeCat === "All" || p.category === activeCat) && p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-6">Our Products</h1>
          <div className="flex max-w-xl mx-auto gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all" placeholder="Search pigments..." />
            </div>
            <button className="bg-black text-white px-8 rounded-xl font-bold hover:bg-sky-500 transition-colors">Search</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row gap-8">
        <aside className="md:w-64 flex-shrink-0">
           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
             <h3 className="font-bold mb-4 text-lg">Categories</h3>
             <div className="space-y-2">
               <button onClick={() => setActiveCat("All")} className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCat === "All" ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>All Products</button>
               {CATEGORIES.map(cat => (
                 <button key={cat.id} onClick={() => setActiveCat(cat.id)} className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCat === cat.id ? 'bg-black text-white' : 'hover:bg-gray-100'}`}>{cat.name}</button>
               ))}
             </div>
           </div>
        </aside>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
          {filtered.length === 0 && <div className="col-span-full text-center py-20 bg-white rounded-2xl border border-gray-100"><p className="text-zinc-500">No matching products found.</p><button onClick={() => { setActiveCat("All"); setSearchTerm(""); }} className="mt-4 text-sky-500 font-bold hover:underline">Clear Filters</button></div>}
        </div>
      </div>
    </div>
  );
};

// --- PRODUCT PAGE ---
const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id.toString() === id);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => window.scrollTo(0, 0), [id]);

  if (!product) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
       <div className="bg-gray-50 border-b border-gray-200 py-3">
         <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
           <button onClick={() => navigate('/')} className="hover:text-black">Home</button>
           <ChevronRight size={12} />
           <button onClick={() => navigate('/shop')} className="hover:text-black">Shop</button>
           <ChevronRight size={12} />
           <span className="text-black">{product.name}</span>
         </div>
       </div>
       <div className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="space-y-4">
           <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden relative shadow-inner">
             <div className="w-full h-full" style={{ background: product.imageColor }} />
           </div>
           <div className="grid grid-cols-4 gap-4">
             {[0,1,2,3].map(i => <div key={i} onClick={() => setActiveImg(i)} className={`aspect-square rounded-xl bg-gray-50 cursor-pointer border-2 transition-all ${activeImg === i ? 'border-black' : 'border-transparent'}`} style={{ background: product.imageColor, opacity: 0.5 + (i * 0.1) }} />)}
           </div>
         </div>
         <div>
           <span className="inline-block px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">{product.category} Pearl</span>
           <h1 className="text-4xl md:text-5xl font-black mb-6 text-zinc-900">{product.name}</h1>
           <div className="flex items-center gap-2 mb-6 text-sm font-medium">
             <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
             <span className="text-gray-500">(128 Reviews)</span>
           </div>
           <p className="text-lg text-zinc-600 leading-relaxed mb-8">{product.description}</p>
           <div className="grid grid-cols-2 gap-4 mb-8">
             {product.features?.map((f, i) => <div key={i} className="flex items-center gap-2 text-sm font-bold text-zinc-700 bg-gray-50 p-3 rounded-lg"><CheckCircle size={16} className="text-sky-500" /> {f}</div>)}
           </div>
           <div className="bg-zinc-900 text-white p-8 rounded-2xl shadow-xl">
             <div className="flex justify-between items-end mb-6">
               <div><p className="text-xs text-zinc-400 uppercase font-bold mb-1">Price</p><p className="text-4xl font-black">₹{product.price}<span className="text-lg text-zinc-500 font-medium">/100g</span></p></div>
               <div className="text-right"><p className="text-emerald-400 text-sm font-bold flex items-center justify-end gap-1"><CheckCircle size={14}/> In Stock</p><p className="text-xs text-zinc-500 mt-1">Ships in 24hrs</p></div>
             </div>
             <button onClick={() => addToCart(product)} className="w-full bg-white text-black py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all">Add to Cart</button>
           </div>
         </div>
       </div>
    </div>
  );
};

// --- CART PAGE ---
const CartPage = ({ items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  
  if (items.length === 0) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm"><ShoppingCart className="text-gray-300" size={32} /></div>
      <h2 className="text-xl font-bold text-zinc-900">Your Cart is Empty</h2>
      <Link to="/shop" className="mt-6 px-8 py-3 bg-black text-white font-bold rounded-lg hover:bg-zinc-800">Start Shopping</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-black mb-10">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-4">
            {items.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                <div className="w-24 h-24 rounded-xl bg-gray-100" style={{ background: item.imageColor }} />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category} Pearl</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                       <button onClick={() => onUpdateQuantity(i, -1)} className="px-3 py-1 hover:bg-gray-50"><Minus size={14}/></button>
                       <span className="px-3 font-medium">{item.quantity}</span>
                       <button onClick={() => onUpdateQuantity(i, 1)} className="px-3 py-1 hover:bg-gray-50"><Plus size={14}/></button>
                    </div>
                    <button onClick={() => onRemove(i)} className="text-sm text-red-500 font-bold hover:underline">Remove</button>
                  </div>
                </div>
                <div className="text-right font-bold text-lg">₹{item.price * item.quantity}</div>
              </div>
            ))}
          </div>
          <div className="lg:w-96">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg sticky top-24">
              <h3 className="font-bold text-lg mb-6">Order Summary</h3>
              <div className="space-y-4 mb-8 pb-8 border-b border-gray-100 text-sm text-gray-600">
                <div className="flex justify-between"><span>Subtotal</span><span>₹{total}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Calculated at checkout</span></div>
              </div>
              <div className="flex justify-between font-black text-xl mb-8"><span>Total</span><span>₹{total}</span></div>
              <button className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 transition-all">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CONTACT PAGE ---
const ContactPage = () => (
  <div className="min-h-screen bg-white py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">Get in Touch</span>
          <h1 className="text-4xl font-black mb-6">Contact Sales & Support</h1>
          <p className="text-lg text-gray-600 mb-10">Have a question about mixing ratios, stock availability, or bulk pricing? Our technical team is ready to assist you.</p>
          <div className="space-y-8">
            <div className="flex gap-4"><div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center shrink-0"><Phone /></div><div><h4 className="font-bold">Phone</h4><p className="text-gray-600">+91 777 50 777 52</p></div></div>
            <div className="flex gap-4"><div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center shrink-0"><Mail /></div><div><h4 className="font-bold">Email</h4><p className="text-gray-600">info@kustomkoats.in</p></div></div>
            <div className="flex gap-4"><div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center shrink-0"><MapPin /></div><div><h4 className="font-bold">HQ</h4><p className="text-gray-600">Pune, Maharashtra 411048</p></div></div>
          </div>
        </div>
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
           <form className="space-y-6">
             <div className="grid grid-cols-2 gap-4">
               <div><label className="text-xs font-bold uppercase text-gray-400 mb-1 block">First Name</label><input className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-black" /></div>
               <div><label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Last Name</label><input className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-black" /></div>
             </div>
             <div><label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Email</label><input className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-black" /></div>
             <div><label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Message</label><textarea rows="4" className="w-full p-3 rounded-lg border border-gray-200 outline-none focus:border-black" /></div>
             <button className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-sky-500 transition-colors">Send Message</button>
           </form>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---
export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => window.scrollTo(0, 0), [pathname]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      return existing 
        ? prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index) => setCart(prev => prev.filter((_, i) => i !== index));
  const updateQuantity = (index, delta) => {
    setCart(prev => prev.map((item, i) => {
      if (i === index) return { ...item, quantity: Math.max(1, item.quantity + delta) };
      return item;
    }));
  };

  return (
    <div className="min-h-screen font-sans text-zinc-900 bg-white selection:bg-sky-100 selection:text-sky-900 pt-16">
      <Navbar cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cart} 
        onRemove={removeFromCart} 
        onUpdateQuantity={updateQuantity} 
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage items={cart} onRemove={removeFromCart} onUpdateQuantity={updateQuantity} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}