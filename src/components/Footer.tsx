import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {  return (
    <footer className="bg-deep-blue text-soft-white py-12">
      <div className="container-custom"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-display font-bold">
                <span className="text-bright-red">KICKING</span> NINJA
              </h2>
            </Link>
            <p className="text-metallic-gray mb-4">
              Train with world record holders and become the next legend in martial arts.
            </p>
            <div className="text-metallic-gray mb-4">
              <p className="mb-1"><strong>Address:</strong></p>
              <p className="mb-1">Kicking Ninja Academy</p>
              <p className="mb-1">123 Martial Arts Center</p>
              <p className="mb-1">Jhansi, Uttar Pradesh</p>
              <p className="mb-3">Contact: 7007330503</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-accent-blue hover:text-bright-red transition-colors duration-300">
                <FaFacebook size={24} aria-hidden="true" />
              </a>
              <a href="https://twitter.com" className="text-accent-blue hover:text-bright-red transition-colors duration-300">
                <FaTwitter size={24} aria-hidden="true" />
              </a>
              <a href="https://instagram.com" className="text-accent-blue hover:text-bright-red transition-colors duration-300">
                <FaInstagram size={24} aria-hidden="true" />
              </a>
              <a href="https://youtube.com" className="text-accent-blue hover:text-bright-red transition-colors duration-300">
                <FaYoutube size={24} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-soft-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-metallic-gray hover:text-bright-red transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-metallic-gray hover:text-bright-red transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/instructors" className="text-metallic-gray hover:text-bright-red transition-colors duration-300">Our Instructors</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-metallic-gray hover:text-bright-red transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-metallic-gray hover:text-bright-red transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Training Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-soft-white">Training Hours</h3>
            <ul className="space-y-2 text-metallic-gray">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>6:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-soft-white">Subscribe to Newsletter</h3>
            <p className="text-metallic-gray mb-4">
              Stay updated with our latest news and special offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-soft-black border border-metallic-gray rounded-md focus:outline-none focus:border-bright-red"
              />
              <button
                type="submit"
                className="bg-bright-red text-soft-white py-2 px-4 rounded-md font-medium hover:bg-red-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-metallic-gray">
          <p>&copy; {new Date().getFullYear()} Kicking Ninja. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
