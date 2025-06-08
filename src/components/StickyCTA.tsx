import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface StickyCTAProps {
  threshold?: number; // Number of pixels to scroll before showing
}

const StickyCTA: React.FC<StickyCTAProps> = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasExited, setHasExited] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold && !hasExited) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, hasExited]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setHasExited(true);
    
    // Reset after 30 minutes
    setTimeout(() => {
      setHasExited(false);
    }, 30 * 60 * 1000);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 right-6 z-50 md:right-10 md:bottom-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="relative flex flex-col gap-2">
            {/* Main CTA button */}
            <motion.div
              className="bg-bright-red rounded-lg shadow-lg p-4 flex items-center justify-center gap-2 w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="text-soft-white font-bold flex items-center gap-2"
              >
                <span className="text-soft-white">Book Free Trial</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            
            {/* Call button */}
            <motion.a 
              href="tel:7007330503" 
              className="bg-accent-blue/90 backdrop-blur-sm rounded-lg shadow-lg p-3 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-soft-white">Call Now</span>
            </motion.a>
            
            {/* Close button */}
            <motion.button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 bg-soft-black rounded-full p-1"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
