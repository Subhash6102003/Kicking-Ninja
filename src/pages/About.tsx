import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-deep-blue text-soft-white py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Kicking Ninja</h1>
            <div className="h-1 w-20 bg-bright-red mx-auto mb-6"></div>
            <p className="text-xl">
              A martial arts academy dedicated to excellence, discipline, and breaking records.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-soft-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title text-deep-blue">
                Our Mission
                <div className="h-1 w-20 bg-bright-red mt-3"></div>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At Kicking Ninja, our mission is to foster the growth of exceptional martial artists 
                through disciplined training, personalized instruction, and a supportive community. 
                We strive to push the boundaries of what's possible in martial arts while maintaining 
                respect for its traditions and principles.
              </p>
              
              <h3 className="text-2xl font-bold text-deep-blue mb-4">Our Values</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue mb-1">Excellence</h4>
                    <p className="text-gray-600">We pursue excellence in technique, form, and physical condition.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue mb-1">Discipline</h4>
                    <p className="text-gray-600">We instill self-discipline and dedication in all our students.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue mb-1">Respect</h4>
                    <p className="text-gray-600">We respect traditions, each other, and ourselves in our martial arts journey.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-blue mb-1">Innovation</h4>
                    <p className="text-gray-600">We combine traditional techniques with modern training methods.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">                <img 
                  src="/assets/images/instructors/saurabh-kushwaha.jpg" 
                  alt="Saurabh Kushwaha - Martial arts training" 
                  className="rounded-lg shadow-xl w-full h-auto relative z-10"
                />
                <div className="absolute -bottom-5 -left-5 w-80 h-80 bg-light-blue/20 rounded-lg -z-10"></div>
                <div className="absolute -top-5 -right-5 w-40 h-40 bg-bright-red/20 rounded-lg -z-10"></div>
                  {/* Quote box - positioned absolutely on desktop, below the image on mobile */}                <div className="bg-deep-blue p-6 rounded-lg shadow-xl max-w-xs w-full
                                lg:absolute lg:right-5 lg:bottom-10
                                relative mt-8 lg:mt-0 mx-auto lg:mx-0">
                  <h3 className="text-bright-red font-bold text-xl mb-2">Training Philosophy</h3>
                  <p className="text-soft-white">
                    "We believe in pushing beyond limits while maintaining perfect form. Excellence is not an accident, but a result of consistent training."
                  </p>
                  <div className="mt-2 text-right text-light-blue">
                    - Saurabh Kushwaha
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-20 bg-gray-100">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-deep-blue">
              Our Journey
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-deep-blue"></div>
            
            {/* Timeline events */}
            <div className="space-y-12 relative">
              <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">2013</h3>
                  <p className="text-gray-700">
                    Kicking Ninja was founded by Saurabh Kushwaha with a small dojo and a vision to create world-class martial artists.
                  </p>
                </div>
                <div className="hidden md:block w-10 h-10 bg-bright-red rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-soft-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block w-10 h-10 bg-bright-red rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-soft-white"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">2015</h3>
                  <p className="text-gray-700">
                    Anmol Sarkar joined as a lead instructor, bringing his expertise and competitive background to our academy.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">2018</h3>
                  <p className="text-gray-700">
                    Expanded to our current state-of-the-art facility with advanced training equipment and specialized areas.
                  </p>
                </div>
                <div className="hidden md:block w-10 h-10 bg-bright-red rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-soft-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block w-10 h-10 bg-bright-red rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-soft-white"></div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">2020</h3>
                  <p className="text-gray-700">
                    Anmol Sarkar breaks the world record with 106 slap kicks in 30 seconds, putting our academy on the global stage.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">2023</h3>
                  <p className="text-gray-700">
                    Saurabh Kushwaha sets a new world record with the highest 360 Jump Kick at 8 feet, further cementing our reputation.
                  </p>
                </div>
                <div className="hidden md:block w-10 h-10 bg-bright-red rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-soft-white"></div>
                <div className="md:w-1/2 md:pl-12"></div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col md:flex-row items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="hidden md:block w-10 h-10 bg-bright-red rounded-full absolute left-1/2 transform -translate-x-1/2 border-4 border-soft-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-2xl font-bold text-deep-blue mb-2">Today</h3>
                  <p className="text-gray-700">
                    With over 100 students and multiple world records, we continue to grow and inspire the next generation of martial artists.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Philosophy Section */}
      <section className="py-20 bg-deep-blue text-soft-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-soft-white">
              Training Philosophy
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-deep-blue/50 p-6 rounded-lg border-l-4 border-bright-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-light-blue">Technical Precision</h3>
              <p>
                We emphasize perfect form and technical precision in every movement. Mastery comes from disciplined practice and attention to detail.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-deep-blue/50 p-6 rounded-lg border-l-4 border-bright-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 text-light-blue">Mental Fortitude</h3>
              <p>
                Martial arts is as much about mental strength as it is physical. We train students to overcome limitations and develop unshakeable confidence.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-deep-blue/50 p-6 rounded-lg border-l-4 border-bright-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-light-blue">Holistic Development</h3>
              <p>
                Beyond kicks and punches, we develop character, discipline, and respect—creating well-rounded individuals ready to excel in all aspects of life.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 p-8 bg-gradient-primary rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to begin your martial arts journey?</h3>
            <p className="text-lg mb-6">Join our academy and train with world record holders to unlock your full potential.</p>
            <button className="btn-primary text-lg">Join Kicking Ninja</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
