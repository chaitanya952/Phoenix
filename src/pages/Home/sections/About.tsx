// src/pages/Home/sections/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useCountUp } from '../../../hooks/useCountUp';
import { COMPANY_STATS, COMPANY_INFO, TEAM_MEMBERS } from '../../../utils/constants';
import { 
  BuildingOfficeIcon, 
  UsersIcon, 
  GlobeAltIcon,
  TruckIcon,
  CalendarIcon,
  HeartIcon,
  EyeIcon,
  StarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const AnimatedStatCard: React.FC<{
  icon: React.ReactNode;
  end: number;
  suffix: string;
  label: string;
  delay: number;
  color: string;
}> = ({ icon, end, suffix, label, delay, color }) => {
  const { count, ref } = useCountUp({ 
    end, 
    suffix, 
    duration: 2000, 
    delay 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      className="group cursor-pointer"
    >
      <div className="relative card card-hover p-6 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-orange mb-4 group-hover:scale-110 group-hover:shadow-orange-lg transition-all duration-300">
            {icon}
          </div>
          <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text font-display">
            {count}
          </div>
          <div className="text-secondary-600 font-medium">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
            About <span className="text-primary-600">Phoenix</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
          />
        </motion.div>



        {/* Company Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafted with a Mother's Love in Mind
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Phoenix, we understand that every feeding moment is precious. We've been crafting baby bottles 
              that honor the sacred bond between mother and child. Our products are trusted by loving mothers worldwide 
              who choose only the safest, most nurturing feeding solutions for their little ones.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Every bottle that leaves our facility carries the promise of safety, comfort, and love. 
              We ensure that every feeding moment becomes a cherished memory between you and your baby.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">FDA Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">BPA-Free Materials</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/baby_picture.jpeg"
                alt="Mother lovingly feeding her baby"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-bold mb-2">Every Moment Matters</h4>
                <p className="text-sm opacity-90">Nurturing bonds through safe feeding</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
            >
              <div className="text-2xl font-bold text-primary-600">{(COMPANY_STATS.monthlyCapacity / 1000000).toFixed(1)}M+</div>
              <div className="text-sm text-gray-600">Products</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <HeartIcon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
              <p className="text-sm text-gray-600">Our mission is to design and manufacture high-quality baby products that prioritize child safety, promote healthy development, and support modern parenting needs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <EyeIcon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
              <p className="text-sm text-gray-600">To become the most trusted and innovative baby care brand, enriching every child's early years with safe, sustainable, and thoughtfully designed products.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <StarIcon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Our Values</h4>
              <p className="text-sm text-gray-600">Love-inspired design, unwavering safety, mother's intuition, and the belief that every baby deserves the very best care.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <CalendarIcon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Our Journey</h4>
              <p className="text-sm text-gray-600">Founded with a mother's love, Phoenix has grown from a small family business to a trusted global brand, dedicated to creating safe and nurturing feeding solutions for babies worldwide.</p>
            </div>
          </div>

          <motion.button
            onClick={() => scrollToSection('why-phoenix')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-xl inline-flex items-center gap-2"
          >
            Know More About Phoenix
            <CheckCircleIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

