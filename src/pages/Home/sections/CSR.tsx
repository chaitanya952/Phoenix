// src/pages/Home/sections/CSR.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  GlobeAltIcon,
  UsersIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// Custom Leaf Icon Component
const LeafIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.5 2 5.5 4.5 5.5 8c0 3.5 2.5 7 6.5 14 4-7 6.5-10.5 6.5-14 0-3.5-3-6-6.5-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c0 2-1.5 4-3 4s-3-2-3-4 1.5-4 3-4 3 2 3 4z" />
  </svg>
);

export const CSR: React.FC = () => {
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

  const sustainabilityInitiatives = [
    {
      icon: <LeafIcon className="w-8 h-8 text-green-600" />,
      title: "Eco-Friendly Materials",
      description: "Using recycled and biodegradable materials in our products and packaging",
      achievements: ["50% recycled materials", "100% biodegradable packaging", "Carbon neutral shipping"]
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8 text-blue-600" />,
      title: "Environmental Protection",
      description: "Implementing green manufacturing processes and renewable energy solutions",
      achievements: ["Solar-powered facilities", "Zero waste to landfill", "Water recycling systems"]
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-purple-600" />,
      title: "Community Support",
      description: "Supporting local communities and promoting child welfare programs",
      achievements: ["1000+ families supported", "Educational programs", "Healthcare initiatives"]
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-orange-600" />,
      title: "Education & Training",
      description: "Providing training and development opportunities for our workforce",
      achievements: ["Skills development", "Safety training", "Career advancement"]
    }
  ];

  const communityPrograms = [
    {
      title: "Safe Baby Initiative",
      description: "Educating parents about baby product safety and proper usage",
      impact: "Reached 50,000+ families"
    },
    {
      title: "Green Manufacturing",
      description: "Reducing environmental impact through sustainable practices",
      impact: "30% reduction in carbon footprint"
    },
    {
      title: "Employee Welfare",
      description: "Ensuring fair wages, safe working conditions, and growth opportunities",
      impact: "98% employee satisfaction"
    },
    {
      title: "Local Community Support",
      description: "Supporting local schools, healthcare, and infrastructure development",
      impact: "10+ community projects annually"
    }
  ];

  return (
    <section id="csr" className="section bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
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
          className="absolute -top-32 -right-32 w-64 h-64 bg-green-200/20 rounded-full"
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
          className="absolute -bottom-32 -left-32 w-48 h-48 bg-blue-200/20 rounded-full"
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
            Corporate <span className="text-green-600">Responsibility</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-green-600 rounded-full mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Committed to creating a better world for babies and families through sustainable practices and community engagement.
          </motion.p>
        </motion.div>

        {/* Sustainability Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Sustainability Initiatives</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in sustainable baby product manufacturing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {sustainabilityInitiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-50 rounded-xl">
                  {initiative.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{initiative.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">{initiative.description}</p>
              
              <div className="space-y-2">
                {initiative.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {achievement}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Community Engagement</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a positive impact in communities where we operate.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {communityPrograms.map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-xl flex-shrink-0">
                  <HandRaisedIcon className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{program.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
                    <SparklesIcon className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-green-700 font-semibold text-sm">{program.impact}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <HeartIcon className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Our Commitment to the Future</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We pledge to continue our efforts in creating sustainable products, supporting communities, 
            and building a better world for the next generation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2030</div>
              <div className="text-sm opacity-90">Carbon Neutral Goal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Sustainable Materials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-90">Families Supported</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};