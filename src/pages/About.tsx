import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-spa-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000" 
                alt="About Spa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-spa-olive rounded-full flex items-center justify-center p-10 text-white text-center shadow-xl hidden md:flex">
              <p className="font-serif italic text-xl">"True wellness begins when the mind and body are in perfect symphony."</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-spa-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Heritage</span>
            <h1 className="text-5xl md:text-6xl mb-8 leading-tight">A Sanctuary of Ancient Indian Wisdom</h1>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Spa was born from a desire to preserve and share the profound healing traditions of India. Nestled in the heart of serenity, we offer a holistic approach to wellness that has been refined over thousands of years.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Our journey began in a small village in Kerala, where the secrets of Ayurveda have been passed down through generations. Today, we bring that same authenticity to the modern world, creating spaces where time slows down and healing begins.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-4xl font-serif text-spa-olive mb-1">15+</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-spa-olive mb-1">50k+</h4>
                <p className="text-xs uppercase tracking-widest text-stone-400 font-bold">Happy Souls</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Our Philosophy</h2>
            <div className="w-20 h-1 bg-spa-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-spa-gold text-5xl mb-6 font-serif italic">01.</div>
              <h3 className="text-2xl mb-4">Authenticity</h3>
              <p className="text-stone-500 text-sm leading-relaxed">We strictly adhere to traditional Ayurvedic principles, using only natural, ethically sourced ingredients.</p>
            </div>
            <div className="text-center">
              <div className="text-spa-gold text-5xl mb-6 font-serif italic">02.</div>
              <h3 className="text-2xl mb-4">Holistic Care</h3>
              <p className="text-stone-500 text-sm leading-relaxed">We treat the individual as a whole, addressing physical, mental, and spiritual well-being.</p>
            </div>
            <div className="text-center">
              <div className="text-spa-gold text-5xl mb-6 font-serif italic">03.</div>
              <h3 className="text-2xl mb-4">Serenity</h3>
              <p className="text-stone-500 text-sm leading-relaxed">Our environments are meticulously designed to provide an immediate sense of peace and escape.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
