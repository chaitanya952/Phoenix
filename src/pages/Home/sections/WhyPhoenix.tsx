// src/pages/Home/sections/WhyPhoenix.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  WHY_PHOENIX, 
  WHAT_SETS_APART, 
  FACTORY_MERITS, 
  RAW_MATERIALS 
} from '../../../utils/constants';
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

export const WhyPhoenix: React.FC = () => {
  const scrollToDetailedSection = () => {
    // This would navigate to a detailed Why Phoenix page or section
    window.location.hash = '#why-phoenix-detailed';
  };

  return (
    <section id="why-phoenix" className="section bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
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
            Why Choose <span className="text-primary-600">Phoenix</span>?
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            India's largest baby product manufacturing facility with unmatched expertise and quality
          </motion.p>
        </motion.div>

        {/* Brief Why Phoenix Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Key Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {WHY_PHOENIX.reasons.map((reason, index) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-4">
                  {getIcon(reason.icon)}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h4>
                <p className="text-sm text-gray-600">{reason.description.substring(0, 80)}...</p>
              </motion.div>
            ))}
          </div>

          {/* What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Sets Us Apart</h3>
            
            {/* Hero Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHAT_SETS_APART.differentiators.map((diff, index) => (
                <motion.div
                  key={diff.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-4">
                    {getIcon(diff.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{diff.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{diff.description}</p>
                  <ul className="space-y-1">
                    {diff.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-500 flex items-center">
                        <CheckCircleIcon className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Raw Materials Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Premium Materials</h3>
            
            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {RAW_MATERIALS.materials.map((material, index) => (
                <motion.div
                  key={material.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${material.color}`}>
                    {material.name}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{material.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-800 mb-2">Properties:</h5>
                    <ul className="space-y-1">
                      {material.properties.map((property, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                          {property}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-800 mb-2">Applications:</h5>
                    <div className="flex flex-wrap gap-1">
                      {material.applications.map((app, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-800 mb-2">Certifications:</h5>
                    <div className="flex flex-wrap gap-1">
                      {material.certifications.map((cert, idx) => (
                        <span key={idx} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quality Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Quality Standards</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RAW_MATERIALS.qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};