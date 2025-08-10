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
      title: "Trusted Globally",
      description: "Mothers worldwide choose Phoenix"
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

        {/* Quality Assurance with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Mother tenderly feeding her baby with Phoenix bottle"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Trusted by Loving Mothers</h4>
                <p className="text-sm opacity-90">Safe, comfortable feeding moments</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Love-Inspired Quality Standards
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every Phoenix baby bottle is tested with the same meticulous care a mother shows her child. Our comprehensive quality 
              process ensures that each bottle meets not just industry standards, but the standards of a mother's heart - 
              absolute safety, perfect comfort, and unwavering reliability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm"
                >
                  <div className="p-2 bg-gray-50 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Safety Guarantees</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">100% BPA-Free Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">FDA & CE Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Anti-Colic Technology</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brief Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">International Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CERTIFICATIONS.slice(0, 4).map((cert, index) => (
              <div key={cert.id} className="text-center">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-12 h-12 mx-auto mb-2 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="text-sm font-semibold text-gray-900">{cert.name}</div>
                <div className="text-xs text-gray-600">{cert.issuer}</div>
              </div>
            ))}
          </div>
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