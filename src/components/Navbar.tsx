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
  };
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-soft-black shadow-lg py-2' : 'bg-deep-blue/90 py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-display font-bold text-soft-white">
            <span className="text-bright-red">KICKING</span> <span className="text-accent-blue">NINJA</span>
          </h1>
        </Link>
          {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/about" className="nav-link font-medium">About Us</Link>
          <Link to="/instructors" className="nav-link font-medium">Our Instructors</Link>
          <Link to="/gallery" className="nav-link font-medium">Gallery</Link>
          <Link to="/shop" className="nav-link font-medium">Shop</Link>
          <Link to="/contact" className="btn-theme-primary">Join Now</Link>
        </div>

        {/* Mobile Navigation Toggle */}        <button 
          className="md:hidden text-soft-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-deep-blue">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link 
              to="/" 
              className="nav-link w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="nav-link w-full text-center py-2" 
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/instructors" 
              className="nav-link w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Our Instructors
            </Link>            <Link 
              to="/gallery" 
              className="nav-link w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/shop" 
              className="nav-link w-full text-center py-2" 
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link 
              to="/contact" 
              className="btn-theme-primary w-full text-center py-2" 
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
