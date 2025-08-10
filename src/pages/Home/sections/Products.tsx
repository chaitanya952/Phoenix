// src/pages/Home/sections/Products.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../../utils/constants';
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
          className="text-center mb-16"
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
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Every Phoenix product is designed with a mother's love in mind. We create 
            <span className="font-semibold text-primary-600"> safe, nurturing feeding solutions</span> that honor the precious bond between mother and baby. 
            Our comprehensive range includes <span className="font-semibold text-secondary-600">wide neck bottles, gentle sippy cups, and caring accessories</span> 
            trusted by loving mothers in 60+ countries worldwide.
          </motion.p>
        </motion.div>

        {/* Featured Product Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              id: '1',
              name: 'Wide Neck Baby Bottles',
              description: 'Experience the joy of feeding with our premium wide neck bottles. Designed for easy cleaning and comfortable feeding, bringing mother and baby closer together.',
              image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
              volume: '150ml - 330ml',
              features: ['Anti-Colic', 'BPA-Free', 'Wide Opening']
            },
            {
              id: '2',
              name: 'Standard Neck Bottles',
              description: 'Classic feeding bottles that have nurtured generations. Reliable, safe, and designed with a mother\'s intuition for perfect feeding moments.',
              image: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
              volume: '125ml - 250ml',
              features: ['Universal Fit', 'Gentle Flow', 'Trusted Design']
            },
            {
              id: '3',
              name: 'Bottles with Handles',
              description: 'Watch your little one grow independent with our ergonomic handled bottles. Perfect for tiny hands learning to self-feed with confidence.',
              image: 'https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
              volume: '150ml - 300ml',
              features: ['Easy Grip', 'Independence', 'Safe Learning']
            },
            {
              id: '4',
              name: 'Sippy Cups',
              description: 'Celebrate your toddler\'s milestones with spill-proof sippy cups. Making the transition from bottle to cup a joyful journey for both mother and child.',
              image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
              volume: '150ml - 200ml',
              features: ['Spill-Proof', 'Milestone Ready', 'Growth Support']
            },
            {
              id: '5',
              name: 'Feeding Accessories',
              description: 'Complete your feeding journey with our thoughtfully designed accessories. Every piece crafted to make feeding time special and stress-free.',
              image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
              volume: 'Various Sizes',
              features: ['Complete Care', 'Mother\'s Choice', 'Premium Quality']
            },
            {
              id: '6',
              name: 'Care & Sterilization',
              description: 'Protect your baby with our advanced sterilization solutions. Because a mother\'s love means ensuring every bottle is perfectly clean and safe.',
              image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
              volume: 'Multi-Bottle',
              features: ['Perfect Hygiene', 'Peace of Mind', 'Advanced Care']
            }
          ].map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.volume}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold">Learn More</span>
                    <ArrowRightIcon className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Know More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Brief Safety Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Safety & Quality Assured</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <ShieldCheckIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">100% BPA Free</div>
              <div className="text-sm text-gray-600">Food-grade materials</div>
            </div>
            <div className="text-center">
              <HeartIcon className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Non-Toxic</div>
              <div className="text-sm text-gray-600">Premium materials</div>
            </div>
            <div className="text-center">
              <GlobeAltIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Eco-Friendly</div>
              <div className="text-sm text-gray-600">Sustainable production</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};