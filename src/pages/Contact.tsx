import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classes' | 'programs'>('classes');
    return (
    <div className="pt-16 xs:pt-18 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-deep-blue text-soft-white py-12 xs:py-16 sm:py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 xs:mb-6">Join Our Academy</h1>
            <div className="h-1 w-16 xs:w-20 bg-bright-red mx-auto mb-4 xs:mb-6"></div>
            <p className="text-lg xs:text-xl">
              Take the first step in your martial arts journey and train with world record holders.
            </p>
          </motion.div>
        </div>
      </section>      {/* Programs Section */}
      <section className="py-12 xs:py-16 sm:py-20 bg-soft-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-8 xs:mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-deep-blue text-2xl xs:text-3xl sm:text-4xl lg:text-5xl">
              Our Programs
              <div className="h-1 w-16 xs:w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
            <p className="text-base xs:text-lg text-gray-700 max-w-3xl mx-auto">
              We offer specialized training programs for all ages and skill levels, designed to help you reach your full potential.
            </p>
          </motion.div>

          {/* Program/Classes Tabs */}
          <div className="flex justify-center mb-6 xs:mb-8">
            <div className="inline-flex rounded-md shadow-sm w-full max-w-sm xs:max-w-none xs:w-auto">
              <button
                onClick={() => setActiveTab('classes')}
                className={`px-4 xs:px-6 sm:px-8 py-2 xs:py-3 text-sm xs:text-base sm:text-lg font-medium rounded-l-lg flex-1 xs:flex-none ${
                  activeTab === 'classes' 
                    ? 'bg-deep-blue text-soft-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Classes
              </button>
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-4 xs:px-6 sm:px-8 py-2 xs:py-3 text-sm xs:text-base sm:text-lg font-medium rounded-r-lg flex-1 xs:flex-none ${
                  activeTab === 'programs' 
                    ? 'bg-deep-blue text-soft-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Programs
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-12">
            {activeTab === 'classes' ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-light-blue">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-deep-blue">Beginner Classes</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Perfect for those new to martial arts. Learn foundational techniques, stances, and basic movements in a supportive environment.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-deep-blue">Schedule:</h4>
                      <ul className="text-gray-700">
                        <li>Monday & Wednesday: 5:00 PM - 6:30 PM</li>
                        <li>Saturday: 10:00 AM - 11:30 AM</li>
                      </ul>
                    </div>
                    <button className="btn-primary w-full">Register Now</button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-deep-blue">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-deep-blue">Intermediate Classes</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      For students who have mastered the basics. Focus on advanced techniques, combinations, and improved power and control.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-deep-blue">Schedule:</h4>
                      <ul className="text-gray-700">
                        <li>Tuesday & Thursday: 6:00 PM - 7:30 PM</li>
                        <li>Saturday: 1:00 PM - 2:30 PM</li>
                      </ul>
                    </div>
                    <button className="btn-primary w-full">Register Now</button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-bright-red">
                  <div className="bg-gray-100 px-6 py-4">
                    <h3 className="text-xl font-bold text-deep-blue">Advanced Classes</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      Elite training with our record-holding instructors. Perfect your techniques and train for competitions and records.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-deep-blue">Schedule:</h4>
                      <ul className="text-gray-700">
                        <li>Monday & Friday: 7:00 PM - 8:30 PM</li>
                        <li>Saturday: 3:00 PM - 5:00 PM</li>
                      </ul>
                    </div>
                    <button className="btn-primary w-full">Register Now</button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <p className="text-xl font-medium">Youth Program Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-deep-blue mb-3">Youth Program (Ages 6-12)</h3>
                    <p className="text-gray-700 mb-4">
                      Our specialized youth program focuses on developing coordination, discipline, and confidence in a fun and engaging environment.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Age-appropriate training methods
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Focus on coordination and motor skills
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Character development
                      </li>
                    </ul>
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <p className="text-xl font-medium">Competition Team Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-deep-blue mb-3">Competition Team</h3>
                    <p className="text-gray-700 mb-4">
                      Our elite competition team trains under the guidance of our record-holding instructors to prepare for tournaments and championships.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Advanced technique refinement
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Competition strategy
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Mental preparation
                      </li>
                    </ul>
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <p className="text-xl font-medium">Adult Fitness Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-deep-blue mb-3">Adult Fitness Program</h3>
                    <p className="text-gray-700 mb-4">
                      Get in shape while learning practical martial arts skills. This program combines fitness training with martial arts techniques.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        High-intensity workouts
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Practical self-defense
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Stress relief
                      </li>
                    </ul>
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <p className="text-xl font-medium">Private Sessions Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-deep-blue mb-3">Private Sessions</h3>
                    <p className="text-gray-700 mb-4">
                      One-on-one training with our world-class instructors. Personalized instruction tailored to your specific goals.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Personalized attention
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Targeted skill development
                      </li>
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Flexible scheduling
                      </li>
                    </ul>
                    <button className="btn-primary">Book a Session</button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Pricing Section */}
          <motion.div 
            className="text-center mt-20 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-deep-blue">
              Membership Options
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Choose the membership option that best fits your goals and schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-metallic-gray"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-xl font-bold text-deep-blue">Basic</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹1499</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>2 classes per week</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access to basic equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Monthly progress evaluation</span>
                  </li>
                </ul>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-bright-red transform scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >              <div className="bg-gradient-primary p-6 text-center text-soft-white">
                <span className="bg-bright-red text-white text-sm font-bold px-3 py-1 rounded-full uppercase">Popular</span>
                <h3 className="text-xl font-bold mt-2">Premium</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹2499</span>
                  <span className="text-metallic-gray">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited classes</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full access to all equipment</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Bi-weekly progress evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>1 free private session per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10% off on merchandise</span>
                  </li>
                </ul>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-metallic-gray"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >              <div className="bg-gray-100 p-6 text-center">
                <h3 className="text-xl font-bold text-deep-blue">Elite</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">₹4499</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unlimited classes</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>VIP access to all facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Weekly progress evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>4 free private sessions per month</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Custom training program</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bright-red mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20% off on merchandise</span>
                  </li>
                </ul>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 bg-soft-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-deep-blue">
              Frequently Asked Questions
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div 
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-bold text-deep-blue mb-2">Do I need prior experience to join?</h3>
                <p className="text-gray-700">
                  No prior experience is needed. We have programs for all skill levels, from complete beginners to advanced practitioners.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-bold text-deep-blue mb-2">What should I bring to my first class?</h3>
                <p className="text-gray-700">
                  For your first class, just bring comfortable athletic clothes, a water bottle, and a positive attitude. We provide all the necessary equipment for beginners.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-bold text-deep-blue mb-2">How old does my child need to be to join?</h3>
                <p className="text-gray-700">
                  Our youth program accepts children from age 6. For children under 6, we offer a specialized Little Ninjas program designed for their developmental needs.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-bold text-deep-blue mb-2">Can I train directly with Saurabh or Anmol?</h3>
                <p className="text-gray-700">
                  Yes, both instructors teach regular classes. Additionally, you can book private sessions with them based on their availability.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-lg shadow p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3 className="text-lg font-bold text-deep-blue mb-2">Do you offer trial classes?</h3>
                <p className="text-gray-700">
                  Yes, we offer a free trial class for new students. This gives you the opportunity to experience our teaching style and facilities before committing to a membership.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
