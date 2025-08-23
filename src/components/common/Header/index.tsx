// src/components/common/Header/index.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { PRODUCT_CATEGORIES } from '../../../data/catalogData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false); // track scroll direction
  const lastScrollYRef = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      // Only apply hide-on-scroll for mobile widths
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      if (isMobile) {
        setIsScrollingDown(currentY > lastScrollYRef.current && currentY > 10);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Innovation', href: '/innovation' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isScrollingDown ? '-100%' : 0, opacity: 1 }}
      transition={{ 
        duration: 0.3, 
        type: "spring", 
        stiffness: 200,
        damping: 25
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-white via-primary-50/30 to-white shadow-orange border-b border-primary-100' 
          : 'bg-gradient-to-r from-white/95 via-primary-50/20 to-white/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20 py-2">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex-shrink-0 relative"
          >
            <Link to="/" className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-primary-50/30 transition-colors duration-300">
              {/* Bird Logo (Left) */}
              <motion.img 
                src="/images/512 X 512/1.svg" 
                alt="Phoenix Bird Logo" 
                className="h-16 w-auto object-contain drop-shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/Phoenix_Logo.png';
                }}
              />
              {/* Text Logo (Right) */}
              <motion.img 
                src="/images/512 X 512/2.svg" 
                alt="Phoenix Text Logo" 
                className="h-20 w-auto object-contain drop-shadow-md -ml-4" /* Increased from h-16 to h-20 to match bird image, moved left with -ml-4 */
                initial={{ opacity: 0.9, y: 2 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  filter: ["drop-shadow(0 0 0 rgba(239, 68, 68, 0))", "drop-shadow(0 0 2px rgba(239, 68, 68, 0.3))", "drop-shadow(0 0 0 rgba(239, 68, 68, 0))"]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 3px rgba(239, 68, 68, 0.5))" }}
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
                          className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden w-64"
                        >
                          <div className="p-2">
                            <h3 className="text-xs font-semibold text-gray-900 mb-2 px-2">Product Categories</h3>
                            <div className="max-h-60 overflow-y-auto space-y-0.5">
                              {PRODUCT_CATEGORIES.map((category) => (
                                <div
                                  key={category.id}
                                  className="relative"
                                >
                                  <Link
                                    to={`/products/category/${category.id}`}
                                    className="group block px-3 py-2 rounded hover:bg-primary-50 transition-colors duration-200"
                                    onClick={() => {
                                      setIsProductsDropdownOpen(false);
                                    }}
                                  >
                                    <div className="flex items-center justify-between">
                                      <h4 className="font-medium text-sm text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                                        {category.displayName}
                                      </h4>
                                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                                        {category.products.length}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-2 border-t border-gray-100 bg-gray-50">
                            <Link
                              to="/products"
                              className="block w-full text-center py-1.5 px-3 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors duration-200 font-semibold text-xs"
                              onClick={() => {
                                setIsProductsDropdownOpen(false);
                              }}
                            >
                              View All Categories
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
                              {PRODUCT_CATEGORIES.map((category) => (
                                <motion.div
                                  key={category.id}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Link
                                    to={`/products/category/${category.id}`}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsProductsDropdownOpen(false);
                                    }}
                                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                  <div className="flex items-center gap-3">
                                    <img 
                                      src={category.image}
                                      alt={category.displayName}
                                      className="w-8 h-8 object-cover rounded flex-shrink-0"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = '/images/Phoenix_Logo.png';
                                      }}
                                    />
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-medium text-gray-900 text-sm">
                                        {category.displayName}
                                      </h5>
                                      <p className="text-xs text-gray-500 line-clamp-1">
                                        {category.products.length} products
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
                                  View All Categories
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