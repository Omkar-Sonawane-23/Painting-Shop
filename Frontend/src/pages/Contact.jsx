// Frontend/src/pages/Contact.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => (
  <div className="pt-24 pb-20 bg-white min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 uppercase tracking-wide">
            Get in Touch
          </span>
          <h1 className="mt-6 text-4xl font-black text-slate-900 uppercase tracking-tight">Contact Sales & Support</h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Have a question about mixing ratios, stock availability, or bulk pricing? Our technical team is ready to assist you.
          </p>
          
          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Phone className="text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Phone</h4>
                <p className="text-slate-600">+91 777 50 777 52</p>
                <p className="text-xs text-slate-400">Mon-Fri, 9am - 6pm IST</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center flex-shrink-0">
                <Mail className="text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Email</h4>
                <p className="text-slate-600">info@kustomkoats.in</p>
                <p className="text-xs text-slate-400">sales@kustomkoats.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-yellow-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Headquarters</h4>
                <p className="text-slate-600">Pune, Maharashtra 411048</p>
                <p className="text-xs text-slate-400">Near Trinity College, Yevlewadi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
          <h3 className="font-bold text-xl text-slate-900 mb-6">Send us a Message</h3>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">First Name</label>
                <input className="w-full p-3 bg-white border border-slate-300 rounded-md focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Last Name</label>
                <input className="w-full p-3 bg-white border border-slate-300 rounded-md focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
              <input className="w-full p-3 bg-white border border-slate-300 rounded-md focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Subject</label>
              <select className="w-full p-3 bg-white border border-slate-300 rounded-md focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none">
                <option>General Inquiry</option>
                <option>Wholesale / Distributor Application</option>
                <option>Order Status</option>
                <option>Technical Support</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Message</label>
              <textarea rows={4} className="w-full p-3 bg-white border border-slate-300 rounded-md focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-4 bg-slate-900 text-white font-bold text-sm uppercase rounded-md hover:bg-slate-800 transition-colors">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;