import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  Filter, 
  ChevronDown, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone,
  Heart,
  Star
} from 'lucide-react';

// --- Mock Data derived from "Brochure" context ---
const PRODUCTS = [
  {
    id: 1,
    name: "Classic White Akoya Strand",
    category: "Necklaces",
    price: 1250,
    rating: 4.9,
    imageColor: "bg-slate-100",
    description: "Hand-selected 7mm white Akoya pearls with 18k gold clasp. A timeless classic for any collection."
  },
  {
    id: 2,
    name: "Tahitian Black Pearl Ring",
    category: "Rings",
    price: 890,
    rating: 4.8,
    imageColor: "bg-gray-800",
    description: "Exotic black pearl set in a modern platinum band. Bold, sophisticated, and utterly unique."
  },
  {
    id: 3,
    name: "Pink Freshwater Earrings",
    category: "Earrings",
    price: 245,
    rating: 4.7,
    imageColor: "bg-rose-100",
    description: "Delicate pink freshwater pearls dropped from rose gold hooks. Perfect for everyday elegance."
  },
  {
    id: 4,
    name: "Golden South Sea Pendant",
    category: "Necklaces",
    price: 1800,
    rating: 5.0,
    imageColor: "bg-amber-100",
    description: "A single, magnificent golden pearl suspended on a diamond-cut chain."
  },
  {
    id: 5,
    name: "Baroque Pearl Bracelet",
    category: "Bracelets",
    price: 320,
    rating: 4.5,
    imageColor: "bg-stone-200",
    description: "Organic, uniquely shaped baroque pearls strung on high-strength silk."
  },
  {
    id: 6,
    name: "Bridal Pearl Set",
    category: "Sets",
    price: 2100,
    rating: 5.0,
    imageColor: "bg-white",
    description: "Complete matching set including necklace, earrings, and bracelet for the special day."
  },
  {
    id: 7,
    name: "Silver Blue Akoya Studs",
    category: "Earrings",
    price: 450,
    rating: 4.6,
    imageColor: "bg-slate-300",
    description: "Rare silver-blue overtones make these simple studs a conversation starter."
  },
  {
    id: 8,
    name: "Mother of Pearl Watch",
    category: "Accessories",
    price: 550,
    rating: 4.3,
    imageColor: "bg-orange-50",
    description: "Iridescent mother of pearl dial with sapphire crystal glass."
  },
];

const FILTERS = {
  categories: ["All", "Necklaces", "Earrings", "Rings", "Bracelets", "Sets", "Accessories"],
  sortOptions: ["Recommended", "Price: Low to High", "Price: High to Low", "Top Rated"]
};

// --- Components ---

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-rose-200 border-2 border-stone-800 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight">Solid Pearls</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Products', 'Partner', 'FAQ', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-stone-600 hover:text-rose-500 font-medium transition-colors text-sm uppercase tracking-wide">
                {item}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 bg-stone-800 text-white text-sm font-medium rounded-full hover:bg-stone-700 transition-colors">
              Order Custom
            </button>
            <div className="relative p-2 cursor-pointer hover:bg-stone-100 rounded-full transition-colors">
              <ShoppingCart size={24} className="text-stone-800" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-rose-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {['Home', 'Products', 'Partner', 'FAQ', 'Contact'].map((item) => (
              <a key={item} href="#" className="block px-3 py-4 text-base font-medium text-stone-700 border-b border-stone-50 hover:text-rose-500">
                {item}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-stone-800 text-white font-medium rounded-lg">
              Order Custom
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Area */}
      <div className={`relative h-64 ${product.imageColor} flex items-center justify-center overflow-hidden`}>
        {/* Placeholder Pearl Visual */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white via-stone-100 to-stone-300 shadow-inner flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
           <div className="absolute top-6 left-8 w-8 h-8 bg-white opacity-40 rounded-full blur-md"></div>
        </div>
        
        {/* Quick Actions */}
        <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-50 text-rose-500">
          <Heart size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
            <Star size={12} fill="currentColor" /> {product.rating}
          </div>
        </div>
        <h3 className="font-serif text-lg font-bold text-stone-800 mb-2 leading-tight">{product.name}</h3>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-stone-50">
          <span className="text-xl font-bold text-stone-900">${product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-700 active:transform active:scale-95 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 mt-20 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-6 h-6 rounded-full bg-rose-200 border border-stone-800"></div>
               <span className="font-serif text-xl font-bold text-white">Solid Pearls</span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed mb-6">
              Ethically sourced, hand-picked pearls for the modern connoisseur. Experience the elegance of the ocean.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="hover:text-rose-400 cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-rose-400 cursor-pointer transition-colors" />
              <Twitter size={20} className="hover:text-rose-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Values</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>concierge@solidpearls.com</span>
              </div>
            </div>
          </div>

        </div>
        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-500">
          © 2024 Solid Pearls Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");
  const [cartCount, setCartCount] = useState(0);
  const [showFilters, setShowFilters] = useState(false); // Mobile toggle

  // --- Filtering Logic ---
  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    if (sortBy === "Top Rated") return b.rating - a.rating;
    return 0; // Recommended (Default ID sort)
  });

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    // In a real app, this would add to a cart context/state
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Navbar cartCount={cartCount} />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
           <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">
             The Collection
           </h1>
           <p className="text-stone-500 max-w-2xl mx-auto">
             Discover our curated selection of fine pearls, harvested from the most pristine waters around the globe.
           </p>
        </div>

        {/* Big Search Bar (Wireframe Feature) */}
        <div className="relative max-w-2xl mx-auto mb-16 group">
          <div className="absolute inset-0 bg-rose-200 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative flex items-center bg-white rounded-full shadow-lg border border-stone-100 overflow-hidden p-2">
            <Search className="ml-4 text-stone-400" size={24} />
            <input 
              type="text"
              placeholder="Search specifically for necklaces, gold, etc..."
              className="w-full px-4 py-3 outline-none text-stone-700 bg-transparent placeholder:text-stone-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="px-8 py-3 bg-stone-900 text-white font-bold rounded-full hover:bg-rose-500 transition-colors">
              Search
            </button>
          </div>
          <p className="text-center text-xs text-stone-400 mt-2 italic">
            {searchQuery ? `Showing results for "${searchQuery}"` : "Try searching for 'Gold' or 'Ring'"}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
             <div className="sticky top-24 space-y-8">
               
               {/* Mobile Header for Sidebar */}
               <div className="flex lg:hidden justify-between items-center mb-4">
                 <h2 className="text-xl font-bold font-serif">Filters</h2>
                 <button onClick={() => setShowFilters(false)}><X /></button>
               </div>

               {/* Sort Section */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                 <h3 className="font-bold text-stone-900 mb-4 flex items-center justify-between">
                   Sort By
                 </h3>
                 <div className="space-y-2">
                   {FILTERS.sortOptions.map(option => (
                     <label key={option} className="flex items-center gap-3 cursor-pointer group">
                       <input 
                        type="radio" 
                        name="sort" 
                        className="accent-rose-500 w-4 h-4"
                        checked={sortBy === option}
                        onChange={() => setSortBy(option)}
                       />
                       <span className={`text-sm group-hover:text-rose-500 transition-colors ${sortBy === option ? 'text-stone-900 font-medium' : 'text-stone-500'}`}>
                         {option}
                       </span>
                     </label>
                   ))}
                 </div>
               </div>

               {/* Categories Section */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                 <h3 className="font-bold text-stone-900 mb-4">Category</h3>
                 <div className="space-y-1">
                   {FILTERS.categories.map(cat => (
                     <button
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                         activeCategory === cat 
                           ? 'bg-rose-50 text-rose-600 font-bold' 
                           : 'text-stone-500 hover:bg-stone-50 hover:text-stone-900'
                       }`}
                     >
                       {cat}
                     </button>
                   ))}
                 </div>
               </div>

               {/* Price Range Visual (Static for UI) */}
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                  <h3 className="font-bold text-stone-900 mb-4">Price Range</h3>
                  <div className="h-1 bg-stone-200 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-rose-400 w-2/3 ml-4"></div>
                  </div>
                  <div className="flex justify-between text-xs text-stone-500 font-mono">
                    <span>$0</span>
                    <span>$5000+</span>
                  </div>
               </div>

             </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <button 
                onClick={() => setShowFilters(true)}
                className="w-full py-3 bg-white border border-stone-200 rounded-xl flex items-center justify-center gap-2 font-bold text-stone-700 shadow-sm"
              >
                <Filter size={18} /> Filters & Sort
              </button>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-200">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-stone-400" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">No pearls found</h3>
                <p className="text-stone-500">Try adjusting your search or filters to find what you're looking for.</p>
                <button 
                  onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                  className="mt-6 text-rose-500 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Bottom Search Section (Wireframe Feature) */}
            <div className="mt-20 bg-stone-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
               {/* Decorative Background Circles */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="font-serif text-3xl text-white mb-4">Didn't find what you were looking for?</h2>
                 <p className="text-stone-400 mb-8">
                   Our concierge team can help you source specific gems or design a custom piece.
                 </p>
                 <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Describe your dream piece..." 
                      className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-stone-500 outline-none focus:border-rose-500 transition-colors"
                    />
                    <button className="px-8 py-4 bg-rose-500 text-white font-bold rounded-xl hover:bg-rose-400 transition-colors">
                      Ask Us
                    </button>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}