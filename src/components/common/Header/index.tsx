// src/components/common/Header/index.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { PRODUCTS } from '../../../utils/constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        type: "spring", 
        stiffness: 100,
        damping: 20
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-orange border-b border-primary-100' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/images/Phoenix_Logo.png" 
                alt="Phoenix Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <h1 className="text-2xl font-bold gradient-text-animated transition-colors duration-300 font-display" style={{display: 'none'}}>
                Phoenix
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item, index) => {
              if (item.name === 'Products') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: 0.3 + index * 0.1, 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600 after:transition-all after:duration-300 hover:after:w-full flex items-center gap-1 ${
                          location.pathname === item.href 
                            ? 'text-primary-600 after:w-full' 
                            : 'text-secondary-700 hover:text-primary-600'
                        }`}
                      >
                        {item.name}
                        <ChevronDownIcon 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isProductsDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </Link>
                    </motion.div>

                    {/* Products Dropdown */}
                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
                        >
                          <div className="max-h-96 overflow-y-auto">
                            <div className="p-4">
                              <div className="grid gap-2">
                                {PRODUCTS.map((product) => (
                                  <Link
                                    key={product.id}
                                    to={`/products/${product.id}`}
                                    className="group block"
                                    onClick={() => setIsProductsDropdownOpen(false)}
                                  >
                                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                                      <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                                        onError={(e) => {
                                          const target = e.target as HTMLImageElement;
                                          target.src = '/images/placeholder-product.png';
                                        }}
                                      />
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 text-sm">
                                          {product.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-1">
                                          {product.description}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="p-4 pt-2 border-t border-gray-100 bg-gray-50">
                            <Link
                              to="/products"
                              className="block w-full text-center py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-sm"
                              onClick={() => setIsProductsDropdownOpen(false)}
                            >
                              View All Products
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Link
                    to={item.href}
                    className={`font-semibold transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary-500 after:to-primary-600 after:transition-all after:duration-300 hover:after:w-full ${
                      location.pathname === item.href 
                        ? 'text-primary-600 after:w-full' 
                        : 'text-secondary-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 border border-transparent hover:border-primary-200"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced Mobile Navigation with Slide Animations */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ 
                duration: 0.4, 
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="md:hidden bg-white rounded-2xl shadow-2xl mt-4 overflow-hidden border border-gray-100"
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {navigation.map((item, index) => {
                  if (item.name === 'Products') {
                    return (
                      <div key={item.name}>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ 
                            delay: index * 0.1, 
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            x: 8,
                            transition: { duration: 0.2 }
                          }}
                          className="w-full flex items-center justify-between px-5 py-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 font-semibold border-l-4 border-transparent hover:border-primary-600 shadow-sm hover:shadow-md"
                          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        >
                          {item.name}
                          <ChevronDownIcon 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              isProductsDropdownOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </motion.button>
                        
                        <AnimatePresence>
                          {isProductsDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden max-h-64 overflow-y-auto"
                            >
                              {PRODUCTS.map((product) => (
                                <motion.div
                                  key={product.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Link
                                    to={`/products/${product.id}`}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsProductsDropdownOpen(false);
                                    }}
                                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                  <div className="flex items-center gap-3">
                                    <img 
                                      src={product.image} 
                                      alt={product.name}
                                      className="w-8 h-8 object-cover rounded flex-shrink-0"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/images/placeholder-product.png';
                                      }}
                                    />
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-medium text-gray-900 text-sm">
                                        {product.name}
                                      </h5>
                                      <p className="text-xs text-gray-500 line-clamp-1">
                                        {product.description}
                                      </p>
                                    </div>
                                  </div>
                                  </Link>
                                </motion.div>
                              ))}
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                className="mt-3"
                              >
                                <Link
                                  to="/products"
                                  className="block w-full text-center py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-sm"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsProductsDropdownOpen(false);
                                  }}
                                >
                                  View All Products
                                </Link>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Link
                        to={item.href}
                        className={`block px-5 py-4 transition-all duration-300 font-semibold border-l-4 rounded-xl shadow-sm hover:shadow-md ${
                          location.pathname === item.href
                            ? 'text-primary-600 bg-primary-50 border-primary-600'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50 border-transparent hover:border-primary-600'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Enhanced dropdown footer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="px-4 pb-4"
              >
                <div className="h-px bg-primary-100 mb-4"></div>
                <div className="text-center">
                  <span className="text-sm text-primary-600 font-bold">Phoenix</span>
                  <p className="text-xs text-gray-500 mt-1">Quality Baby Products</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};