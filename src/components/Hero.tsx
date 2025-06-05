import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-deep-blue flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-soft-black to-deep-blue opacity-90"></div>
      {/* Background Image - Saurabh Kushwaha Action Shot */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('/assets/images/hero/saurabh-action.jpg')`,
          backgroundColor: '#06122f'  
        }}
      ></div>
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-bright-red/5 blur-3xl"></div>
      <div className="container-custom relative z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left h-full pt-32 xs:pt-40 md:pt-32 pb-8 xs:pb-12 md:pb-12"
        style={{ paddingTop: 'calc(5.5rem + env(safe-area-inset-top, 0px))' }} // fallback for mobile nav height
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 xs:mb-8 md:mb-8 md:max-w-2xl"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-soft-white mb-3 xs:mb-4 leading-tight">
            TRAIN WITH <span className="text-bright-red">WORLD</span><br />
            <span className="text-bright-red">RECORD</span> HOLDERS.<br />
            <span className="text-accent-blue">BE THE NEXT LEGEND</span>
          </h1>
          <p className="text-lg xs:text-xl md:text-2xl text-soft-white font-medium my-4 xs:my-6 max-w-xl mx-auto md:mx-0">
            Join the elite martial arts academy in Jhansi, Uttar Pradesh
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 xs:mb-10"
        >
          <Link 
            to="/contact" 
            className="btn-theme-primary text-base xs:text-lg px-6 xs:px-8 py-2.5 xs:py-3 font-bold tracking-wider inline-flex items-center gap-2 border-2 border-bright-red hover:bg-transparent hover:text-bright-red transition-all duration-300"
          >
            Join Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>        {/* Stats Section - responsive grid layout */}
        <div className="w-full grid grid-cols-1 xs:grid-cols-3 gap-4 xs:gap-6 md:gap-6 justify-items-center md:justify-items-start">
          <motion.div 
            className="stat-card p-4 xs:p-6 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-bright-red font-display text-3xl xs:text-4xl md:text-5xl font-bold mb-1">2+</h3>
            <p className="text-soft-white font-medium text-sm xs:text-base md:text-lg">World Records</p>
          </motion.div>
          <motion.div 
            className="stat-card p-4 xs:p-6 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-bright-red font-display text-3xl xs:text-4xl md:text-5xl font-bold mb-1">100+</h3>
            <p className="text-soft-white font-medium text-sm xs:text-base md:text-lg">Students</p>
          </motion.div>
          <motion.div 
            className="stat-card p-4 xs:p-6 w-full max-w-xs text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-bright-red font-display text-3xl xs:text-4xl md:text-5xl font-bold mb-1">10+</h3>
            <p className="text-soft-white font-medium text-sm xs:text-base md:text-lg">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
