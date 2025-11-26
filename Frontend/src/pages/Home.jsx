import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { CATEGORIES } from '../data/products';

const Home = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCategoryClick = (id) => {
    navigate('/shop'); // In a real app, pass filter state: navigate(`/shop?category=${id}`);
  };

  // FAQ Data from Brochure Page 27
  const faqs = [
    { q: "Do you offer wholesale rates?", a: "Yes, depending on your needs, we offer jobber, distributor and wholesale discounts. Please contact us for more information." },
    { q: "Can I mix 2 colors to create a custom color?", a: "Absolutely. However, please keep in mind mixing two special effect or interference pearls can cause the colors to cancel out. We suggest small scale testing first." },
    { q: "What is a special effect pearl?", a: "Special Effect, or Optically Variable pearls change color and hue based on viewing angle, creating vivid metallic effects." },
    { q: "What is your MOQ or minimum order quantity?", a: "Our MOQ is only 100ml!" },
  ];

  return (
    <div className="bg-[#FAF9F6] text-zinc-900 font-sans">
      
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative bg-blue-50/50 border border-zinc-300 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          {/* Subtle hatched pattern background overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-800 mb-6 leading-tight tracking-tight font-handwriting-style">
              Showcasing The Finest Automotive Grade Colors
            </h1>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Engineered for depth, durability, and head-turning brilliance. 
              Our pearls are non-toxic, inert, and compatible with all base coats.
            </p>
            <Link 
              to="/shop" 
              className="inline-block px-8 py-3 bg-rose-300 hover:bg-rose-400 text-zinc-900 font-bold rounded-lg border-2 border-zinc-800 shadow-[4px_4px_0px_0px_rgba(39,39,42,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(39,39,42,1)] transition-all"
            >
              Explore Pearls
            </Link>
            
            {/* Carousel Dots Placeholder */}
            <div className="flex justify-center gap-2 mt-12">
              <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
              <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
              <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Category Grid (Rectangles layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="bg-red-50 border-2 border-zinc-800 rounded-xl h-32 md:h-40 flex items-center justify-center cursor-pointer hover:bg-red-100 transition-colors shadow-[4px_4px_0px_0px_rgba(254,202,202,1)] group relative overflow-hidden"
            >
              {/* Hatch pattern overlay */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
              <h3 className="relative z-10 text-lg md:text-xl font-black text-zinc-800 uppercase tracking-wide text-center px-4 group-hover:scale-105 transition-transform">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Why Xtreme Kolorz? */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-stone-100 border-2 border-zinc-800 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-black text-zinc-800 mb-6">Why Xtreme Kolorz?</h2>
          <div className="space-y-4 text-zinc-700 leading-relaxed">
            <p>
              Pearls are very fine inorganic and organic tinters that come in an almost endless array of metallic, 
              interference, and pearlescent colors. They can be used for special effect finishes, as long as they are cleared over.
            </p>
            <p>
              Pearls are usually mica or silica based pearls which are color additives that are coated with metal oxides 
              and are non-toxic and inert. Since they contain no actual metal like some other colors, they will never rust or tarnish.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Features & Image Split */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Features List */}
          <div className="flex-1 py-4 flex flex-col justify-center">
            <ul className="space-y-6 text-zinc-700 font-medium">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-zinc-800 rounded-full flex-shrink-0"></span>
                High quality, non-metallic pearls (no rust/tarnish)
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-zinc-800 rounded-full flex-shrink-0"></span>
                Wide range of colors & effects
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-zinc-800 rounded-full flex-shrink-0"></span>
                Suitable for automotive + other industries
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 bg-zinc-800 rounded-full flex-shrink-0"></span>
                Strong customer support & technical help
              </li>
            </ul>
          </div>
          
          {/* Image Placeholder Box */}
          <div className="w-full md:w-1/3 aspect-square md:aspect-auto bg-blue-100 border-2 border-zinc-800 rounded-2xl flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
             <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                alt="Car Paint Detail"
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-110 transition-transform duration-700"
             />
             <span className="relative z-10 font-black text-2xl text-zinc-800 bg-white/80 px-4 py-2 rounded shadow-lg">Image</span>
          </div>
        </div>
      </div>

      {/* 5. Industries Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-black text-zinc-800 mb-6 pl-2">Industries</h2>
        <div className="bg-blue-50 border-2 border-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>
           <div className="relative z-10">
             <h3 className="text-xl font-bold text-yellow-600 mb-2">Automotive & Beyond</h3>
             <p className="text-zinc-600 max-w-2xl">
               Proudly serving countless industries in dozens of cities all over India. 
               From large scale industrial OEM's to individual custom shops.
             </p>
           </div>
        </div>
      </div>

      {/* 6. Info Columns (Brochure Data) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Order Products */}
          <div className="p-6 bg-white border border-zinc-200 rounded-xl">
            <h3 className="text-lg font-black text-zinc-800 mb-4 border-b-2 border-rose-400 inline-block pb-1">Order Products</h3>
            <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
              As a professional you can order all Xtreme Kolorz products directly from the manufacturer, by mail or by phone. Request the current price list now.
            </p>
            <div className="text-sm">
              <p className="font-bold text-zinc-800">Sales Department</p>
              <p className="text-zinc-600">+91 777 50 777 52</p>
              <p className="text-zinc-600">sales@kustomkoats.in</p>
            </div>
          </div>

          {/* Partner Program */}
          <div className="p-6 bg-white border border-zinc-200 rounded-xl">
            <h3 className="text-lg font-black text-zinc-800 mb-4 border-b-2 border-yellow-400 inline-block pb-1">Partner Program</h3>
            <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
              For painting businesses, Kustom Koats offers a partner program with special conditions and further services. Request further information now.
            </p>
            <div className="text-sm">
              <p className="font-bold text-zinc-800">Business / PCA</p>
              <p className="text-zinc-600">+91 777 50 777 52</p>
              <p className="text-zinc-600">partner@kustomkoats.in</p>
            </div>
          </div>

          {/* Distribution Trade */}
          <div className="p-6 bg-white border border-zinc-200 rounded-xl">
            <h3 className="text-lg font-black text-zinc-800 mb-4 border-b-2 border-zinc-800 inline-block pb-1">Distribution Trade</h3>
            <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
              Wholesalers and specialized dealers have the possibility to include Xtreme Kolorz products in their trade program. Request further information now.
            </p>
            <div className="text-sm">
              <p className="font-bold text-zinc-800">Business / PCA</p>
              <p className="text-zinc-600">+91 777 50 777 52</p>
              <p className="text-zinc-600">partner@kustomkoats.in</p>
            </div>
          </div>

        </div>
      </div>

      {/* 7. Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white border-2 border-zinc-800 rounded-2xl p-8 text-center shadow-[4px_4px_0px_0px_rgba(39,39,42,1)]">
           <h3 className="text-lg font-bold text-zinc-700 mb-4">Didn't get what you are looking for?</h3>
           <div className="flex gap-2 max-w-md mx-auto">
             <input 
               type="text" 
               placeholder="Search Here..." 
               className="flex-1 bg-zinc-100 border-2 border-zinc-300 rounded-lg px-4 py-2 outline-none focus:border-zinc-800 transition-colors"
             />
             <button className="bg-rose-300 hover:bg-rose-400 text-zinc-900 font-bold px-6 py-2 rounded-lg border-2 border-zinc-800 transition-all">
               Search
             </button>
           </div>
        </div>
      </div>

      {/* 8. FAQ's */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-2xl font-black text-zinc-800 mb-6 pl-2">FAQ's</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-red-50/50 border border-zinc-300 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-red-50 transition-colors"
              >
                <span className="font-bold text-zinc-700 text-sm md:text-base">{faq.q}</span>
                {openFaq === idx ? <ChevronUp size={20} className="text-zinc-500"/> : <ChevronDown size={20} className="text-zinc-500"/>}
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-4 text-zinc-600 text-sm leading-relaxed border-t border-red-100 bg-white/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 9. Contact Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="border-2 border-zinc-800 rounded-3xl p-8 md:p-12 bg-white relative">
          <h2 className="text-2xl font-black text-center text-zinc-800 mb-8 font-handwriting-style">Talk to our Sales Team</h2>
          
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
               <label className="w-24 font-bold text-zinc-700 font-handwriting-style text-lg">Name:</label>
               <input type="text" placeholder="Enter Your Name..." className="flex-1 bg-zinc-50 border-2 border-zinc-300 rounded-full px-6 py-3 outline-none focus:border-zinc-800 transition-colors" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
               <label className="w-24 font-bold text-zinc-700 font-handwriting-style text-lg">Phone No:</label>
               <input type="text" placeholder="Enter Your Phone No..." className="flex-1 bg-zinc-50 border-2 border-zinc-300 rounded-full px-6 py-3 outline-none focus:border-zinc-800 transition-colors" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
               <label className="w-24 font-bold text-zinc-700 font-handwriting-style text-lg">Email:</label>
               <input type="email" placeholder="Enter Your Email..." className="flex-1 bg-zinc-50 border-2 border-zinc-300 rounded-full px-6 py-3 outline-none focus:border-zinc-800 transition-colors" />
            </div>

            <div className="flex flex-col md:flex-row gap-2">
               <label className="w-24 font-bold text-zinc-700 font-handwriting-style text-lg pt-2">Message:</label>
               <textarea rows={4} placeholder="Enter Your Message..." className="flex-1 bg-zinc-50 border-2 border-zinc-300 rounded-2xl px-6 py-3 outline-none focus:border-zinc-800 transition-colors resize-none"></textarea>
            </div>

            <div className="text-right pt-4">
               <button className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 ml-auto">
                 Submit Request <Send size={16}/>
               </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Home;