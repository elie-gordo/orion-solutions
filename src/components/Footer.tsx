import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <HashLink to="/#hero" className="flex items-center mb-6">
              <img src="/orion-logo.svg" alt="Orion Solutions" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-white">
                Orion <span className="text-accent-500">Solutions</span>
              </span>
            </HashLink>
            <p className="text-gray-400 mb-6 max-w-md">
              Orion Solutions est spécialisée dans l'automatisation des processus d'entreprise grâce à l'intelligence artificielle. Notre mission est de vous aider à gagner en efficacité et en productivité.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <HashLink smooth to="/#hero" className="text-gray-400 hover:text-accent-500 transition-colors">Accueil</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#about" className="text-gray-400 hover:text-accent-500 transition-colors">À propos</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#solutions" className="text-gray-400 hover:text-accent-500 transition-colors">Solutions</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#case-studies" className="text-gray-400 hover:text-accent-500 transition-colors">Clients</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#pricing" className="text-gray-400 hover:text-accent-500 transition-colors">Tarifs</HashLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mr-3 mt-0.5" />
                <span className="text-gray-400">42 Rue de l'Innovation, 75001 Paris, France</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-3" />
                <a href="mailto:contact@orion-solutions.fr" className="text-gray-400 hover:text-accent-500 transition-colors">
                  contact@orion-solutions.fr
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-500 mr-3" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-accent-500 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Orion Solutions. Tous droits réservés.
            </p>
            <ul className="flex space-x-8">
              <li>
                <Link to="/mentions-legales" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/conditions-utilisation" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;