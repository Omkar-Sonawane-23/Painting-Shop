// File: Frontend/src/pages/About.jsx
import React from 'react';
import { Car, MapPin, Factory, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    const infoBlocks = [
        { icon: Car, title: "Automotive Origin", description: "Kustom Koats was born from a desire to offer superior, high-quality finishes to the customization market.", color: "text-sky-500" },
        { icon: Zap, title: "No Rust, No Tarnish", description: "Our pigments are mica/silica based, non-toxic, and inert—containing no actual metal, ensuring zero rust or tarnish.", color: "text-red-500" },
        { icon: Factory, title: "Made in India", description: "Headquartered and operating our manufacturing facility in Pune, Maharashtra, serving clients across the country.", color: "text-emerald-500" },
        { icon: ShieldCheck, title: "Technical Focus", description: "A strong focus on technical support, providing advice on mixing ratios, application, and custom needs.", color: "text-black" },
    ];

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Mission Block (Mimicking user's desired layout) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch bg-emerald-50/70 border border-emerald-200/50 rounded-xl shadow-xl overflow-hidden mb-20">
                    
                    {/* Left Side: Image/Video Placeholder */}
                    <div className="relative h-64 md:h-full min-h-96 bg-black flex items-center justify-center">
                        <img 
                            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=600" 
                            alt="Custom car being painted" 
                            className="w-full h-full object-cover object-center opacity-70"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600/e5e7eb/4b5563?text=Product+Demo+Video"; }}
                        />
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                <ArrowRight className="w-8 h-8 text-white ml-1 fill-white" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Mission Text */}
                    <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                         <span className="text-black font-black uppercase tracking-widest text-sm">
                            About Us
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-red-600 italic leading-tight">
                            Striving For Excellence <br/>is Our Mission
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At Xtreme Kolorz, our core focus is to provide superior quality pigments. We believe the customer experience is just as crucial as the quality of the end product. We strive to be your one-stop shop for all your custom paint needs.
                        </p>
                        <p className="text-md text-gray-600">
                            We are committed to investing in the newest tools and machinery to pursue our passion for excellence, creating next-level builds across the country.
                        </p>
                        <Link to="/services" className="bg-red-600 text-white font-black py-3 px-8 rounded-sm hover:bg-red-700 transition-colors uppercase tracking-widest text-base w-fit shadow-lg">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Key Pillars Grid */}
                <h2 className="text-4xl font-black text-black italic uppercase text-center mb-10 pt-10">Our Core Principles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoBlocks.map((block, index) => (
                        <div key={index} className="flex items-start p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                            <block.icon className={`h-8 w-8 ${block.color} mr-4 flex-shrink-0`} />
                            <div>
                                <h3 className="text-lg font-black text-black mb-1">{block.title}</h3>
                                <p className="text-sm text-gray-500">{block.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default About;