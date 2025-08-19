// src/pages/WhyPhoenix/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  WHY_PHOENIX, 
  WHAT_SETS_APART, 
  FACTORY_MERITS, 
  RAW_MATERIALS 
} from '../../utils/constants';
import { 
  ShieldCheckIcon,
  StarIcon,
  LightBulbIcon,
  GlobeAltIcon,
  CogIcon,
  BeakerIcon,
  PencilIcon,
  HeartIcon,
  BuildingOfficeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  BoltIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const iconMap = {
  ShieldCheckIcon,
  StarIcon,
  LightBulbIcon,
  GlobeAltIcon,
  CogIcon,
  BeakerIcon,
  PencilIcon,
  HeartIcon,
  BuildingOfficeIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  BoltIcon,
  ArrowPathIcon,
  UsersIcon
};

const getIcon = (iconName: string) => {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  return IconComponent ? <IconComponent className="w-8 h-8" /> : <StarIcon className="w-8 h-8" />;
};

export const WhyPhoenixPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
             /*comments*/
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section id="why-phoenix-detailed" className="section bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-primary-100/30 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 35, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -bottom-32 -left-32 w-48 h-48 bg-secondary-100/30 rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          {/* Main Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Why Choose <span className="text-primary-600">Phoenix</span>?
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover what makes Phoenix the trusted choice for parents worldwide
            </motion.p>
          </motion.div>

          {/* Section 1: Why Phoenix */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Why Phoenix
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_PHOENIX.reasons.map((reason, index) => (
                <motion.div
                  key={reason.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={reason.color}>
                      {getIcon(reason.icon)}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: What Sets Us Apart */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              What Sets Us Apart
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {WHAT_SETS_APART.differentiators.map((diff, index) => (
                <motion.div
                  key={diff.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-primary-100 rounded-xl flex-shrink-0">
                      <div className="text-primary-600">
                        {getIcon(diff.icon)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{diff.title}</h4>
                      <p className="text-gray-600">{diff.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {diff.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Factory Merits & Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Our Factory Merits & Features
            </motion.h2>
            
            {/* Factory Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {FACTORY_MERITS.facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center group cursor-pointer"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary-600 text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(facility.icon)}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{facility.value}</div>
                  <div className="text-sm font-semibold text-primary-700 mb-2">{facility.description}</div>
                  <div className="text-xs text-gray-600">{facility.details}</div>
                </motion.div>
              ))}
            </div>

            {/* Factory Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FACTORY_MERITS.features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
                >
                  <div className="p-3 bg-secondary-100 rounded-xl flex-shrink-0">
                    <div className="text-secondary-600">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 4: Raw Materials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Premium Raw Materials
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {RAW_MATERIALS.materials.map((material, index) => (
                <motion.div
                  key={material.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{material.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${material.color}`}>
                      Premium
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-800 mb-2">Properties:</h5>
                      <div className="space-y-1">
                        {material.properties.map((property, propIndex) => (
                          <div key={propIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-gray-600">{property}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-800 mb-2">Applications:</h5>
                      <div className="flex flex-wrap gap-1">
                        {material.applications.map((app, appIndex) => (
                          <span key={appIndex} className="px-2 py-1 bg-gray-100 text-xs text-gray-700 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-800 mb-2">Certifications:</h5>
                      <div className="flex flex-wrap gap-1">
                        {material.certifications.map((cert, certIndex) => (
                          <span key={certIndex} className="px-2 py-1 bg-green-100 text-xs text-green-700 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quality Standards */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Quality Standards</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RAW_MATERIALS.qualityStandards.map((standard, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{standard}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Partner with Phoenix?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who trust Phoenix for their baby product needs and premium quality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyPhoenixPage;