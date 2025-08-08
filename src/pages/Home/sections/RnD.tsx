// src/pages/Home/sections/RnD.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { RESEARCH_DEVELOPMENT } from '../../../utils/constants';
import { 
  BeakerIcon,
  LightBulbIcon,
  AcademicCapIcon,
  ChartBarIcon,
  CogIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const RnD: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const researchAreas = [
    {
      icon: <BeakerIcon className="w-8 h-8 text-blue-600" />,
      title: "Material Science",
      description: "Developing safer, more durable materials for baby products",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <LightBulbIcon className="w-8 h-8 text-yellow-600" />,
      title: "Product Innovation",
      description: "Creating next-generation baby products with smart features",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-green-600" />,
      title: "Safety Research",
      description: "Advancing safety standards through rigorous testing",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-purple-600" />,
      title: "User Experience",
      description: "Understanding parent and baby needs through research",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="rnd" className="section bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
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
          className="absolute -top-32 -right-32 w-64 h-64 bg-blue-200/20 rounded-full"
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
          className="absolute -bottom-32 -left-32 w-48 h-48 bg-indigo-200/20 rounded-full"
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
            Research & <span className="text-blue-600">Development</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 rounded-full mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering innovation in baby product safety, design, and functionality through cutting-edge research.
          </motion.p>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${area.color} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  {area.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h4>
              <p className="text-gray-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Innovation & Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl mr-4">
                  <CogIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Innovation & Design</h3>
              </div>
              <div className="space-y-4">
                {RESEARCH_DEVELOPMENT.innovation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <ChartBarIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Evidence-Based Claims</h3>
              </div>
              <div className="space-y-4">
                {RESEARCH_DEVELOPMENT.evidenceBased.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Research Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white mb-16"
        >
          <div className="text-center mb-12">
            <SparklesIcon className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Research Partnerships</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Collaborating with leading institutions to advance baby product safety and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_DEVELOPMENT.partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/10 rounded-xl p-6"
              >
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                <span className="text-white">{partnership}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* R&D Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">R&D by the Numbers</h3>
            <p className="text-xl text-gray-600">
              Our commitment to innovation and research excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "15%", label: "Revenue invested in R&D", color: "text-blue-600" },
              { number: "50+", label: "Research projects annually", color: "text-green-600" },
              { number: "25+", label: "Patents and innovations", color: "text-purple-600" },
              { number: "10+", label: "Research partnerships", color: "text-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};