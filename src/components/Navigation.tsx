import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <motion.a
            href="#"
            className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JK
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } hover:text-blue-500 transition-colors`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-gray-900' : 'text-white'}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-lg shadow-xl mt-2 py-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-2 text-gray-900 hover:bg-gray-100"
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}