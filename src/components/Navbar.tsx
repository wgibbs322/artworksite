import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`py-4 transition-all duration-300 ${scrolled ? 'navbar-fixed' : ''}`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Palette className="w-8 h-8 mr-2 text-amber-800" />
            <span className="text-2xl font-semibold tracking-wider text-amber-900">ArtVision</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className={`text-lg transition-colors duration-300 ${
                      location.pathname === link.path 
                        ? 'text-amber-800 font-medium' 
                        : 'text-neutral-700 hover:text-amber-800'
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="p-2 md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="container px-4 py-4 mx-auto">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className={`block text-lg py-2 transition-colors duration-300 ${
                      location.pathname === link.path 
                        ? 'text-amber-800 font-medium' 
                        : 'text-neutral-700 hover:text-amber-800'
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;