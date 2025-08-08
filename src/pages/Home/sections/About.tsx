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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

        {/* Company Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20"
        >
          <AnimatedStatCard
            icon={<CalendarIcon className="w-8 h-8 text-primary-600" />}
            end={COMPANY_STATS.years}
            suffix="+"
            label="Years of Excellence"
            delay={200}
            color="border-l-primary-500"
          />
          <AnimatedStatCard
            icon={<UsersIcon className="w-8 h-8 text-green-600" />}
            end={COMPANY_STATS.employees}
            suffix="+"
            label="Skilled Employees"
            delay={400}
            color="border-l-green-500"
          />
          <AnimatedStatCard
            icon={<BuildingOfficeIcon className="w-8 h-8 text-blue-600" />}
            end={COMPANY_STATS.factoryArea}
            suffix=" m²"
            label="Factory Area"
            delay={600}
            color="border-l-blue-500"
          />
          <AnimatedStatCard
            icon={<GlobeAltIcon className="w-8 h-8 text-purple-600" />}
            end={COMPANY_STATS.countries}
            suffix="+"
            label="Countries Served"
            delay={800}
            color="border-l-purple-500"
          />
          <AnimatedStatCard
            icon={<TruckIcon className="w-8 h-8 text-orange-600" />}
            end={COMPANY_STATS.monthlyCapacity / 1000000}
            suffix="M"
            label="Monthly Capacity"
            delay={1000}
            color="border-l-orange-500"
          />
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Mission & Vision */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-xl mr-4">
                  <HeartIcon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary-100 rounded-xl mr-4">
                  <EyeIcon className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values & History */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <StarIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              </div>
              <div className="space-y-3">
                {COMPANY_INFO.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* History */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {COMPANY_INFO.history}
              </p>
              <div className="flex items-center space-x-4 text-sm text-primary-700">
                <span className="font-semibold">Founded: {COMPANY_INFO.founded}</span>
                <span>•</span>
                <span className="font-semibold">HQ: {COMPANY_INFO.headquarters}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals leading Phoenix's mission to create safer, better baby products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-avatar.png';
                  }}
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  {member.experience}
                </div>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Manufacturing Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Manufacturing Process</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art manufacturing process ensures the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Design & Development", desc: "Product conceptualization and engineering", icon: "🎨" },
              { step: "2", title: "Material Selection", desc: "Premium, baby-safe materials sourcing", icon: "🧪" },
              { step: "3", title: "Production", desc: "Advanced manufacturing with quality control", icon: "⚙️" },
              { step: "4", title: "Testing & Packaging", desc: "Rigorous testing and eco-friendly packaging", icon: "📦" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Company Facts Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Company Facts</h3>
            <p className="text-xl opacity-90">
              Numbers that speak to our experience and commitment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2004", label: "Founded", icon: "🏭" },
              { number: "500+", label: "Employees", icon: "👥" },
              { number: "70,000", label: "Sq Meters Facility", icon: "🏢" },
              { number: "$30M", label: "Annual Revenue", icon: "💰" }
            ].map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{fact.icon}</div>
                <div className="text-3xl font-bold mb-2">{fact.number}</div>
                <div className="text-sm opacity-90">{fact.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

