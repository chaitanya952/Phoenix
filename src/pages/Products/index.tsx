// src/pages/Products/index.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../../data/catalogData';
import { 
  SparklesIcon, 
  ArrowLeftIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Button } from '../../components/common/Button';

export const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Baby-friendly Hero Banner */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/mother/Meal Time.jpg" 
            alt="Premium Baby Products Collection - Phoenix" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/mother/download.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 via-primary-500/60 to-secondary-600/80"></div>
        </div>

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-50 pt-8">
          <div className="container mx-auto px-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/90 hover:text-white transition-colors bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Phoenix Baby Products
              </h1>
              <p className="text-xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover our complete range of premium baby products designed with love, 
                safety, and innovation for your little one's journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-3 rounded-xl font-bold hover:bg-white/95 transition-colors shadow-lg"
                >
                  Explore Categories
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors border border-white/30"
                >
                  Safety Information
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Product Categories
            </h2>
            <div className="relative max-w-md mx-auto">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          {/* Categories Grid - Only Categories, No Individual Products */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRODUCT_CATEGORIES
              .filter(category => 
                category.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                category.description.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/products/category/${category.id}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 hover:border-primary-200">
                      {/* Product Image */}
                      <div className="relative h-40 overflow-hidden bg-gray-50">
                        <img 
                          src={category.image} 
                          alt={category.displayName}
                          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/Phoenix_Logo.png';
                          }}
                        />
                      </div>
                      
                      {/* Product Name */}
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                          {category.displayName}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </motion.div>

          {/* No results */}
          {PRODUCT_CATEGORIES.filter(category => 
            category.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.description.toLowerCase().includes(searchQuery.toLowerCase())
          ).length === 0 && (
            <div className="text-center py-16">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No categories found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search terms.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>



      {/* Safety & Trust Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Trusted by Parents Worldwide</h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Every Phoenix product meets the highest safety standards and is designed with your baby's wellbeing in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <ShieldCheckIcon className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="font-semibold mb-2">100% BPA Free</h4>
              <p className="text-sm text-white/80">Safe for your baby</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <HeartIcon className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Non-Toxic Materials</h4>
              <p className="text-sm text-white/80">Premium quality assured</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <GlobeAltIcon className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Eco-Friendly</h4>
              <p className="text-sm text-white/80">Sustainable production</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <SparklesIcon className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-sm text-white/80">Latest baby care tech</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-white/95 px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};