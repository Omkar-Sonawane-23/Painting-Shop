// File: Frontend/src/pages/Services.jsx
import React from 'react';
import { Mail, Phone, Users, TrendingUp, Shield, Star, Award, Settings } from 'lucide-react'; // Changed Tool to Settings
import { Link } from 'react-router-dom';

const Services = () => {
    const serviceOptions = [
        { 
            icon: TrendingUp, 
            title: "Partner Program", 
            description: "For professional painting businesses, we offer a partner program with special conditions, volume discounts, and priority technical support.", 
            contact: "partner@kustomkoats.in" 
        },
        { 
            icon: Settings, // Using Settings as replacement for Tool
            title: "Distribution Trade", 
            description: "Wholesalers and specialized dealers can include Xtreme Kolorz pigments in their trade program. We can easily produce 500 liters per week.", 
            contact: "partner@kustomkoats.in" 
        },
        { 
            icon: Shield, 
            title: "Technical Support", 
            description: "Our technical team provides one-on-one support and advice on mixing ratios and application techniques. Your project success is our priority.", 
            contact: "info@kustomkoats.in" 
        },
    ];

    const testimonials = [
        { quote: "They have done work on a few of my cars now and the partnership throughout the build keeps me coming back. Looking forward to more work in the future.", name: "Doug D", title: "Customer", rating: 5 },
        { quote: "Couldn't be happier with my supercharged Vette, this thing is a ripper now! The paint quality is insane.", name: "David M", title: "Customer", rating: 5 },
        { quote: "The depth and finish of the Carbon Red is unmatched. Our clients demand the best, and Xtreme Kolorz delivers.", name: "Priya S.", title: "Master Painter, Pune", rating: 5 },
    ];

    const StarRating = ({ count }) => (
        <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < count ? 'fill-current' : 'fill-transparent'}`} />
            ))}
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-black italic uppercase mb-4">Professional Services & Support</h1>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        Dedicated programs for professional painters, resellers, and technical experts.
                    </p>
                </div>

                {/* Business Services Section */}
                <h2 className="text-4xl font-black italic text-black uppercase mb-10 border-b pb-4 border-gray-200">Business Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {serviceOptions.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow">
                            <service.icon className="h-10 w-10 text-sky-500 mb-4" />
                            <h3 className="text-2xl font-black text-black mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            
                            <div className="text-sm font-bold pt-4 border-t border-gray-100">
                                <p className="text-gray-500 mb-1">Contact for Details:</p>
                                <div className="flex items-center text-black">
                                    <Phone className="h-4 w-4 mr-2 text-sky-500" /> +91 777 50 777 52
                                </div>
                                <div className="flex items-center text-sky-500 mt-1">
                                    <Mail className="h-4 w-4 mr-2" /> {service.contact}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial Section - "What People Say About Us" */}
                <div className="text-center mb-10">
                    <Award className="h-8 w-8 text-red-500 mx-auto mb-3" />
                    <h2 className="text-4xl font-black italic text-black uppercase">What People Say About Us</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review, index) => (
                        <div key={index} className="bg-black text-white p-8 rounded-lg shadow-2xl relative border border-red-500/50">
                            <span className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-[100px] font-serif font-black text-red-500 opacity-20 leading-none">"</span>
                            <blockquote className="text-lg italic text-gray-300 leading-relaxed mb-6 z-10 relative">
                                "{review.quote}"
                            </blockquote>
                            <div className="font-black text-white text-xl mt-4">
                                {review.name}
                                <p className="text-sm text-red-500 font-normal">{review.title}</p>
                                <StarRating count={review.rating} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;