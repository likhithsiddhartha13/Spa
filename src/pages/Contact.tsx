import React from 'react';
import { motion } from 'motion/react';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-spa-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Connect With Us</span>
          <h1 className="text-5xl md:text-6xl mb-6">Start Your Journey</h1>
          <div className="w-20 h-1 bg-spa-gold mx-auto" />
        </div>

        <div className="bg-spa-cream rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-20">
            <h2 className="text-4xl mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Full Name</label>
                  <input type="text" className="w-full bg-white border-b border-stone-200 py-3 focus:border-spa-gold outline-none transition-colors" placeholder="Arjun Kapoor" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Email Address</label>
                  <input type="email" className="w-full bg-white border-b border-stone-200 py-3 focus:border-spa-gold outline-none transition-colors" placeholder="arjun@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Treatment Interest</label>
                <select className="w-full bg-white border-b border-stone-200 py-3 focus:border-spa-gold outline-none transition-colors">
                  <option>Select a service</option>
                  {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-stone-400">Your Message</label>
                <textarea className="w-full bg-white border-b border-stone-200 py-3 focus:border-spa-gold outline-none transition-colors h-32 resize-none" placeholder="Tell us about your wellness goals..." />
              </div>
              <button className="btn-primary w-full mt-4">Send Message</button>
            </form>
          </div>
          
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" 
              alt="Contact us" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-spa-olive/40 backdrop-blur-[2px] flex items-center justify-center p-12">
              <div className="bg-white/90 p-10 rounded-3xl shadow-2xl max-w-sm w-full">
                <h4 className="text-2xl mb-6 text-spa-olive">Opening Hours</h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Mon - Fri</span>
                    <span className="font-medium">08:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="text-stone-500">Saturday</span>
                    <span className="font-medium">09:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Sunday</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-spa-olive/10 flex items-center justify-center text-spa-olive">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-stone-500 italic">Please book at least 24 hours in advance for specialized Ayurvedic treatments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex items-center gap-6 p-8 bg-spa-cream rounded-3xl">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-spa-olive shadow-sm">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-400 uppercase tracking-widest text-[10px]">Call Us</h4>
              <p className="font-serif text-lg">+91 1800 123 4567</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 bg-spa-cream rounded-3xl">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-spa-olive shadow-sm">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-400 uppercase tracking-widest text-[10px]">Email Us</h4>
              <p className="font-serif text-lg">hello@anandaveda.com</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-8 bg-spa-cream rounded-3xl">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-spa-olive shadow-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-400 uppercase tracking-widest text-[10px]">Main HQ</h4>
              <p className="font-serif text-lg">New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
