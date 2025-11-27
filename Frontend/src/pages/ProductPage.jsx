import React from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Truck, ShieldCheck, Droplets } from 'lucide-react';
import { products } from '../data/products.js';

const ProductPage = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div className="text-black text-center py-20">Product not found</div>;

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-gray-100 border border-gray-200 rounded-sm overflow-hidden p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover mix-blend-multiply"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-gray-100 aspect-w-1 aspect-h-1 border border-gray-200 hover:border-sky-500 cursor-pointer p-2">
                  <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="text-black">
            <p className="text-sky-500 font-bold uppercase tracking-wider text-sm mb-2">{product.category}</p>
            <h1 className="text-4xl font-black italic mb-4">{product.name}</h1>
            <p className="text-2xl font-mono mb-6 font-bold">₹{product.price} <span className="text-sm text-gray-500 font-sans font-normal ml-2">/ 100ml</span></p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description} Ideal for automotive customization. Can be used for special effect finishes over a base coat.
            </p>

            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-sky-500 transition-colors flex items-center justify-center mb-8 shadow-lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 pt-8">
              <div className="flex flex-col items-center text-center">
                <Droplets className="h-8 w-8 text-sky-500 mb-3" />
                <h4 className="font-bold text-sm uppercase">Mixing</h4>
                <p className="text-xs text-gray-500 mt-1">Mix with clear coat. 100ml treats approx 2-3 liters.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-8 w-8 text-sky-500 mb-3" />
                <h4 className="font-bold text-sm uppercase">Durability</h4>
                <p className="text-xs text-gray-500 mt-1">UV Resistant, Non-toxic, Rust-free Mica.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Truck className="h-8 w-8 text-sky-500 mb-3" />
                <h4 className="font-bold text-sm uppercase">Shipping</h4>
                <p className="text-xs text-gray-500 mt-1">Ships within 7 business days from Pune.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;