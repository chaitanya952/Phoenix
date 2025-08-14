// src/pages/Home/sections/Products.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SparklesIcon, ArrowRightIcon, ShieldCheckIcon, HeartIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export const Products: React.FC = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="products" className="section bg-gradient-to-br from-white to-primary-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative inline-block mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 font-display">
              Our Main{' '}
              <span className="gradient-text-animated relative">
                Products
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-8 text-primary-400"
                >
                  <SparklesIcon className="w-6 h-6" />
                </motion.div>
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-primary-600 rounded-full"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Safe, nurturing feeding solutions designed with a mother's love. 
            <span className="font-semibold text-primary-600"> Premium quality</span> products for your baby's growth journey.
          </motion.p>
        </motion.div>

        {/* Featured Product Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8"
        >
          {[
            {
              id: 'wide-feeding',
              name: 'Wide Neck Bottles',
              image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
              volume: '210ml - 300ml',
              features: ['Anti-Colic', 'BPA-Free']
            },
            {
              id: 'std-feeding',
              name: 'Standard Neck Bottles',
              image: '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg',
              volume: '60ml - 250ml',
              features: ['Universal Fit', 'Gentle Flow']
            },
            {
              id: 'sippy-cups',
              name: 'Sippy Cups',
              image: '/images/Sippy Cups JPEG/SP0001 - 150ml.jpg',
              volume: '150ml - 350ml',
              features: ['Spill-Proof', 'Growth Support']
            },
            {
              id: 'cutlery',
              name: 'Cutlery & Tableware',
              image: '/images/Cutlery & Tableware JPEG/CT0001.JPG',
              volume: 'All Sizes',
              features: ['Safe Materials', 'Easy Grip']
            },
            {
              id: 'teethers',
              name: 'Teethers & Pacifiers',
              image: '/images/Teethers & Pacifiers JPEG/TP0001.JPG',
              volume: 'All Ages',
              features: ['Soothing', 'Safe Design']
            },
            {
              id: 'accessories',
              name: 'Accessories',
              image: '/images/Phoenix_Logo.png',
              volume: 'Various',
              features: ['Quality', 'Durable']
            }
          ].map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link to={`/products/category/${product.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <div className="relative h-40 overflow-hidden bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/Phoenix_Logo.png';
                      }}
                    />
                    <div className="absolute top-2 right-2 bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.volume}
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-gray-700 mb-1 line-clamp-1">{product.name}</h4>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="bg-primary-50 text-primary-600 px-1.5 py-0.5 rounded text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-xs group-hover:text-primary-700">View Details</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Safety Highlights & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-gray-900 text-sm">BPA Free</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-gray-900 text-sm">Non-Toxic</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobeAltIcon className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-900 text-sm">Eco-Friendly</span>
            </div>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-4 py-2 text-sm font-semibold rounded-lg inline-flex items-center gap-2"
              >
                View All Products
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};