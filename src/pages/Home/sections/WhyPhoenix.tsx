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
          
        </motion.div>

        {/* Brief Why Phoenix Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          

          
            

          {/* Raw Materials Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
          

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