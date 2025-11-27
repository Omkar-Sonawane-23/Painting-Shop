import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

const Home = ({ onAddToCart }) => {
  // Get featured products
  const featuredProducts = products.filter(p => p.tag === 'Best Seller' || p.tag === 'New').slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section - Keeping dark overlay for text contrast on image, but controls are light */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Placeholder for Video Background */}
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920" 
          alt="Color shifting car" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <span className="text-sky-400 font-bold tracking-[0.2em] uppercase mb-4 block bg-black/50 w-fit px-2 py-1 backdrop-blur-sm">
                Black Friday Live
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight italic drop-shadow-lg">
                FIND YOUR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">
                  OEM COLOR
                </span>
              </h1>
              <p className="text-white text-lg mb-8 max-w-lg leading-relaxed drop-shadow-md font-medium">
                Showcasing the finest automotive grade pearls. Non-toxic, inert, and rust-free mica-based pearls for the ultimate customization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop" className="bg-sky-500 text-white font-bold py-4 px-8 rounded-sm hover:bg-sky-600 transition-all uppercase tracking-widest text-center shadow-lg hover:shadow-sky-500/30">
                  Shop All Colors
                </Link>
                <Link to="/contact" className="bg-white text-black font-bold py-4 px-8 rounded-sm hover:bg-gray-100 transition-all uppercase tracking-widest text-center shadow-lg">
                  Find Installer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-black text-black mb-12 italic uppercase text-center">
          Explore Our <span className="text-sky-500">Series</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Solid Pearls', 'Chroma Pearls', 'Carbon Pearls'].map((cat, idx) => (
            <div key={idx} className="relative h-80 group cursor-pointer overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={`https://images.unsplash.com/photo-${idx === 0 ? '1503376763036-066120622c74' : idx === 1 ? '1566008885218-90abf9200ddb' : '1542282088-fe8426682b8f'}?auto=format&fit=crop&w=600`}
                alt={cat}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white uppercase italic">{cat}</h3>
                <Link to="/shop" className="text-sky-400 text-sm font-bold uppercase tracking-wider mt-2 flex items-center hover:text-white transition-colors">
                  View Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-black italic uppercase">Trending Now</h2>
              <p className="text-gray-500 mt-2">The hottest colors this season.</p>
            </div>
            <Link to="/shop" className="hidden md:flex items-center text-black font-bold hover:text-sky-500 uppercase tracking-wider text-sm transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/shop" className="inline-flex items-center text-black font-bold hover:text-sky-500 uppercase tracking-wider text-sm transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial / Trust */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center bg-white">
        <div className="flex justify-center mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 text-sky-500 fill-current" />)}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 uppercase tracking-tight">
          "The best automotive pearls in India. The finish is unmatched."
        </h2>
        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
          - Rahul S., Custom Shop Owner, Pune
        </p>
      </div>
    </div>
  );
};

export default Home;