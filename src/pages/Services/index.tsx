// src/pages/Services/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';
import { 
  ArrowLeftIcon,
  BuildingOfficeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  TruckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CogIcon,
  BeakerIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../components/common/Button';

const iconMap = {
  BuildingOfficeIcon: BuildingOfficeIcon,
  LightBulbIcon: LightBulbIcon,
  ShieldCheckIcon: ShieldCheckIcon,
  TruckIcon: TruckIcon,
};

export const ServicesPage: React.FC = () => {
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

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "Initial discussion to understand your requirements and vision",
      icon: <CogIcon className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Our team creates detailed designs and prototypes",
      icon: <LightBulbIcon className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure safety and quality standards",
      icon: <BeakerIcon className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Production & Delivery",
      description: "Manufacturing and global shipping to your location",
      icon: <GlobeAltIcon className="w-8 h-8" />
    }
  ];

  const capabilities = [
    {
      title: "Material Expertise",
      items: ["PP (Polypropylene)", "PPSU (Polyphenylsulfone)", "Tritan Copolyester", "Food-Grade Silicone", "Organic Cotton"]
    },
    {
      title: "Manufacturing Processes",
      items: ["Injection Molding", "Blow Molding", "Silicone Molding", "Assembly & Packaging", "Quality Control"]
    },
    {
      title: "Certifications",
      items: ["FDA Approved", "LFGB Certified", "CPC Compliant", "EN Standards", "ISO 9001:2015"]
    },
    {
      title: "Global Reach",
      items: ["60+ Countries Served", "Multiple Shipping Options", "Customs Support", "Local Partnerships", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Hero Image Section */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Phoenix Manufacturing Services" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/Phoenix_Logo.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-800/70"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4 font-display"
            >
              Our <span className="text-primary-300">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Comprehensive manufacturing solutions for premium baby products
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Header Section */}
      <section className="pt-16 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-600">Services</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
            />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From concept to delivery, Phoenix offers comprehensive manufacturing services 
              tailored to meet your specific needs. Partner with us to bring your baby product 
              vision to life with our expertise and commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || BuildingOfficeIcon;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-primary-100 rounded-xl mr-4">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to final delivery, we follow a proven process 
              to ensure your project's success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-200 transform -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="p-4 bg-primary-50 rounded-xl inline-flex mb-4">
                    <div className="text-primary-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With advanced technology and extensive expertise, we deliver exceptional results 
              across all aspects of baby product manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Quality is at the heart of everything we do. Our comprehensive quality 
                assurance program ensures that every product meets the highest standards 
                of safety and performance.
              </p>
              
              <div className="space-y-4">
                {[
                  "Raw material inspection and testing",
                  "In-process quality monitoring",
                  "Final product inspection",
                  "Third-party certification testing",
                  "Continuous improvement processes"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Quality Rate</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">Safety Tested</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Monitoring</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">ISO</div>
                    <div className="text-gray-600">Certified</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how Phoenix can help bring your baby product vision to life. 
              Our team of experts is ready to guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Get Started Today</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/products">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                  >
                    View Our Products
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};