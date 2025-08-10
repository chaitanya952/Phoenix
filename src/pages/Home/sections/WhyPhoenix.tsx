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
          className="max-w-6xl mx-auto"
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

          {/* Phoenix vs Others Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Phoenix vs Others</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">60,000</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Sq.ft Facility</div>
                <div className="text-xs text-gray-600">vs 20,000 Sq.ft (Others)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Machines</div>
                <div className="text-xs text-gray-600">vs ~15 (Others)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">700+</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Molds</div>
                <div className="text-xs text-gray-600">vs ~100 (Others)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2M+</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">Monthly Capacity</div>
                <div className="text-xs text-gray-600">vs &lt;1M (Others)</div>
              </div>
            </div>
          </motion.div>

          {/* What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Sets Us Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {WHAT_SETS_APART.differentiators.map((diff, index) => (
                <motion.div
                  key={diff.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
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

          {/* Factory Merits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Factory Excellence</h3>
            
            {/* Facilities Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {FACTORY_MERITS.facilities.map((facility, index) => (
                <motion.div
                  key={facility.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center"
                >
                  <div className="inline-flex p-3 rounded-xl bg-primary-600 text-white mb-4">
                    {getIcon(facility.icon)}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{facility.value}</div>
                  <div className="text-sm font-semibold text-gray-800 mb-2">{facility.description}</div>
                  <div className="text-xs text-gray-600">{facility.details}</div>
                </motion.div>
              ))}
            </div>

            {/* Factory Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FACTORY_MERITS.features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <div className="inline-flex p-2 rounded-lg bg-primary-100 text-primary-600 mr-3">
                      {getIcon(feature.icon)}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">{feature.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.button
              onClick={scrollToDetailedSection}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
            >
              Know More About Phoenix
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};