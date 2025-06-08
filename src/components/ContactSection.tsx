import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to backend in a real application
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };
  return (
    <section className="py-20 bg-deep-blue text-soft-white relative">
      {/* Diagonal section divider - top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute -top-8 left-0 right-0 h-20 bg-soft-black transform -skew-y-3"></div>
      </div>

      <div className="container-custom relative">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-accent-blue">
            Join Our Martial Arts Academy
            <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Take the first step towards mastering martial arts and becoming part of our elite community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold mb-4">Get in Touch</h3>
            <p className="mb-6">
              Have questions about our programs or want to schedule a free trial class? Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3">                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>                  <h4 className="font-bold">Address</h4>
                  <p className="text-metallic-gray">Kicking Ninja Academy, 123 Martial Arts Center, Jhansi, Uttar Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3">                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-metallic-gray">7007330503</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-bright-red rounded-full flex items-center justify-center mr-3">                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-soft-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-metallic-gray">info@kickingninja.com</p>
                </div>
              </div>
            </div>
          </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-soft-black p-6 rounded-lg shadow-md border border-accent-blue/30">
              <div className="mb-4">
                <label htmlFor="name" className="block text-accent-blue font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-deep-blue bg-deep-blue/50 rounded-md focus:outline-none focus:border-bright-red text-soft-white"
                />
              </div>
                <div className="mb-4">
                <label htmlFor="email" className="block text-accent-blue font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-deep-blue bg-deep-blue/50 rounded-md focus:outline-none focus:border-bright-red text-soft-white"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-accent-blue font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-deep-blue bg-deep-blue/50 rounded-md focus:outline-none focus:border-bright-red text-soft-white"
                />
              </div>
                <div className="mb-6">
                <label htmlFor="message" className="block text-accent-blue font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-deep-blue bg-deep-blue/50 rounded-md focus:outline-none focus:border-bright-red text-soft-white"
                ></textarea>
              </div>
                <button 
                type="submit"
                className="w-full btn-theme-primary flex items-center justify-center gap-2 py-3"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>      {/* Map section */}
      <div className="mt-16 h-96 w-full relative">
        {/* Google Maps embed would go here */}
        <div className="h-full flex items-center justify-center bg-soft-black">
          <div className="absolute inset-0 bg-gradient-to-t from-deep-blue to-transparent opacity-50"></div>
          <p className="text-xl font-medium text-accent-blue relative z-10">
            Kicking Ninja Academy, Jhansi, Uttar Pradesh
            <span className="block text-sm text-soft-white mt-2">Contact: 7007330503</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
