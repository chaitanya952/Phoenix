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
              <div className="flex items-center gap-3 mb-4">
                {/* Bird Logo (Left) */}
                <motion.img 
                  src="/images/512 X 512/1.svg" 
                  alt="Phoenix Bird Logo" 
                  className="h-14 w-auto object-contain" /* Increased from h-12 to h-14 */
                  whileHover={{ scale: 1.1 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/Phoenix_Logo.png';
                  }}
                />
                {/* Text Logo (Right) */}
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  whileHover={{ scale: 0.9 }}
                >
                  PHOENIX
                </motion.h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                10+ years of excellence in baby products manufacturing. 
                Your trusted partner for OEM & ODM services everywhere.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BuildingOfficeIcon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-gray-300">10M+ Products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <GlobeAltIcon className="w-5 h-5 text-primary-400" />
                  <span className="text-sm text-gray-300">10+ Years of Excellence</span>
                </div>
              </div>

              <div className="flex space-x-3">
                {/* Website */}
                <motion.a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                  aria-label="Visit our website"
                >
                  <GlobeAltIcon className="w-5 h-5" />
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691V11.41h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.764v2.313h3.59l-.467 3.296h-3.123V24h6.127C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2.2a2.8 2.8 0 110 5.6 2.8 2.8 0 010-5.6zM17.5 6a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </motion.a>

                {/* YouTube */}
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a2.99 2.99 0 00-2.106-2.116C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.392.57A2.99 2.99 0 00.502 6.186 31.05 31.05 0 000 12a31.05 31.05 0 00.502 5.814 2.99 2.99 0 002.106 2.116C4.5 20.5 12 20.5 12 20.5s7.5 0 9.392-.57a2.99 2.99 0 002.106-2.116A31.05 31.05 0 0024 12a31.05 31.05 0 00-.502-5.814zM9.75 15.021V8.979L15.5 12l-5.75 3.021z" />
                  </svg>
                </motion.a>

                {/* Twitter */}
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-primary-600 hover:bg-primary-500 rounded-full transition-colors shadow-lg"
                  aria-label="Twitter"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.864 9.864 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.822 4.822 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.604 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.209c9.057 0 14.01-7.496 13.995-14.235a9.935 9.935 0 002.411-2.945z" />
                  </svg>
                </motion.a>
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
                    <p className="text-gray-300 text-sm">+91 90007 00700</p>
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