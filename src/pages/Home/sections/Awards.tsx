// src/pages/Home/sections/Awards.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../../utils/constants';
import { 
  TrophyIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

export const Awards: React.FC = () => {
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

  const awards = [
    {
      id: 1,
      title: "Excellence in Manufacturing",
      year: "2023",
      issuer: "China Baby Products Association",
      description: "Recognized for outstanding quality and innovation in baby product manufacturing",
      icon: <TrophyIcon className="w-8 h-8 text-yellow-600" />,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 2,
      title: "Safety Innovation Award",
      year: "2022",
      issuer: "International Safety Council",
      description: "Awarded for pioneering safety features in baby feeding products",
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200"
    },
    {
      id: 3,
      title: "Sustainable Manufacturing",
      year: "2023",
      issuer: "Green Manufacturing Alliance",
      description: "Recognition for environmental responsibility and sustainable practices",
      icon: <TrophyIcon className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      id: 4,
      title: "Export Excellence",
      year: "2022",
      issuer: "China Export Council",
      description: "Outstanding performance in international trade and customer satisfaction",
      icon: <StarIcon className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const achievements = [
    { metric: "25+", label: "International Awards", icon: "🏆" },
    { metric: "15+", label: "Safety Certifications", icon: "🛡️" },
    { metric: "98%", label: "Customer Satisfaction", icon: "⭐" },
    { metric: "60+", label: "Countries Served", icon: "🌍" }
  ];

  return (
    <section className="section bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
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
          className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-200/20 rounded-full"
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
          className="absolute -bottom-32 -left-32 w-48 h-48 bg-orange-200/20 rounded-full"
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
            Awards & <span className="text-yellow-600">Recognition</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-yellow-600 rounded-full mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our commitment to excellence has been recognized by industry leaders and international organizations.
          </motion.p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${award.color} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  {award.icon}
                </div>
              </div>
              <div className="text-sm font-bold text-gray-500 mb-2">{award.year}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{award.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{award.issuer}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">International Certifications</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Certified by leading international standards organizations for quality and safety.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col h-full"
            >
              <div className="mb-4 h-40 flex items-center justify-center">
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
              <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
              <p className="text-xs text-gray-500 italic mb-4">{cert.description}</p>
              <div className="mt-auto pt-3 flex items-center justify-center">
                <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm font-medium text-green-600">Valid until {cert.validUntil ? new Date(cert.validUntil).toLocaleDateString() : 'N/A'}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-3xl p-12 text-white"
        >
          <div className="text-center mb-12">
            <SparklesIcon className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Recognition by Numbers</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our achievements reflect our dedication to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <div className="text-4xl font-bold mb-2">{achievement.metric}</div>
                <div className="text-sm opacity-90">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <TrophyIcon className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Partner with Excellence</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the ranks of satisfied customers who trust our award-winning products and services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-8 py-4 rounded-xl hover:bg-yellow-700 transition-colors font-semibold text-lg"
            >
              Start Your Partnership
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};