// src/components/common/Footer/index.tsx
// FORCE UPDATE: Phoenix Plastowares Manoharabad address and contact info - v3.0 - ${new Date().getTime()}
import React from 'react';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ClockIcon,
  ArrowUpIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  console.log('Footer rendering with updated Manoharabad address');
  
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



  return (
    <footer key="footer-v2-updated" className="relative bg-gray-900 text-white overflow-hidden">
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
              <div className="flex items-center gap-4 mb-4">
                <motion.img 
                  src="/images/Phoenix_Logo.png" 
                  alt="Phoenix Logo" 
                  className="h-12 w-auto object-contain"
                  whileHover={{ scale: 1.1 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <motion.h3 
                  className="text-3xl font-bold text-primary-400"
                  whileHover={{ color: "#60a5fa" }}
                >
                  Phoenix
                </motion.h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                20+ years of excellence in baby products manufacturing. 
                Your trusted partner for OEM & ODM services everywhere.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BuildingOfficeIcon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-gray-300">1M+ Products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-gray-300">10+ Years</span>
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
              
              {/* Navigation Links */}
              <ul className="space-y-3 mb-6">
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

              {/* Divider */}
              <div className="border-t border-gray-600/30 my-4"></div>

              {/* Download Links */}
              <div className="mb-2">
                <h5 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Downloads</h5>
                <ul className="space-y-2">
                  {[
                    { 
                      name: 'Test Reports', 
                      file: '/downloads/Phoenix-Test-Reports.docx',
                      filename: 'Phoenix-Test-Reports.docx'
                    },
                    { 
                      name: 'Certifications', 
                      file: '/downloads/Phoenix-Certifications.docx',
                      filename: 'Phoenix-Certifications.docx'
                    },
                    { 
                      name: 'Material Safety', 
                      file: '/downloads/Phoenix-Material-Safety-Technical-Sheets.docx',
                      filename: 'Phoenix-Material-Safety-Technical-Sheets.docx'
                    },
                    { 
                      name: 'QC & Lab Info', 
                      file: '/downloads/Phoenix-QC-Lab-Information.docx',
                      filename: 'Phoenix-QC-Lab-Information.docx'
                    }
                  ].map((link, index) => (
                    <motion.li key={index}>
                      <motion.a 
                        href={link.file}
                        download={link.filename}
                        whileHover={{ x: 6, color: "#60a5fa" }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400 hover:text-primary-400 transition-colors text-left flex items-center group text-sm"
                      >
                        <DocumentArrowDownIcon className="w-3 h-3 text-primary-400 mr-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
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
                    <p className="text-gray-300 text-sm">S.No 30/5&30/EE, V SRP Properties, Block C2</p>
                    <p className="text-gray-300 text-sm">beside Reliance Petrol Station, Manoharabad</p>
                    <p className="text-gray-400 text-xs mt-1">Hyderabad, Telangana 502334, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <PhoneIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">+91 73865 90043</p>
                    <p className="text-gray-300 text-sm">9000700700</p>
                    <p className="text-gray-400 text-xs mt-1">24/7 Support</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <EnvelopeIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">bda@phoenixplastowares.com</p>
                    <p className="text-gray-300 text-sm">info@phoenixplastowares.com</p>
                    <p className="text-gray-400 text-xs mt-1">Business Inquiries</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-700/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <ClockIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">Mon - Sat: Open 24 hours</p>
                    <p className="text-gray-300 text-sm">Sunday: Closed</p>
                    <p className="text-gray-400 text-xs mt-1">Business Hours (IST)</p>
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
                Made with ❤️ for babies everywhere
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