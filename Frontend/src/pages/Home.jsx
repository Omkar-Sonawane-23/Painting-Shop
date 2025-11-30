// File: Frontend/src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Droplets, Car, Zap, PaintBucket } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx'; 
import { products } from '../data/products.js'; 

const Home = ({ onAddToCart }) => {
  // Get featured products (Best Sellers and New) - Limit to 3 for the 3+1 layout
  const featuredProducts = products.filter(p => p.tag === 'Best Seller' || p.tag === 'New').slice(0, 3);

  // Define all 6 categories with specific images and descriptions for the Home page grid
  const allCategories = [
    { name: 'Solid Pearls', image: 'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=600', desc: 'Single & Metallic Tones' },
    { name: 'Interference Pearls', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600', desc: 'Iridescent Ghost Effects' },
    { name: 'Carbon Pearls', image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=600', desc: 'Highly Concentrated Metallics' },
    { name: 'OEM+ Pearls', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600', desc: 'Subtle Holographic Factory Looks' },
    { name: 'Special Effect Pearls', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600', desc: 'Optically Variable Color Shift' },
    { name: 'Chroma Pearls', image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&q=80&w=600', desc: 'Vivid 5-6 Color Flips' },
  ];

  // Define key features for the feature grid
  const features = [
    { icon: Droplets, title: 'Micro-Fine Pigments', desc: 'Superior dispersion for flawless flow and application.', color: 'text-sky-500' },
    { icon: Car, title: 'Automotive Grade', desc: 'Tested and proven for long-lasting, deep color on vehicles.', color: 'text-black' },
    { icon: Zap, title: 'Vivid Color Shift', desc: 'Chroma pearls offer extreme, multi-dimensional optical variability.', color: 'text-red-500' },
    { icon: PaintBucket, title: 'Mix Ratio Ready', desc: 'Optimized for mixing with all major clear coat systems.', color: 'text-emerald-500' },
  ];
  
  // Gallery Images (8 placeholders)
  const galleryImages = [
    'https://images.unsplash.com/photo-1596700812970-205167664f3d?auto=format&fit=crop&q=80&w=400&h=300', // Red hot rod
    'https://images.unsplash.com/photo-1596700812970-205167664f3d?auto=format&fit=crop&q=80&w=400&h=600', // Tall image (custom paint detail)
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400&h=300', // Blue metallic car
    'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=400&h=600', // Purple/black shift
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=400&h=300',
    'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=400&h=600',
    'https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=400&h=300',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400&h=600',
  ].slice(0, 8); // Ensure exactly 8 images

  return (
    <div className="bg-white">
      {/* Hero Section: Reduced height to ensure content fits on screen, especially on mobile */}
      <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden"> 
        {/* Using a high-impact, dark image related to custom car paint */}
        <img 
          src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=1920&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Custom painted car finish" 
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1920x1080/0f172a/94a3b8?text=XTREME+KOLORZ"; }}
        />
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <span className="text-white font-bold tracking-[0.2em] uppercase mb-4 block">
                Unlock the Ultimate Finish
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-none italic drop-shadow-xl">
                XTREME <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                  PEARL PIGMENTS
                </span>
              </h1>
              <p className="text-gray-200 text-lg sm:text-xl mb-10 max-w-lg leading-relaxed font-medium">
                Engineered for maximum depth, durability, and mesmerizing color shift effects. Start your custom project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="bg-sky-500 text-white font-black py-4 px-10 rounded-sm hover:bg-sky-600 transition-all uppercase tracking-widest text-lg shadow-2xl shadow-sky-500/30">
                  Shop All Colors
                </Link>
                <Link to="/contact" className="bg-black text-white border border-white font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest text-lg">
                  Get Technical Advice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <feature.icon className={`h-8 w-8 ${feature.color} mr-4 flex-shrink-0`} strokeWidth={2.5}/>
              <div>
                <h3 className="text-lg font-black text-black mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- NEW: Work We've Done / Project Gallery --- */}
      <section className="bg-gray-100 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">Projects</p>
            <h2 className="text-4xl font-black text-black italic uppercase mb-12">Work We've Done</h2>

            {/* Responsive Masonry/Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {galleryImages.map((src, index) => (
                    <div key={index} className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer ${
                        // Apply classes to make certain images taller or wider
                        (index % 4 === 0) ? 'row-span-2' : '' // First in every 4 is tall
                    }`}>
                        <img 
                            src={src} 
                            alt={`Project showcase ${index + 1}`} 
                            // Use different heights to simulate a masonry effect
                            className={`w-full object-cover ${index % 4 === 0 ? 'h-full' : (index % 2 === 0 ? 'h-64' : 'h-48')}`} 
                            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x${index % 4 === 0 ? 600 : 300}/e5e7eb/4b5563?text=Finished+Car+${index + 1}`; }}
                        />
                    </div>
                ))}
            </div>
            
            <Link to="/services" className="inline-flex items-center text-sky-500 font-black hover:text-black uppercase tracking-wider text-base mt-10">
                See More Customer Reviews and Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
        </div>
      </section>


      {/* 6 Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <h2 className="text-4xl font-black text-black italic uppercase text-center mb-4">
          Explore Our <span className="text-sky-500">6 Pearl Series</span>
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
          From solid metallics to extreme color-shifting chromas, find the perfect pearl for your custom paint job.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {allCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to="/shop" 
              state={{ category: cat.name }} // Deep Link: Pass category name to shop page
              className="relative h-64 md:h-72 group cursor-pointer overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <img 
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x600/0f172a/94a3b8?text=${cat.name.replace(' ', '+')}`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-black text-white uppercase italic">{cat.name}</h3>
                <p className="text-sm text-sky-400 font-bold mb-2">{cat.desc}</p>
                <div className="text-white text-xs font-bold uppercase tracking-wider mt-2 flex items-center hover:text-sky-400 transition-colors">
                  View Collection <ArrowRight className="ml-2 h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* Featured Products Grid - Trending Now */}
      <div className="bg-gray-100 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-black italic uppercase">Trending Pigments</h2>
              <p className="text-gray-600 mt-2 text-lg">The finest collection of color-shifting and solid pearls.</p>
            </div>
            {/* Removed redundant "View All Products" link here */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Show only 3 products */}
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
            
            {/* 4th Slot: See More Button */}
            <Link 
              to="/shop" 
              className="group bg-black rounded-lg overflow-hidden border-2 border-transparent hover:border-sky-500 transition-all duration-300 shadow-md hover:shadow-xl p-4 flex flex-col items-center justify-center text-center h-full min-h-[300px] sm:min-h-0"
            >
              <h3 className="text-white text-2xl font-black italic mb-2 group-hover:text-sky-500 transition-colors">
                View All {products.length}+ Colors
              </h3>
              <p className="text-gray-400 mb-4">
                Explore our full catalogue including Interference and Chroma shifts.
              </p>
              <ArrowRight className="h-8 w-8 text-sky-500 group-hover:text-white group-hover:bg-sky-500 p-1 rounded-full transition-all" />
            </Link>

          </div>
          
          {/* Removed the mobile-only button as it's now integrated into the grid */}

        </div>
      </div>

      {/* Call to Action: Chroma Series Focus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-black text-white p-10 md:p-20 rounded-lg shadow-2xl shadow-black/50 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-500 font-bold tracking-[0.2em] uppercase mb-3 block">
              The Exotic Finish
            </span>
            <h2 className="text-4xl md:text-5xl font-black italic mb-6 leading-tight">
              Unleash the <span className="text-sky-500">Chroma Flip</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our Chroma Pearls are optically variable pigments that show 5-6 distinct colors depending on the angle and light source—the ultimate statement for show cars.
            </p>
            <Link to="/shop" className="bg-sky-500 text-white font-black py-3 px-8 rounded-sm hover:bg-sky-600 transition-all uppercase tracking-widest text-base shadow-lg shadow-sky-500/30">
              Explore Chroma Series
            </Link>
          </div>
          <div className="aspect-video bg-gradient-to-br from-indigo-800 via-purple-700 to-red-500 rounded-lg shadow-inner flex items-center justify-center">
            {/* Visual placeholder for the color shift effect */}
            <p className="text-2xl font-black italic text-white/50">CHROMA PREVIEW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;