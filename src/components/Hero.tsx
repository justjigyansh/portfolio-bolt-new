import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-fixed bg-center"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 mx-auto relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Jigyansh Kumar"
              className="w-48 h-48 rounded-full relative z-10 border-4 border-white shadow-xl object-cover"
            />
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400"
        >
          Jigyansh Kumar
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          I'm a <span ref={el} className="text-blue-400"></span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: <Github className="w-8 h-8" />, href: "https://github.com" },
            { icon: <Linkedin className="w-8 h-8" />, href: "https://linkedin.com" },
            { icon: <Mail className="w-8 h-8" />, href: "mailto:contact@example.com" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="transform hover:text-blue-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.a
            href="#about"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="inline-block text-white hover:text-blue-400 transition-colors"
          >
            <ChevronDown className="w-10 h-10" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}