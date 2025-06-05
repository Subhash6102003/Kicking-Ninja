import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import InstructorCard from '../components/InstructorCard';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTrophy } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Instructor data with accurate world record information
const instructors = [
  {
    id: 1,
    name: "Anmol Sarkar",
    role: "Lead Instructor & World Record Holder",
    record: "Most back kicks in 1 minute",
    recordDate: "2023",
    recordCount: "240 kicks",
    image: "/assets/images/instructors/anmol-sarkar.jpg",
    bio: "Anmol Sarkar is a phenomenal martial artist and world record holder known for his lightning-fast kicks and exceptional technique. He holds multiple records and has dedicated his life to perfecting the art of martial arts. His expertise in traditional and modern combat techniques makes him one of the most sought-after instructors in India.",
    specialties: ["High-Speed Kicking", "Combat Techniques", "Traditional Forms", "Competition Training"],
    experience: "12+ Years",
    achievements: [
      "World Record Holder - Most back kicks in 1 minute (240 kicks)",
      "National Martial Arts Champion 2022",
      "International Tournament Gold Medalist",
      "Certified Black Belt 5th Dan"
    ],
    socialLinks: [
      { type: 'instagram' as const, url: 'https://instagram.com/anmolsarkar_official' },
      { type: 'facebook' as const, url: 'https://facebook.com/anmolsarkar.official' },
      { type: 'youtube' as const, url: 'https://youtube.com/@anmolsarkarmartialarts' }
    ]
  },
  {
    id: 2,
    name: "Saurabh Kushwaha", 
    role: "Founder & Head Instructor",
    record: "Most kicks in 3 minutes",
    recordDate: "2023",
    recordCount: "720 kicks",
    image: "/assets/images/instructors/saurabh-kushwaha.jpg",
    bio: "Saurabh Kushwaha is the visionary founder of Kicking Ninja Academy and a world record holder who has revolutionized martial arts training in Jhansi. With his incredible speed, precision, and innovative teaching methods, he has trained hundreds of students and continues to push the boundaries of what's possible in martial arts.",
    specialties: ["Speed Training", "Power Development", "Academy Management", "Advanced Techniques"],
    experience: "15+ Years",
    achievements: [
      "World Record Holder - Most kicks in 3 minutes (720 kicks)",
      "Founder of Kicking Ninja Academy",
      "Master Instructor Certification",
      "Regional Champion Multiple Years"
    ],
    socialLinks: [
      { type: 'instagram' as const, url: 'https://instagram.com/saurabhkushwaha_kickingninja' },
      { type: 'facebook' as const, url: 'https://facebook.com/saurabh.kushwaha.kickingninja' },
      { type: 'youtube' as const, url: 'https://youtube.com/@kickingninjaacademy' }
    ]
  }
];



const InstructorDetail: React.FC<{ instructor: typeof instructors[0] }> = ({ instructor }) => {
  // Add state for the active tab
  const [activeTab, setActiveTab] = useState('journey');
  const tabs = ['journey', 'training', 'achievements', 'classes'];
  
  // Function to render the appropriate icon based on social media type
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'facebook':
        return <FaFacebook className="text-2xl" aria-hidden="true" />;
      case 'instagram':
        return <FaInstagram className="text-2xl" aria-hidden="true" />;
      case 'twitter':
        return <FaTwitter className="text-2xl" aria-hidden="true" />; 
      case 'youtube':
        return <FaYoutube className="text-2xl" aria-hidden="true" />;
      default:
        return null;
    }
  };
  
  // Controls for animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  // Trigger animations when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 50 }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center"
    >
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-soft-black to-transparent opacity-50 z-10"></div>
          <img 
            src={instructor.image} 
            alt={instructor.name} 
            className="rounded-lg w-full h-auto"
          />
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-bright-red/80 backdrop-blur-sm p-4 z-20"
            initial={{ y: 100 }}
            whileHover={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center">
              <FaTrophy className="text-2xl text-soft-white mr-2" />
              <p className="text-lg font-bold text-soft-white">
                {instructor.record}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div>
        <motion.h3 
          className="text-4xl font-display font-bold mb-2 text-accent-blue"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            hidden: { opacity: 0, x: -50 }
          }}
        >
          {instructor.name}
        </motion.h3>
        <motion.p 
          className="text-light-blue text-xl mb-2"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
            hidden: { opacity: 0, x: -50 }
          }}
        >
          {instructor.role}
        </motion.p>
        <motion.div 
          className="flex items-center mb-6"
          variants={{
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
            hidden: { opacity: 0, x: -50 }
          }}
        >
          <div className="h-1 w-20 bg-bright-red mr-2"></div>
          <span className="text-soft-white/70">{instructor.recordDate}</span>
        </motion.div>
        
        {/* Interactive Tabs */}
        <motion.div 
          className="mb-6"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
            hidden: { opacity: 0, y: 20 }
          }}
        >
          <div className="flex mb-4 space-x-1 border-b border-accent-blue/30">
            {tabs.map(tab => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium capitalize relative ${
                  activeTab === tab 
                    ? 'text-accent-blue' 
                    : 'text-soft-white/70 hover:text-soft-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {activeTab === tab && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-bright-red"
                    layoutId="tabIndicator"
                  />
                )}
                {tab}
              </motion.button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-soft-black/50 backdrop-blur-sm p-4 rounded-lg border border-accent-blue/20"
            >
              {activeTab === 'journey' && (
                <p className="text-soft-white/90 mb-4">{instructor.bio}</p>
              )}
              
              {activeTab === 'training' && (
                <div className="text-soft-white/90">
                  <h4 className="text-accent-blue font-bold mb-2">Training Philosophy</h4>
                  <p className="mb-3">
                    {instructor.name} believes in balanced training that combines technical precision, 
                    strength development, and mental focus. Training sessions are intense but methodical.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Dynamic warm-up routines</li>
                    <li>Technical drills focused on perfection</li>
                    <li>Strength and conditioning work</li>
                    <li>Meditation and mental preparation</li>
                  </ul>
                </div>
              )}
                {activeTab === 'achievements' && (
                <div className="text-soft-white/90">
                  <h4 className="text-accent-blue font-bold mb-2">Notable Achievements</h4>
                  {instructor.achievements ? (
                    <ul className="space-y-2">
                      {instructor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center">
                          <FaTrophy className="text-bright-red mr-2" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <FaTrophy className="text-bright-red mr-2" />
                        <span>{instructor.record} ({instructor.recordDate})</span>
                      </li>
                      <li className="flex items-center">
                        <FaTrophy className="text-bright-red mr-2" />
                        <span>Master Instructor Certification</span>
                      </li>
                      <li className="flex items-center">
                        <FaTrophy className="text-bright-red mr-2" />
                        <span>International Tournament Champion</span>
                      </li>
                    </ul>
                  )}
                </div>
              )}
              
              {activeTab === 'classes' && (
                <div className="text-soft-white/90">
                  <h4 className="text-accent-blue font-bold mb-2">Available Classes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="border border-accent-blue/30 rounded p-2">
                      <span className="text-bright-red font-bold">Advanced Techniques</span>
                      <p className="text-sm">Mondays & Wednesdays, 6-8 PM</p>
                    </div>
                    <div className="border border-accent-blue/30 rounded p-2">
                      <span className="text-bright-red font-bold">Competition Prep</span>
                      <p className="text-sm">Fridays, 5-7 PM</p>
                    </div>
                    <div className="border border-accent-blue/30 rounded p-2">
                      <span className="text-bright-red font-bold">Private Lessons</span>
                      <p className="text-sm">By appointment</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Social Media Links */}
        {instructor.socialLinks && instructor.socialLinks.length > 0 && (
          <motion.div 
            className="flex items-center mb-6"
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
              hidden: { opacity: 0, y: 20 }
            }}
          >
            <span className="text-soft-white/70 mr-4">Connect:</span>
            <div className="flex space-x-4">
              {instructor.socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-bright-red transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {getSocialIcon(link.type)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
        
        <motion.div 
          className="grid grid-cols-2 gap-4 mb-6"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
            hidden: { opacity: 0, y: 20 }
          }}
        >
          <motion.div 
            className="bg-soft-black/70 p-4 rounded-lg border border-accent-blue/20"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(47, 173, 207, 0.2)" }}
          >
            <h4 className="font-bold text-accent-blue mb-2">Specialization</h4>
            <p className="text-soft-white/90">High-speed techniques</p>
          </motion.div>
          
          <motion.div 
            className="bg-soft-black/70 p-4 rounded-lg border border-accent-blue/20"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(47, 173, 207, 0.2)" }}
          >
            <h4 className="font-bold text-accent-blue mb-2">Experience</h4>
            <p className="text-soft-white/90">15+ years</p>
          </motion.div>
          
          <motion.div 
            className="bg-soft-black/70 p-4 rounded-lg border border-accent-blue/20"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(47, 173, 207, 0.2)" }}
          >
            <h4 className="font-bold text-accent-blue mb-2">Classes</h4>
            <p className="text-soft-white/90">Advanced, Competition</p>
          </motion.div>
          
          <motion.div 
            className="bg-soft-black/70 p-4 rounded-lg border border-accent-blue/20"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(47, 173, 207, 0.2)" }}
          >
            <h4 className="font-bold text-accent-blue mb-2">Certifications</h4>
            <p className="text-soft-white/90">International Coach Level 3</p>
          </motion.div>
        </motion.div>
        
        <motion.button 
          className="btn-theme-primary flex items-center gap-2"
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
            hidden: { opacity: 0, y: 20 }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Class
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

const Instructors: React.FC = () => {
  // State to track which instructor is being viewed in detail
  const [selectedInstructor, setSelectedInstructor] = React.useState<typeof instructors[0] | null>(null);
  
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">      {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] overflow-hidden bg-deep-blue text-soft-white flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Replace with actual video when available */}
          <div className="absolute inset-0 bg-gradient-to-r from-soft-black to-deep-blue/70 z-10"></div>
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/assets/images/martial-arts-poster.jpg"
          >
            <source src="/assets/videos/martial-arts-training.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src="/assets/images/martial-arts-poster.jpg" 
              alt="Martial Arts Training" 
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-20">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-bright-red">World-Class</span> Instructors
            </motion.h1>
            <motion.div 
              className="h-1 w-32 bg-accent-blue mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            <motion.p 
              className="text-2xl font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Meet our team of record-breaking martial arts instructors who will guide you on your journey to greatness.
            </motion.p>
            
            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <svg width="40" height="40" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15L3.5 8.5L4.91 7.09L10 12.17L15.09 7.09L16.5 8.5L10 15Z" fill="#2fadcf"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>{/* Featured Instructors */}
      <section className="py-20 bg-soft-black">
        <div className="container-custom">
          {selectedInstructor ? (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button 
                  onClick={() => setSelectedInstructor(null)}
                  className="mb-8 flex items-center text-accent-blue hover:text-bright-red transition-colors duration-300"
                  whileHover={{ x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all instructors
                </motion.button>
                
                <InstructorDetail instructor={selectedInstructor} />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div>
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="section-title text-accent-blue">
                  World Record Holders
                  <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
                </h2>
                <p className="text-lg text-soft-white/80 max-w-3xl mx-auto">
                  Our instructors are not just teachers – they're accomplished martial artists who have dedicated their lives to perfecting their craft.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {instructors.map((instructor, index) => (
                  <motion.div
                    key={instructor.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 100, 
                      delay: index * 0.1,
                      duration: 0.5 
                    }}
                    onClick={() => setSelectedInstructor(instructor)}
                    className="cursor-pointer"
                  >
                    <InstructorCard 
                      name={instructor.name}
                      role={instructor.role}
                      record={instructor.record}
                      recordDate={instructor.recordDate}
                      image={instructor.image}
                      socialLinks={instructor.socialLinks}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}          {/* Team Quote with Glassmorphism */}
          <motion.div 
            className="mt-12 p-8 bg-accent-blue/10 backdrop-blur-md border border-accent-blue/30 rounded-lg shadow-2xl text-center text-soft-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-bright-red/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent-blue/20 rounded-full blur-2xl"></div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-accent-blue">Our Teaching Philosophy</h3>
              
              <div className="relative py-6">
                {/* Quote marks */}
                <svg className="absolute top-0 left-0 w-16 h-16 text-bright-red/20" fill="currentColor" viewBox="0 0 100 100">
                  <path d="M30.7,42c0,6.1,12.6,7,12.6,22,0,11-7.9,19.2-18.9,19.2C12.7,83.1,5,72.6,5,61.5c0-19.2,18-44.6,29.2-44.6 c2.8,0,7.9,2,7.9,5.4S30.7,31.6,30.7,42z"></path>
                  <path d="M82.4,42c0,6.1,12.6,7,12.6,22,0,11-7.9,19.2-18.9,19.2c-11.8,0-19.5-10.5-19.5-21.6c0-19.2,18-44.6,29.2-44.6 c2.8,0,7.9,2,7.9,5.4S82.4,31.6,82.4,42z"></path>
                </svg>
                
                <p className="text-xl italic mb-6 relative z-10">
                  "We believe in pushing beyond limits while maintaining perfect form. Excellence is not an accident, but a result of consistent training and dedicated practice. Each kick, each movement, is a step toward mastery."
                </p>
                
                {/* Audio play button for quote */}
                <motion.button
                  className="flex items-center mx-auto bg-soft-black/50 text-soft-white px-4 py-2 rounded-full border border-accent-blue/30 mb-4"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(47, 173, 207, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Listen to our philosophy
                </motion.button>
              </div>
              <p className="font-bold text-soft-white">- The Kicking Ninja Team</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Spotlight - Saurabh's Record */}
      <section className="py-20 bg-deep-blue relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-60 h-60 bg-bright-red/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-accent-blue">
              Spotlight: Saurabh's World Record
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                {/* This would be a video or image of the record jump */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-soft-black to-transparent z-10"></div>
                  <div className="bg-soft-black/50 w-full h-96 rounded-lg overflow-hidden">
                    <img 
                      src="/assets/images/jump-kick-placeholder.jpg" 
                      alt="8-foot jump kick"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Play button overlay for video */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center z-20"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.button
                        className="bg-bright-red/90 w-16 h-16 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(229, 8, 0, 0.6)" }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-soft-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </motion.div>
                    
                    {/* Record stat badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-bright-red/80 p-4 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FaTrophy className="text-soft-white text-2xl mr-3" />
                          <div>
                            <p className="text-soft-white font-bold">8 FEET</p>
                            <p className="text-soft-white/80 text-sm">World Record Jump</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-soft-white font-bold">AUG 2023</p>
                          <p className="text-soft-white/80 text-sm">Official Record</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-soft-white"
            >
              <blockquote className="text-2xl font-medium italic mb-8 text-accent-blue border-l-4 border-bright-red pl-4">
                "Saurabh Kushwaha achieves the world record of the highest 360 jump kick at 8 feet, solidifying his place in sporting history."
              </blockquote>

              <h3 className="text-2xl font-bold text-accent-blue mb-4">The Journey to the Record</h3>
              <p className="text-soft-white/80 mb-6">
                After years of dedicated training and countless attempts, Saurabh achieved the impossible – a perfect 360-degree jump kick at a height of 8 feet, setting a new world record in August 2023.
              </p>
              
              <h3 className="text-2xl font-bold text-accent-blue mb-4">Training Methodology</h3>
              <p className="text-soft-white/80 mb-6">
                The record was the result of a specialized training program combining plyometric exercises, flexibility training, and precision technique development over thousands of hours of practice.
              </p>

              <motion.button 
                className="btn-theme-primary flex items-center gap-2 mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn Saurabh's Techniques
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
