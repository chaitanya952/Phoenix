// src/pages/Home/sections/Clients.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  GlobeAltIcon,
  TruckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export const Clients: React.FC = () => {
  // Array of all client images
  const clientImages = [
    '1.jpg', 'Picture1.jpg', 'Picture2.jpg', 'Picture3.jpg', 'Picture4.jpg',
    'Picture5.png', 'Picture6.png', 'Picture7.png', 'Picture8.png', 'Picture9.png',
    'Picture10.png', 'Picture11.jpg', 'Picture12.jpg', 'Picture13.png', 'Picture14.jpg',
    'Picture15.jpg', 'Picture16.jpg', 'Picture17.jpg', 'Picture18.png', 'Picture19.jpg',
    'Picture20.jpg', 'Picture21.png', 'Picture22.png', 'Picture23.png', 'Picture24.png',
    'Picture25.jpg', 'Picture26.jpg', 'Picture27.png', 'Picture28.jpg', 'Picture29.png',
    'Picture30.png', 'Picture31.png', 'Picture32.jpg', 'Picture33.png', 'Picture34.jpg',
    'Picture35.png', 'Picture36.png', 'Picture37.jpg', 'Picture38.png', 'Picture39.png',
    'Picture40.png', 'Picture41.png', 'Picture42.png', 'Picture43.png', 'Picture44.jpg',
    'Picture45.jpg'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative inline-block mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display">
              Our{' '}
              <span className="text-blue-600 relative">
                Trusted Clients
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-8 text-blue-500"
                >
                  <BuildingOfficeIcon className="w-8 h-8" />
                </motion.div>
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Leading businesses choose Phoenix for reliable, high-quality baby products and exceptional service
          </motion.p>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {clientImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group aspect-square flex items-center justify-center"
              >
                <img
                  src={`/images/trustedClients/${image}`}
                  alt={`Trusted Client ${index + 1}`}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter group-hover:brightness-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          
        </motion.div>


      </div>
    </section>
  );
};