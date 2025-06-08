import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ExitIntentModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-soft-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-deep-blue w-full max-w-lg rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-soft-white/70 hover:text-soft-white transition-colors duration-300"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-bright-red/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl -z-10"></div>
              
              {/* Content */}
              <div className="px-8 pt-12 pb-10">
                {!submitted ? (
                  <>
                    <div className="text-center mb-6">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-accent-blue mb-2">
                          Wait! Before You Go...
                        </h2>
                        <p className="text-soft-white mb-6">
                          Get our <span className="text-bright-red font-bold">FREE</span> e-book:
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold text-soft-white mb-4">
                          "10 Kickstart Tips for New Martial Artists"
                        </h3>
                      </motion.div>
                      
                      <div className="flex justify-center mb-6">
                        <div className="w-32 h-1 bg-bright-red rounded-full"></div>
                      </div>
                      
                      <div className="mb-6">
                        <img 
                          src="/assets/images/ebook-cover.jpg" 
                          alt="Martial Arts E-book" 
                          className="w-40 h-auto mx-auto rounded shadow-lg border border-accent-blue/30"
                        />
                      </div>
                      
                      <div className="text-left mb-6">
                        <p className="text-soft-white/80 mb-4">
                          Learn essential tips to kickstart your martial arts journey, including:
                        </p>
                        <ul className="space-y-2 text-soft-white/80">
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-bright-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            Proper warm-up routines to prevent injury
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-bright-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            Mental preparation techniques
                          </li>
                          <li className="flex items-center">
                            <svg className="h-5 w-5 text-bright-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            Essential first moves to master
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-md bg-soft-black/50 text-soft-white border border-accent-blue/30 focus:border-accent-blue focus:outline-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        className="w-full py-3 bg-bright-red text-soft-white rounded-md font-bold shadow-lg"
                        whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(229, 8, 0, 0.3)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Get Your Free E-book
                      </motion.button>
                      <p className="text-soft-white/50 text-sm text-center mt-4">
                        We respect your privacy. Unsubscribe at any time.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                    >
                      <div className="mx-auto mb-6 bg-accent-blue/20 rounded-full p-3 w-20 h-20 flex items-center justify-center">
                        <svg className="h-12 w-12 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-accent-blue mb-2">
                        Thank You!
                      </h3>
                      <p className="text-soft-white mb-8">
                        Your e-book is on its way to your inbox. Please check your email shortly.
                      </p>
                      <div className="flex justify-center">
                        <Link 
                          to="/" 
                          className="btn-theme-primary inline-flex items-center"
                          onClick={onClose}
                        >
                          Back to Website
                          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;
