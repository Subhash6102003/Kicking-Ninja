import React from 'react';
import { Link } from 'react-router-dom';
import InstructorCard, { SocialLink } from './InstructorCard';
import { motion } from 'framer-motion';

// Updated instructor images
const instructorImages = [
  '/assets/images/instructors/anmol-sarkar.jpg', // Anmol Sarkar
  '/assets/images/instructors/saurabh-kushwaha.jpg', // Saurabh Kushwaha
];

// Social media links for instructors
const anmolSocialLinks: SocialLink[] = [
  { type: 'instagram', url: 'https://instagram.com/anmolsarkar_official' },
  { type: 'facebook', url: 'https://facebook.com/anmolsarkar.official' },
  { type: 'youtube', url: 'https://youtube.com/@anmolsarkarmartialarts' }
];

const saurabhSocialLinks: SocialLink[] = [
  { type: 'instagram', url: 'https://instagram.com/saurabhkushwaha_kickingninja' },
  { type: 'facebook', url: 'https://facebook.com/saurabh.kushwaha.kickingninja' },
  { type: 'youtube', url: 'https://youtube.com/@kickingninjaacademy' }
];

const FeaturedInstructors: React.FC = () => {  return (
    <section className="py-20 bg-deep-blue">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-accent-blue">
            OUR INSTRUCTORS
            <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
          </h2>
          <p className="text-lg text-soft-white max-w-3xl mx-auto">
            Train with our exceptional instructors who have broken world records and bring years of expertise to their teaching.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >            <InstructorCard 
              name="Anmol Sarkar"
              record="Most back kicks in 1 minute - 240 kicks"
              recordDate="2023"
              image={instructorImages[0]}
              socialLinks={anmolSocialLinks}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >            <InstructorCard 
              name="Saurabh Kushwaha"
              role="Founder & Head Instructor"
              record="Most kicks in 3 minutes - 720 kicks"
              recordDate="2023"
              image={instructorImages[1]}
              socialLinks={saurabhSocialLinks}
            />
          </motion.div>
        </div>

        <div className="text-center">
          <Link 
            to="/instructors" 
            className="text-deep-blue font-medium hover:text-bright-red transition-colors duration-300 inline-flex items-center"
          >
            View All Instructors
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstructors;
