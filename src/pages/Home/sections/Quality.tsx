// src/pages/Home/sections/Quality.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS, FAQS } from '../../../utils/constants';
import { 
  ShieldCheckIcon,
  BeakerIcon,
  DocumentCheckIcon,
  AcademicCapIcon,
  CheckBadgeIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

export const Quality: React.FC = () => {
  const [openFAQ, setOpenFAQ] = React.useState<string | null>(null);

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

  const qualityFeatures = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-primary-600" />,
      title: "Safety First",
      description: "Every product undergoes rigorous safety testing to meet international standards"
    },
    {
      icon: <BeakerIcon className="w-8 h-8 text-green-600" />,
      title: "Material Testing",
      description: "Advanced laboratory testing ensures all materials are safe and non-toxic"
    },
    {
      icon: <DocumentCheckIcon className="w-8 h-8 text-blue-600" />,
      title: "Quality Control",
      description: "Multi-stage quality control processes from raw materials to finished products"
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8 text-purple-600" />,
      title: "Compliance",
      description: "Full compliance with FDA, LFGB, CPC, and other international regulations"
    }
  ];

  const qualityFAQs = FAQS.filter(faq => 
    faq.category === 'Safety' || 
    faq.category === 'Quality' || 
    faq.category === 'Certifications' ||
    faq.category === 'Materials'
  );

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
            Our commitment to quality and safety is unwavering. Every product meets the highest international standards.
          </motion.p>
        </motion.div>

        {/* Quality Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-50 rounded-xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Certifications</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized by leading international organizations for our commitment to quality and safety.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder-cert.png';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                    <CheckBadgeIcon className="w-5 h-5 text-green-500 ml-2" />
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                  <div className="text-xs text-gray-500">
                    <p className="mb-1">Issued by: {cert.issuer}</p>
                    {cert.validUntil && (
                      <p>Valid until: {new Date(cert.validUntil).toLocaleDateString()}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Manufacturing Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Excellence</h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our state-of-the-art manufacturing process ensures consistent quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Material Selection", desc: "Premium raw materials sourced from certified suppliers" },
              { step: "2", title: "Quality Testing", desc: "Comprehensive testing at every stage of production" },
              { step: "3", title: "Manufacturing", desc: "Advanced machinery and skilled craftsmanship" },
              { step: "4", title: "Final Inspection", desc: "Rigorous quality control before packaging" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-700 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Quality & Safety FAQs</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our quality standards and safety measures.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {qualityFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h4>
                  <span className="text-sm text-primary-600 font-medium">{faq.category}</span>
                </div>
                {openFAQ === faq.id ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === faq.id ? "auto" : 0,
                  opacity: openFAQ === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};