// src/pages/Products/index.tsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../../components/common/ProductCard';
import { ProductFilters } from '../../components/common/ProductFilters';
import { PRODUCTS } from '../../utils/constants';
import { Button } from '../../components/common/Button';
import { 
  SparklesIcon, 
  ArrowLeftIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';
import { ProductFiltersState } from '../../types';

export const ProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<ProductFiltersState>({
    category: 'all',
    volume: 'all',
    specialFeatures: [],
    material: 'all',
    ageGroup: 'all'
  });
  const [showFilters, setShowFilters] = useState(false);



  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Volume filter (you'll need to add volume property to products)
      if (filters.volume !== 'all' && product.volume !== filters.volume) {
        return false;
      }

      // Special features filter
      if (filters.specialFeatures.length > 0) {
        const hasFeature = filters.specialFeatures.some((feature: string) => 
          product.specialFeatures?.includes(feature)
        );
        if (!hasFeature) return false;
      }

      // Material filter
      if (filters.material !== 'all' && product.material !== filters.material) {
        return false;
      }

      // Age group filter
      if (filters.ageGroup !== 'all' && product.ageGroup !== filters.ageGroup) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleFilterChange = (filterType: keyof ProductFiltersState, value: any) => {
    setFilters((prev: ProductFiltersState) => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSpecialFeatureToggle = (feature: string) => {
    setFilters((prev: ProductFiltersState) => ({
      ...prev,
      specialFeatures: prev.specialFeatures.includes(feature)
        ? prev.specialFeatures.filter((f: string) => f !== feature)
        : [...prev.specialFeatures, feature]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: 'all',
      volume: 'all',
      specialFeatures: [],
      material: 'all',
      ageGroup: 'all'
    });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Hero Banner - Top 25% */}
      <section className="relative h-[25vh] min-h-[300px] overflow-hidden pt-32">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/baby_picture.jpeg" 
            alt="Phoenix Baby Products" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                to="/" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </motion.div>

            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative inline-block mb-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white font-display">
                  Phoenix{' '}
                  <span className="text-primary-300 relative">
                    Products
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-2 -right-8 text-primary-300"
                    >
                      <SparklesIcon className="w-8 h-8" />
                    </motion.div>
                  </span>
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-primary-400 rounded-full"
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              >
                Discover our comprehensive range of premium baby products designed with safety, 
                quality, and innovation at the forefront. From feeding essentials to care products, 
                we have everything you need for your little ones.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          {/* Filter Toggle Button (Mobile) */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg"
            >
              <FunnelIcon className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <ProductFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              onSpecialFeatureToggle={handleSpecialFeatureToggle}
              onClearAll={clearAllFilters}
              resultsCount={filteredProducts.length}
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard
                  product={product}
                />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <FunnelIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your filters to see more products.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Material Safety & Health Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Material Safety & Health</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every product is made with the highest safety standards and baby-safe materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border border-green-200 text-center"
              >
                <div className="p-4 bg-green-100 rounded-xl inline-flex mb-6">
                  <ShieldCheckIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">100% BPA Free</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our plastic and silicone products are completely BPA-free and made from food-grade materials that are safe for babies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg border border-red-200 text-center"
              >
                <div className="p-4 bg-red-100 rounded-xl inline-flex mb-6">
                  <HeartIcon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Non-Toxic Materials</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use only premium, non-toxic materials including PP, PPSU, Tritan, and organic cotton, all tested for safety.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border border-blue-200 text-center"
              >
                <div className="p-4 bg-blue-100 rounded-xl inline-flex mb-6">
                  <GlobeAltIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to sustainability includes using recycled materials and eco-friendly packaging wherever possible.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Phoenix?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your OEM/ODM requirements and discover how we can help bring your baby product vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <span className="flex items-center space-x-2">
                    <span>Get In Touch</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};