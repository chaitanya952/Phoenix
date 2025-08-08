// src/pages/Home/sections/Customers.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { CUSTOMERS } from '../../../utils/constants';
import { useCountUp } from '../../../hooks/useCountUp';
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid';

const TrustMetric: React.FC<{ end: number; suffix: string; label: string; delay: number }> = ({ end, suffix, label, delay }) => {
  const { count, ref } = useCountUp({ end, suffix, duration: 2000, delay });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 font-mono">
        {count}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export const Customers: React.FC = () => {
  return (
    <section className="section bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/30 relative overflow-hidden">
      {/* Background Decorations */}
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
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-primary-100/20 to-secondary-100/20 rounded-full"
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
          className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-secondary-100/20 to-primary-100/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Trusted by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 relative">
                Global Brands
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                  className="absolute -top-2 -right-8 text-red-500"
                >
                  <HeartIcon className="w-6 h-6" />
                </motion.div>
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Building partnerships with industry leaders worldwide
          </motion.p>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <TrustMetric end={60} suffix="+" label="Countries Served" delay={200} />
            <TrustMetric end={500} suffix="+" label="Happy Clients" delay={400} />
            <TrustMetric end={98} suffix="%" label="Satisfaction Rate" delay={600} />
            <TrustMetric end={15} suffix="+" label="Years Partnership" delay={800} />
          </motion.div>
        </motion.div>

        {/* Enhanced Customer Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {CUSTOMERS.map((customer, index) => (
              <motion.div
                key={customer.id}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary-200 overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Star Rating Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-2 right-2 flex space-x-1"
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-3 h-3 text-yellow-400" />
                    ))}
                  </motion.div>
                  
                  <div className="relative z-10 flex items-center justify-center h-16">
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Customer Name on Hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-2 left-0 right-0 text-center"
                  >
                    <span className="text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded-full">
                      {customer.name}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-4 left-1/4 w-8 h-8 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-30"
          />
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-4 right-1/4 w-6 h-6 bg-gradient-to-br from-secondary-200 to-primary-200 rounded-full opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
};

export {};