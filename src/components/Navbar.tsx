import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Only check sections on home page
      if (location.pathname === '/') {
        const sections = ['hero', 'about', 'solutions', 'case-studies', 'pricing'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(sections[i]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleNavigation = (to: string, hash: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Accueil', to: '/', hash: '#hero', section: 'hero' },
    { name: 'À propos', to: '/', hash: '#about', section: 'about' },
    { name: 'Solutions', to: '/', hash: '#solutions', section: 'solutions' },
    { name: 'Clients', to: '/', hash: '#case-studies', section: 'case-studies' },
    { name: 'Tarifs', to: '/', hash: '#pricing', section: 'pricing' },
  ];

  const isLinkActive = (section: string) => {
    if (section === 'blog') {
      return location.pathname.startsWith('/blog');
    }
    return location.pathname === '/' && activeSection === section;
  };

  const NavLink = ({ link }: { link: typeof navLinks[0] }) => {
    if (link.hash && location.pathname !== '/') {
      return (
        <button
          onClick={() => handleNavigation(link.to, link.hash)}
          className={`transition-colors duration-300 ${
            isLinkActive(link.section)
              ? 'text-accent-500'
              : 'text-gray-300 hover:text-accent-500'
          }`}
        >
          {link.name}
        </button>
      );
    }
    if (link.hash) {
      return (
        <HashLink
          smooth
          to={link.hash}
          className={`transition-colors duration-300 ${
            isLinkActive(link.section)
              ? 'text-accent-500'
              : 'text-gray-300 hover:text-accent-500'
          }`}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </HashLink>
      );
    }
    return (
      <Link
        to={link.to}
        className={`transition-colors duration-300 ${
          isLinkActive(link.section)
            ? 'text-accent-500'
            : 'text-gray-300 hover:text-accent-500'
        }`}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </Link>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-300/80 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <img src="/orion-logo.svg" alt="Orion Solutions" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold text-white">
                Orion <span className="text-accent-500">Solutions</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link, index) => (
              <NavLink key={index} link={link} />
            ))}
            <Link
              to="/blog"
              className={`transition-colors duration-300 ${
                location.pathname.startsWith('/blog')
                  ? 'text-accent-500'
                  : 'text-gray-300 hover:text-accent-500'
              }`}
            >
              Blog
            </Link>
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center px-5 py-2 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative">Audit Gratuit</span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-dark-200 overflow-hidden"
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link, index) => (
            <div key={index} className="block py-2">
              <NavLink link={link} />
            </div>
          ))}
          <Link
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={`block py-2 transition-colors duration-300 ${
              location.pathname.startsWith('/blog')
                ? 'text-accent-500'
                : 'text-gray-300 hover:text-accent-500'
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="group relative inline-flex items-center w-full px-5 py-2 text-base font-medium rounded-md text-white overflow-hidden transition-all duration-300 mt-4"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 group-hover:scale-110"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="relative">Audit Gratuit</span>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;