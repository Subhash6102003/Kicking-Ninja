import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedInstructors from '../components/FeaturedInstructors';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Hero />      {/* About Section Preview */}
      <section className="py-12 xs:py-16 sm:py-20 bg-soft-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">                
                <div className="bg-accent-blue/30 w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-lg absolute -z-10 -bottom-5 -right-5 hidden sm:block"></div>
                <img 
                  src="/assets/images/academy.jpg" 
                  alt="Kicking Ninja Academy" 
                  className="rounded-lg shadow-xl w-full h-auto relative z-10"
                />
                {/* Years of Excellence - placed responsively */}                
                <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 
                                bg-bright-red/90 p-4 xs:p-5 sm:p-6 rounded-lg shadow-lg z-20 
                                w-full xs:w-40 sm:w-44 md:w-48 xs:h-40 sm:h-44 md:h-48 
                                flex flex-col items-center justify-center
                                relative mt-4 md:mt-0 mx-auto max-w-xs xs:max-w-none">
                  <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-soft-white font-display">10+</p>
                  <p className="text-soft-white text-center text-sm xs:text-base">Years of Excellence</p>
                </div>
              </div>
            </motion.div>              <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title text-accent-blue text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">
                Welcome to Kicking Ninja
                <div className="h-1 w-16 xs:w-20 bg-bright-red mt-3"></div>
              </h2>
              <p className="text-base xs:text-lg text-soft-white mb-4 xs:mb-6">
                At Kicking Ninja, we believe in pushing beyond limits. Our academy is home to world-record holders and passionate martial artists dedicated to excellence.
              </p>
              <p className="text-base xs:text-lg text-soft-white mb-6 xs:mb-8">
                Our training philosophy combines traditional techniques with modern sports science, creating athletes who are both technically skilled and physically powerful.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 mb-6 xs:mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 bg-deep-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>                    
                    <h3 className="font-bold text-accent-blue mb-1 text-sm xs:text-base">Expert Instructors</h3>
                    <p className="text-soft-white/80 text-sm xs:text-base">Learn from record-breaking martial artists.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 bg-deep-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>                    
                    <h3 className="font-bold text-accent-blue mb-1 text-sm xs:text-base">Modern Facilities</h3>
                    <p className="text-soft-white/80 text-sm xs:text-base">Train in a state-of-the-art dojo.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 bg-deep-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>                    
                    <h3 className="font-bold text-accent-blue mb-1 text-sm xs:text-base">Personalized Training</h3>
                    <p className="text-soft-white/80 text-sm xs:text-base">Customized programs for all skill levels.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 xs:w-10 xs:h-10 bg-deep-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>                    
                    <h3 className="font-bold text-accent-blue mb-1 text-sm xs:text-base">Competition Ready</h3>
                    <p className="text-soft-white/80 text-sm xs:text-base">Prepare for tournaments and championships.</p>
                  </div>
                </div>
              </div>
              <button className="btn-theme-primary flex items-center gap-2 text-sm xs:text-base px-4 xs:px-6 py-2 xs:py-3">
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>      {/* Testimonials Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-deep-blue">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-8 xs:mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-accent-blue text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">
              What Our Students Say
              <div className="h-1 w-16 xs:w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {/* Animated testimonial cards with fade-in and scale effect */}
            {[
              {
                name: 'Rahul Sharma',
                years: 'Student for 3 years',
                text: '"Training with Saurabh has completely transformed my martial arts journey. His attention to detail and dedication to each student is exceptional."',
                color: 'accent-blue',
                img: '/assets/images/testimonials/rahul.jpg',
              },
              {
                name: 'Priya Mehta',
                years: 'Student for 1 year',
                text: '"I was hesitant to join at first, but the supportive community at Kicking Ninja made me feel welcome. Anmol\'s techniques have greatly improved my confidence."',
                color: 'bright-red',
                img: '/assets/images/testimonials/priya.jpg',
              },
              {
                name: 'Amit Kumar',
                years: 'Student for 2 years',
                text: '"The instructors are world-class and the training is top-notch. I\'ve never felt stronger or more confident!"',
                color: 'accent-blue',
                img: '/assets/images/testimonials/amit.jpg',
              },            ].map((t, i) => (
              <motion.div
                key={t.name}
                className={`relative bg-soft-black p-4 xs:p-5 sm:p-6 rounded-lg shadow-xl border-t-4 border-${t.color}`}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(47,173,207,0.15)' }}
              >
                <div className="flex items-center mb-3 xs:mb-4">
                  <img src={t.img} alt={t.name} className="h-10 w-10 xs:h-12 xs:w-12 rounded-full object-cover border-2 border-accent-blue mr-3 xs:mr-4" loading="lazy" />
                  <div>
                    <h4 className={`font-bold text-${t.color} text-sm xs:text-base`}>{t.name}</h4>
                    <p className="text-xs xs:text-sm text-metallic-gray">{t.years}</p>
                  </div>
                </div>
                <p className="text-soft-white italic text-sm xs:text-base">{t.text}</p>
                <div className="mt-3 xs:mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 xs:h-5 xs:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedInstructors />
      <ContactSection />
    </div>
  );
};

export default Home;
