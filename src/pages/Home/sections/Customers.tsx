// src/pages/Home/sections/Customers.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_CLIENTS_COUNT } from '../../../utils/constants';
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
            Building partnerships with industry leaders everywhere
          </motion.p>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto"
          >
            <TrustMetric end={1} suffix="M+" label="Products Made" delay={200} />
            <TrustMetric end={TRUSTED_CLIENTS_COUNT} suffix="+" label="Trusted Clients" delay={400} />
            <TrustMetric end={99} suffix="%" label="Satisfaction Rate" delay={600} />
            <TrustMetric end={15} suffix="+" label="Years Experience" delay={800} />
          </motion.div>
        </motion.div>



        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Growing Family</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Become part of our trusted network of global partners and experience the Phoenix difference
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Partnership
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export {};