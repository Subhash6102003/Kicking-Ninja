import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Updated gallery images with actual photos
const galleryImages = [
  { id: 1, src: '/assets/images/gallery/training-1.jpg', category: 'training', title: 'Advanced Training Session' },
  { id: 2, src: '/assets/images/gallery/competition-1.jpg', category: 'competition', title: 'Tournament Victory' },
  { id: 3, src: '/assets/images/gallery/world-record-1.jpg', category: 'records', title: 'Saurabh\'s World Record - 720 Kicks' },
  { id: 4, src: '/assets/images/gallery/students-1.jpg', category: 'training', title: 'Student Training Session' },
  { id: 5, src: '/assets/images/instructors/anmol-sarkar.jpg', category: 'records', title: 'Anmol Sarkar - World Record Holder' },
  { id: 6, src: '/assets/images/instructors/saurabh-kushwaha.jpg', category: 'records', title: 'Saurabh Kushwaha - Founder & Record Holder' },
  { id: 7, src: '/assets/images/hero/saurabh-action.jpg', category: 'training', title: 'Master in Action' },
  { id: 8, src: '/assets/images/gallery/training-1.jpg', category: 'training', title: 'Technique Practice' },
  { id: 9, src: '/assets/images/gallery/competition-1.jpg', category: 'events', title: 'Championship Event' },
  { id: 10, src: '/assets/images/gallery/students-1.jpg', category: 'training', title: 'Group Training' },
  { id: 11, src: '/assets/images/gallery/world-record-1.jpg', category: 'events', title: 'Record Breaking Moment' },
  { id: 12, src: '/assets/images/gallery/training-1.jpg', category: 'training', title: 'Daily Practice' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-soft-black text-soft-white py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Gallery</h1>
            <div className="h-1 w-20 bg-bright-red mx-auto mb-6"></div>
            <p className="text-xl">
              Explore moments of excellence, determination, and achievement from our academy.
            </p>
          </motion.div>
        </div>
      </section>      {/* Gallery Section */}
      <section className="py-20 bg-deep-blue">
        <div className="container-custom">          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="section-title text-accent-blue">
              GALLERY
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-bright-red text-soft-white' : 'bg-soft-black text-accent-blue'} hover:bg-bright-red hover:text-soft-white transition-colors duration-300`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('training')}
              className={`px-6 py-2 rounded-full ${filter === 'training' ? 'bg-bright-red text-soft-white' : 'bg-soft-black text-accent-blue'} hover:bg-bright-red hover:text-soft-white transition-colors duration-300`}
            >
              Training
            </button>
            <button 
              onClick={() => setFilter('competition')}
              className={`px-6 py-2 rounded-full ${filter === 'competition' ? 'bg-bright-red text-soft-white' : 'bg-soft-black text-accent-blue'} hover:bg-bright-red hover:text-soft-white transition-colors duration-300`}
            >
              Competition
            </button>
            <button 
              onClick={() => setFilter('records')}
              className={`px-6 py-2 rounded-full ${filter === 'records' ? 'bg-bright-red text-soft-white' : 'bg-soft-black text-accent-blue'} hover:bg-bright-red hover:text-soft-white transition-colors duration-300`}
            >
              World Records
            </button>
            <button 
              onClick={() => setFilter('events')}
              className={`px-6 py-2 rounded-full ${filter === 'events' ? 'bg-bright-red text-soft-white' : 'bg-soft-black text-accent-blue'} hover:bg-bright-red hover:text-soft-white transition-colors duration-300`}
            >
              Events
            </button>
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            {filteredImages.map((image) => (
              <motion.div 
                key={image.id}
                layoutId={`image-${image.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="cursor-pointer overflow-hidden rounded-lg shadow-md group relative aspect-square"
                onClick={() => setSelectedImage(image)}
              >
                {/* Since we don't have actual images, using a placeholder */}                <div 
                  className="w-full h-full bg-soft-black flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                >
                  <div className="text-center p-4">
                    <p className="text-lg font-medium">{image.title}</p>
                    <p className="text-gray-600">Image {image.id}</p>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-deep-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-soft-white text-center p-4">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="capitalize">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Modal/Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div 
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div 
                  layoutId={`image-${selectedImage.id}`}
                  className="relative max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-gray-300 w-full h-[80vh] flex items-center justify-center">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                      <p className="text-lg capitalize mb-4">{selectedImage.category}</p>
                      <p className="text-gray-600">This is where the full-size image would appear</p>
                    </div>
                  </div>
                  
                  <button 
                    className="absolute top-4 right-4 bg-bright-red text-soft-white w-10 h-10 rounded-full flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Video Highlights */}
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
              Video Highlights
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Watch some of our most impressive moments and record-breaking achievements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-300 w-full h-80 flex items-center justify-center">
                <p className="text-xl font-medium">Video: Anmol's Slap Kick Record</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">106 Slap Kicks in 30 Seconds</h3>
                <p className="text-gray-700">
                  Watch Anmol Sarkar's incredible display of speed and control as he breaks the world record.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-300 w-full h-80 flex items-center justify-center">
                <p className="text-xl font-medium">Video: Saurabh's 360 Jump Kick</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">8-Foot 360 Jump Kick</h3>
                <p className="text-gray-700">
                  See Saurabh Kushwaha's gravity-defying world record jump with perfect form and technique.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <a href="https://www.youtube.com/channel/YOURCHANNELID" className="text-deep-blue font-medium hover:text-bright-red transition-colors duration-300 inline-flex items-center">
              View All Videos on Our YouTube Channel
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
