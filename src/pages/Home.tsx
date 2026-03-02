import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920" 
            alt="Spa background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-sm mb-6 font-medium"
          >
            Welcome to Tranquility
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Rejuvenate Your <br /> 
            <span className="italic">Body & Soul</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/services" className="btn-primary bg-white text-spa-olive hover:bg-spa-cream flex items-center justify-center">Explore Treatments</Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-spa-olive flex items-center justify-center">Our Story</Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-px h-12 bg-white/30 mx-auto" />
          <span className="text-[10px] uppercase tracking-widest mt-2 block">Scroll</span>
        </motion.div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Sacred Treatments</h2>
            <div className="w-20 h-1 bg-spa-gold mx-auto mb-6" />
            <p className="max-w-2xl mx-auto text-stone-500 font-light">
              Experience the ancient wisdom of Ayurveda blended with modern luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl mb-2 group-hover:text-spa-gold transition-colors">{service.title}</h3>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/services" className="btn-outline inline-block">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
