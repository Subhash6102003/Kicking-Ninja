import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar, FaTags, FaEye } from 'react-icons/fa';

// Sample product data
const products = [
  {    id: 1,
    name: 'Kicking Ninja T-Shirt',
    price: 699,
    image: '/assets/images/shop/tshirt.jpg',
    category: 'apparel',
    rating: 4.8,
    reviews: 24,
    bestseller: true,
    description: 'Premium quality cotton t-shirt with the Kicking Ninja logo. Available in multiple sizes.',
    colors: ['black', 'red', 'gray']
  },
  {    id: 2,
    name: 'Training Gloves',
    price: 399,
    image: '/assets/images/shop/gloves.jpg',
    category: 'gear',
    rating: 4.7,
    reviews: 18,
    bestseller: false,
    description: 'Professional training gloves for optimal impact protection and comfort during practice.',
    colors: ['black', 'red']
  },
  {    id: 3,
    name: 'Martial Arts Belt',
    price: 1599,
    image: '/assets/images/shop/belt.jpg',
    category: 'gear',
    rating: 4.9,
    reviews: 31,
    bestseller: true,
    description: 'High-quality martial arts belt made from durable cotton. Available in all rank colors.',
    colors: ['white', 'yellow', 'green', 'blue', 'red', 'black']
  },
  {    id: 4,
    name: 'Training Uniform',
    price: 2999,
    image: '/assets/images/shop/uniform.jpg',
    category: 'apparel',
    rating: 4.6,
    reviews: 15,
    bestseller: false,
    description: 'Complete training uniform with Kicking Ninja embroidery. Lightweight and durable fabric.',
    colors: ['white', 'black']
  },  {
    id: 5,
    name: 'Sports Water Bottle',
    price: 599,
    image: '/assets/images/shop/bottle.jpg',
    category: 'accessories',
    rating: 4.5,
    reviews: 22,
    bestseller: false,
    description: 'BPA-free sports water bottle with Kicking Ninja logo. 750ml capacity.',
    colors: ['red', 'blue', 'black']
  },
  {
    id: 6,
    name: 'Training Headband',
    price: 199,
    image: '/assets/images/shop/headband.jpg',
    category: 'accessories',
    rating: 4.3,
    reviews: 12,
    bestseller: false,
    description: 'Sweat-absorbing headband with elastic fit for comfortable wear during intense training.',
    colors: ['black', 'red', 'white']
  },
  {
    id: 7,
    name: 'Kicking Ninja Hoodie',
    price: 999,
    image: '/assets/images/shop/hoodie.jpg',
    category: 'apparel',
    rating: 5.0,
    reviews: 28,
    bestseller: true,
    description: 'Premium quality warm hoodie with Kicking Ninja logo. Perfect for outdoor training.',
    colors: ['black', 'navy', 'maroon']
  },
  {
    id: 8,
    name: 'Training Kickpad',
    price: 1999,
    image: '/assets/images/shop/kickpad.jpg',
    category: 'gear',
    rating: 4.8,
    reviews: 19,
    bestseller: true,
    description: 'Professional grade kickpad for training. High-density foam with durable outer material.',
    colors: ['black', 'red']
  }
];

// Product Card Component
const ProductCard: React.FC<{product: typeof products[0]}> = ({ product }) => {
  return (
    <motion.div 
      className="bg-soft-black rounded-lg overflow-hidden shadow-lg border border-accent-blue/20"
      whileHover={{ y: -10, boxShadow: "0 20px 30px rgba(0, 0, 0, 0.4)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        {product.bestseller && (
          <div className="absolute top-4 left-4 bg-bright-red text-soft-white text-xs px-2 py-1 rounded-md font-bold z-10 flex items-center">
            <FaStar className="mr-1" /> BESTSELLER
          </div>
        )}
        
        {/* Quick view button */}
        <div className="absolute inset-0 bg-soft-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <motion.button 
            className="bg-accent-blue/80 backdrop-blur-sm text-soft-white px-4 py-2 rounded-md flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEye className="mr-2" /> Quick View
          </motion.button>
        </div>
        
        {/* Product image */}
        <div className="h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
        {/* Product info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-accent-blue font-bold text-lg">{product.name}</h3>
          <span className="text-bright-red font-bold">₹{product.price}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-400'}
                size={12}
              />
            ))}
          </div>
          <span className="text-soft-white/70 text-sm">({product.reviews})</span>
        </div>
        
        {/* Available colors */}
        <div className="flex items-center mb-4">
          <span className="text-soft-white/70 text-sm mr-2">Colors:</span>
          <div className="flex space-x-1">
            {product.colors.map((color, index) => (
              <div 
                key={index}
                className="w-4 h-4 rounded-full border border-soft-white/30"
                style={{ backgroundColor: color }}
                title={color.charAt(0).toUpperCase() + color.slice(1)}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Add to cart button */}
        <motion.button 
          className="w-full bg-accent-blue text-soft-white py-2 rounded-md flex items-center justify-center font-medium hover:bg-accent-blue/80 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <FaShoppingCart className="mr-2" /> Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'apparel', name: 'Apparel' },
    { id: 'gear', name: 'Training Gear' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-deep-blue text-soft-white py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-bright-red/10 rounded-full blur-3xl"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block bg-accent-blue/20 backdrop-blur-sm text-accent-blue px-4 py-1 rounded-full mb-4 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Official Merchandise
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              KICKING NINJA <span className="text-bright-red">SHOP</span>
            </h1>
            <div className="h-1 w-20 bg-bright-red mx-auto mb-6"></div>
            <p className="text-xl">
              Gear up with official Kicking Ninja apparel, training equipment, and accessories.
            </p>
          </motion.div>
          
          {/* Shopping cart indicator */}
          <motion.div 
            className="fixed top-24 right-6 z-50 bg-bright-red rounded-full w-12 h-12 flex items-center justify-center cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(229, 8, 0, 0.5)" }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <div className="relative">
              <FaShoppingCart className="text-soft-white text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-blue text-soft-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Product Categories Navigation */}
      <section className="bg-soft-black py-8 sticky top-16 z-20 backdrop-blur-lg border-t border-b border-accent-blue/20">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map(category => (
              <motion.button
                key={category.id}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-accent-blue text-soft-white shadow-lg'
                    : 'bg-deep-blue/50 text-soft-white/70 hover:bg-deep-blue hover:text-soft-white'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {category.name}
              </motion.button>
            ))}
            
            {/* Price filter dropdown could go here */}
            <div className="relative ml-auto hidden md:block">
              <motion.button 
                className="bg-deep-blue/50 text-soft-white/70 hover:text-soft-white px-4 py-2 rounded-full flex items-center"
                whileHover={{ y: -2 }}
              >
                <FaTags className="mr-2" /> 
                Price Range
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16 bg-deep-blue min-h-screen">
        <div className="container-custom">
          {/* Category title */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-display font-bold text-accent-blue mb-2">
              {categories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-soft-white/70">
              {filteredProducts.length} products found
            </p>
          </motion.div>
          
          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 % 0.8 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-soft-white">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Collection - Limited Edition */}
      <section className="py-16 bg-soft-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue to-soft-black opacity-70"></div>
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-accent-blue">
              Limited Edition Collection
              <div className="h-1 w-20 bg-bright-red mx-auto mt-3"></div>
            </h2>
            <p className="text-lg text-soft-white/80 max-w-3xl mx-auto">
              Exclusive merchandise celebrating Saurabh's world record achievement.
              Available for a limited time only.
            </p>
          </motion.div>
          
          {/* Featured product */}
          <motion.div 
            className="bg-gradient-to-br from-deep-blue to-soft-black p-8 rounded-xl border border-accent-blue/30 shadow-2xl overflow-hidden relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Product image */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute top-0 left-0 bg-bright-red text-soft-white text-sm px-3 py-1 font-bold z-10">
                  LIMITED EDITION
                </div>
                <img 
                  src="/assets/images/shop/limited-edition.jpg" 
                  alt="Limited Edition Commemorative Set" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
              
              {/* Product info */}
              <div className="text-soft-white">
                <h3 className="text-3xl font-display font-bold mb-2 text-accent-blue">
                  World Record Commemorative Set
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="ml-2 text-soft-white/70">(14 reviews)</span>
                </div>
                  <p className="text-2xl font-bold text-bright-red mb-4">₹4999</p>
                <p className="mb-6 text-soft-white/80">
                  Celebrate Saurabh's incredible achievement with this exclusive commemorative set
                  including a signed certificate, limited edition t-shirt, and commemorative medal.
                  Only 100 sets available worldwide.
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-bright-red rounded-full mr-2"></span>
                    <p>Signed certificate of authenticity</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-bright-red rounded-full mr-2"></span>
                    <p>Premium quality commemorative t-shirt</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-bright-red rounded-full mr-2"></span>
                    <p>Limited edition commemorative medal</p>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-bright-red rounded-full mr-2"></span>
                    <p>Elegant display box</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <span className="text-soft-white/70 mr-2">Availability:</span>
                  <span className="text-bright-red font-bold">Only 27 left</span>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    className="btn-theme-primary flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCartCount(prev => prev + 1)}
                  >
                    <FaShoppingCart className="mr-1" /> 
                    Add to Cart
                  </motion.button>
                  
                  <motion.button 
                    className="bg-transparent border-2 border-accent-blue text-accent-blue px-6 py-3 rounded-md font-bold hover:bg-accent-blue hover:text-soft-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Conversion booster - Newsletter */}
      <section className="py-16 bg-deep-blue">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-soft-black/80 backdrop-blur-md rounded-xl p-8 border border-accent-blue/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display font-bold text-accent-blue mb-3">
                  Join Our Mailing List
                </h3>
                <p className="text-soft-white/80 mb-4">
                  Subscribe to get exclusive discounts, new product alerts, and training tips directly to your inbox.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-bright-red/20 text-bright-red text-xs px-2 py-1 rounded-full">10% OFF FIRST ORDER</span>
                  <span className="bg-accent-blue/20 text-accent-blue text-xs px-2 py-1 rounded-full">EXCLUSIVE OFFERS</span>
                  <span className="bg-deep-blue/40 text-soft-white text-xs px-2 py-1 rounded-full">TRAINING TIPS</span>
                </div>
              </div>
              
              <div>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-grow px-4 py-3 rounded-md bg-deep-blue/50 text-soft-white border border-accent-blue/30 focus:border-accent-blue focus:outline-none"
                  />
                  <motion.button 
                    type="submit"
                    className="btn-theme-primary whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
                <p className="text-soft-white/50 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
