import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-deep-blue flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-soft-black to-deep-blue opacity-90"></div>      {/* Background Image - Saurabh Kushwaha Action Shot */}
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

      <div className="container-custom relative z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left h-full pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-soft-white mb-4">
            TRAIN WITH <span className="text-bright-red">WORLD</span><br />
            <span className="text-bright-red">RECORD</span> HOLDERS.<br />
            <span className="text-accent-blue">BE THE NEXT LEGEND</span>
          </h1>
          <p className="text-xl md:text-2xl text-soft-white font-medium my-6 max-w-xl">
            Join the elite martial arts academy in Jhansi, Uttar Pradesh
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <Link 
            to="/contact" 
            className="btn-theme-primary text-lg px-8 py-3 font-bold tracking-wider inline-flex items-center gap-2 border-2 border-bright-red hover:bg-transparent hover:text-bright-red transition-all duration-300"
          >
            Join Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
        {/* Stats Section - now in normal flow, always below button */}
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center md:items-end">
          <motion.div 
            className="stat-card p-6 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-bright-red font-display text-5xl font-bold mb-1">2+</h3>
            <p className="text-soft-white font-medium text-lg">World Records</p>
          </motion.div>
          <motion.div 
            className="stat-card p-6 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-bright-red font-display text-5xl font-bold mb-1">100+</h3>
            <p className="text-soft-white font-medium text-lg">Students</p>
          </motion.div>
          <motion.div 
            className="stat-card p-6 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3 className="text-bright-red font-display text-5xl font-bold mb-1">10+</h3>
            <p className="text-soft-white font-medium text-lg">Years Experience</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
