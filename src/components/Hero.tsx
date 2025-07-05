import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Zap, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 relative z-20 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-dark-100/50 backdrop-blur-sm text-accent-500 text-sm font-medium mb-4">
              L'IA au service de votre croissance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl"
          >
            Orion Solutions : 
            <span className="block md:inline text-gradient"> Automatisez </span>
            votre entreprise avec l'IA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl"
          >
            Des solutions IA sur mesure pour des performances exceptionnelles.
            Transformez vos processus et boostez votre productivité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative flex items-center">
                <Zap className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Demander un audit gratuit
              </span>
            </Link>
            <HashLink
              smooth
              to="/#solutions"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300 backdrop-blur-sm bg-dark-200/50"
            >
              <span className="relative flex items-center">
                <Bot className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Voir nos services
              </span>
            </HashLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-gray-400 mb-2">Découvrez notre approche</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-accent-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;