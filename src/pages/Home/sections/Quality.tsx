// src/pages/Home/sections/Quality.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../../utils/constants';
import { 
  ShieldCheckIcon,
  BeakerIcon,
  DocumentCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export const Quality: React.FC = () => {
  const scrollToQualityDetails = () => {
    // Navigate to detailed quality page
    window.location.hash = '#quality-detailed';
  };

  const qualityFeatures = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: "Mother's Protection",
      description: "Safety tested with a mother's care"
    },
    {
      icon: <BeakerIcon className="w-8 h-8 text-green-600" />,
      title: "Pure Materials",
      description: "Only the safest for your baby"
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8 text-blue-600" />,
      title: "Love in Every Detail",
      description: "Perfection in every bottle"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-purple-600" />,
      title: "Trusted Excellence",
      description: "Over 1M+ products crafted with love"
    }
  ];

  return (
    <section id="quality" className="section bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 50, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 45, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-40 -left-40 w-60 h-60 bg-green-100/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Quality & <span className="text-primary-600">Certifications</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Because a mother's love deserves nothing less than perfection. Every Phoenix bottle is crafted with the same care and attention 
            you give your precious baby - ensuring safety, comfort, and peace of mind in every feeding moment.
          </motion.p>
        </motion.div>

        {/* Quality Assurance with Image section has been removed */}

        {/* Brief Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">International Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATIONS.slice(0, 4).map((cert, index) => (
              <motion.div 
                key={cert.id} 
                className="text-center bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="h-20 flex items-center justify-center mb-3">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/Phoenix_Logo.png';
                    }}
                  />
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{cert.name}</div>
                <div className="text-xs text-gray-600">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trusted International Labs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Trusted International Labs</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { 
                name: 'CIPET', 
                fullName: 'Central Institute of Petrochemicals Engineering & Technology',
                logo: '/images/LABS/CIPET.jpg',
                color: 'text-blue-600'
              },
              { 
                name: 'NABL', 
                fullName: 'National Accreditation Board for Testing and Calibration Laboratories',
                logo: '/images/LABS/NABL.png',
                color: 'text-green-600'
              },
              { 
                name: 'INTERTEK', 
                fullName: 'Intertek Group plc',
                logo: '/images/LABS/INTERTEK.png',
                color: 'text-red-600'
              },
              { 
                name: 'SGS', 
                fullName: 'SGS SA',
                logo: '/images/LABS/SGS.png',
                color: 'text-orange-600'
              }
            ].map((lab, index) => (
              <motion.div
                key={lab.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <img
                      src={lab.logo}
                      alt={lab.name}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Show text fallback
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="${lab.color} text-lg font-bold">${lab.name}</div>`;
                        }
                      }}
                    />
                  </div>
                  <h4 className={`text-lg font-bold ${lab.color} mb-2`}>{lab.name}</h4>
                  <p className="text-xs text-gray-600 leading-tight">{lab.fullName}</p>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-3"></div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            Our products undergo rigorous testing at internationally recognized laboratories to ensure the highest safety and quality standards.
          </p>
        </motion.div>

        {/* Know More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={scrollToQualityDetails}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
          >
            Know More About Quality
            <DocumentCheckIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};