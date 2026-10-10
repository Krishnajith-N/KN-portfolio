import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'WORK', path: '/work' },
    { name: 'CONTACT', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-black/85 backdrop-blur-xl border-b border-brand-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-2xl font-bold font-display tracking-tight text-brand-offwhite hover:text-brand-orange transition-colors duration-300"
          data-cursor="HOME"
        >
          <span>{siteConfig.logoText}</span>
          <span className="w-2 h-2 rounded-full bg-brand-orange group-hover:scale-150 transition-transform duration-300" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-medium tracking-widest">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive ? 'text-brand-orange font-bold' : 'text-brand-grey hover:text-brand-offwhite'
                }`}
                data-cursor={link.name}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Availability Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-charcoal/90 border border-brand-white/10 text-[11px] font-mono tracking-wider text-brand-offwhite">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-brand-grey">{siteConfig.availabilityText}</span>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-brand-offwhite hover:text-brand-orange focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-0 left-0 w-full bg-brand-black/98 backdrop-blur-2xl z-40 flex flex-col justify-between px-8 py-24"
          >
            <div className="flex flex-col gap-8">
              <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                // NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 + 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`text-4xl font-display font-bold flex items-center justify-between py-2 border-b border-brand-white/10 ${
                      location.pathname === link.path ? 'text-brand-orange' : 'text-brand-offwhite'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={24} className="opacity-60" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-8 border-t border-brand-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-grey">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {siteConfig.availabilityText}
              </div>
              <p className="text-xs text-brand-grey font-mono">
                {siteConfig.role}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
