import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On home page, navbar is transparent until scroll. On other pages, it's always glass.
  const isHome = location.pathname === '/';
  const navBgClass = (isHome && !scrolled) ? 'bg-transparent py-6' : 'glass-nav py-4';
  const textColorClass = (isHome && !scrolled) ? 'text-white' : 'text-stone-800';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-spa-olive rounded-full flex items-center justify-center text-white">
            <Leaf className="w-6 h-6" />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-wider ${isHome && !scrolled ? 'text-white' : 'text-spa-olive'}`}>SPA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-spa-gold ${textColorClass}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="btn-primary text-sm py-2 px-6">Book Now</button>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${textColorClass}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spa-cream border-b border-spa-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-serif hover:text-spa-gold text-stone-800"
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full">Book Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
