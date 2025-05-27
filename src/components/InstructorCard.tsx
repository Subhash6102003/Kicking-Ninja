import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTrophy } from 'react-icons/fa';

export type SocialLink = {
  type: 'facebook' | 'instagram' | 'twitter' | 'youtube';
  url: string;
};

type InstructorCardProps = {
  name: string;
  record: string;
  recordDate: string;
  image: string;
  role?: string;
  socialLinks?: SocialLink[];
};

const InstructorCard: React.FC<InstructorCardProps> = ({ 
  name, 
  record, 
  recordDate, 
  image,
  role,
  socialLinks
}) => {
  // State for the 3D tilt effect
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });
  
  // Function to handle mouse move for tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt values based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 15;
    const tiltY = (centerX - x) / 15;
    
    setTiltValues({ x: tiltX, y: tiltY });
  };
  
  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    setTiltValues({ x: 0, y: 0 });
  };

  // Function to render the appropriate icon based on social media type
  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'facebook':
        return <FaFacebook aria-hidden="true" />;
      case 'instagram':
        return <FaInstagram aria-hidden="true" />;
      case 'twitter':
        return <FaTwitter aria-hidden="true" />; 
      case 'youtube':
        return <FaYoutube aria-hidden="true" />;
      default:
        return null;
    }
  };
  
  return (
    <motion.div 
      className="instructor-card bg-soft-black text-soft-white rounded-lg overflow-hidden shadow-xl"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.4)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ 
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-80 overflow-hidden border-b-4 border-bright-red">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-overlay"></div>
        <div className="card-glow absolute inset-0 opacity-0 bg-accent-blue/30 mix-blend-overlay transition-opacity"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
        />      </div>
      <div className="p-6 relative z-10" style={{ transform: "translateZ(20px)" }}>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-display font-bold text-accent-blue relative inline-block">
            {name}
            <motion.div 
              className="absolute -bottom-1 left-0 h-1 bg-bright-red"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </h3>
        </motion.div>
        
        {role && (
          <motion.p 
            className="text-light-blue text-lg mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {role}
          </motion.p>
        )}
        
        <div className="flex items-center mb-3">
          <div className="h-1 w-12 bg-bright-red mr-2"></div>
          <span className="text-metallic-gray text-sm">{recordDate}</span>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-soft-black/50 backdrop-blur-sm p-3 rounded-md border border-accent-blue/20 mb-4"
        >
          <div className="flex items-center">
            <FaTrophy className="text-bright-red mr-2 text-lg" />
            <p className="text-lg font-medium">
              <span className="text-bright-red">Record:</span> {record}
            </p>
          </div>
        </motion.div>
        
        {/* Social media links with animations */}
        {socialLinks && socialLinks.length > 0 && (
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-metallic-gray hover:text-bright-red transition-colors duration-300 text-xl"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {getSocialIcon(link.type)}
              </motion.a>
            ))}
          </div>
        )}
        
        <motion.button 
          className="glow-btn text-bright-red border-2 border-bright-red px-4 py-2 rounded-md font-medium relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-bright-red opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center justify-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default InstructorCard;
