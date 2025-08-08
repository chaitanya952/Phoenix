// src/components/common/Footer/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_INFO, CERTIFICATIONS } from '../../../utils/constants';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ArrowUpIcon,
  ShieldCheckIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  const handleSocialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add your social media logic here
    console.log('Social media clicked');
  };

  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Quality', href: '#quality' },
    { name: 'Services', href: '#services' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'OEM Manufacturing',
    'ODM Solutions',
    'Quality Testing',
    'Global Shipping',
    'Custom Design',
    'Packaging Solutions'
  ];

  const certifications = CERTIFICATIONS.slice(0, 4);

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-sm"
            >
              <motion.h3 
                className="text-3xl font-bold mb-4 text-primary-400"
                whileHover={{ color: "#60a5fa" }}
              >
                Phoenix
              </motion.h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                20+ years of excellence in baby products manufacturing. 
                Your trusted partner for OEM & ODM services worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BuildingOfficeIcon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-gray-300">500+ Employees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-gray-300">60+ Countries</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button 
                  onClick={handleSocialClick}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                  aria-label="Visit our website"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 h-full">
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', id: 'home' },
                  { name: 'Products', id: 'products' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Services', id: 'services' },
                  { name: 'Contact', id: 'contact' }
                ].map((link, index) => (
                  <motion.li key={link.id}>
                    <motion.button 
                      onClick={(e) => handleLinkClick(e, link.id)}
                      whileHover={{ x: 8, color: "#60a5fa" }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-left flex items-center group"
                    >
                      <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30 h-full">
              <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <MapPinIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Zhejiang Province, China</p>
                    <p className="text-gray-400 text-xs mt-1">Manufacturing Hub</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <PhoneIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">+86 XXX XXXX XXXX</p>
                    <p className="text-gray-400 text-xs mt-1">24/7 Support</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <EnvelopeIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">info@phoenix.com</p>
                    <p className="text-gray-400 text-xs mt-1">Business Inquiries</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <ClockIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Mon - Fri: 9:00 - 18:00</p>
                    <p className="text-gray-400 text-xs mt-1">Business Hours (GMT+8)</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-sm"
              whileHover={{ color: "#9ca3af" }}
            >
              © 2024 Phoenix Baby Product Co., Ltd. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <motion.span className="text-gray-500 text-sm">
                Made with ❤️ for babies worldwide
              </motion.span>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUpIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;