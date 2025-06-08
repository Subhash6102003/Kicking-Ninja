import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-soft-black shadow-lg py-2' : 'bg-deep-blue/90 py-3 xs:py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl xs:text-2xl md:text-3xl font-display font-bold text-soft-white">
            <span className="text-bright-red">KICKING</span> <span className="text-accent-blue">NINJA</span>
          </h1>
        </Link>
          
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/about" className="nav-link font-medium">About Us</Link>
          <Link to="/instructors" className="nav-link font-medium">Our Instructors</Link>
          <Link to="/gallery" className="nav-link font-medium">Gallery</Link>
          <Link to="/shop" className="nav-link font-medium">Shop</Link>
          <Link to="/contact" className="btn-theme-primary px-4 py-2 text-sm">Join Now</Link>
        </div>

        {/* Mobile Navigation Toggle */}        
        <button 
          className="lg:hidden text-soft-white text-xl xs:text-2xl focus:outline-none hover:text-accent-blue transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>        {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-deep-blue border-t border-bright-red/30 shadow-lg">
          <div className="flex flex-col items-center space-y-1 py-4">
            <Link 
              to="/" 
              className="nav-link w-full text-center py-3 hover:bg-soft-black/50 transition-colors duration-300" 
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="nav-link w-full text-center py-3 hover:bg-soft-black/50 transition-colors duration-300" 
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/instructors" 
              className="nav-link w-full text-center py-3 hover:bg-soft-black/50 transition-colors duration-300" 
              onClick={toggleMenu}
            >
              Our Instructors
            </Link>            
            <Link 
              to="/gallery" 
              className="nav-link w-full text-center py-3 hover:bg-soft-black/50 transition-colors duration-300" 
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/shop" 
              className="nav-link w-full text-center py-3 hover:bg-soft-black/50 transition-colors duration-300" 
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/contact" 
              className="btn-theme-primary w-3/4 text-center py-3 mt-2 text-sm" 
              onClick={toggleMenu}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
