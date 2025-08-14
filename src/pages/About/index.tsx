// src/pages/About/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCountUp } from '../../hooks/useCountUp';
import { COMPANY_STATS, COMPANY_INFO, TEAM_MEMBERS, COMPANY_FACTS, MANUFACTURING_PROCESS, SERVICES_OFFERED, WHY_PHOENIX, WHAT_SETS_APART, FACTORY_MERITS, RAW_MATERIALS } from '../../utils/constants';
import { 
  BuildingOfficeIcon, 
  UsersIcon, 
  GlobeAltIcon,
  TruckIcon,
  CalendarIcon,
  HeartIcon,
  EyeIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  CogIcon,
  BeakerIcon,
  PencilIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  DocumentCheckIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  BoltIcon,
  ArrowPathIcon,
  ChevronRightIcon
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
          <div className="text-secondary-600 font-medium text-sm">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const AboutPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
            alt="About Phoenix Baby Products" 
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
              About <span className="text-primary-300">Phoenix</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Crafting premium baby products with a mother's love and a commitment to excellence
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
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

      {/* Header Section */}
      <section className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4">
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            
           
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20"
          >
            <AnimatedStatCard
              icon={<CalendarIcon className="w-8 h-8 text-white-600" />}
              end={COMPANY_STATS.years}
              suffix="+"
              label="Years of Excellence"
              delay={200}
              color="border-l-primary-500"
            />
            <AnimatedStatCard
              icon={<UsersIcon className="w-8 h-8 text-white-600" />}
              end={COMPANY_STATS.employees}
              suffix="+"
              label="Skilled Employees"
              delay={400}
              color="border-l-green-500"
            />
            <AnimatedStatCard
              icon={<BuildingOfficeIcon className="w-8 h-8 text-white-600" />}
              end={COMPANY_STATS.factoryArea}
              suffix="sqft"
              label="Factory Area"
              delay={600}
              color="border-l-blue-500"
            />
            
            <AnimatedStatCard
              icon={<TruckIcon className="w-8 h-8 text-white-600" />}
              end={COMPANY_STATS.monthlyCapacity / 1000000}
              suffix="M"
              label="Monthly Capacity"
              delay={100}
              color="border-l-orange-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on love, driven by purpose, and committed to excellence in every product we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-40 mb-4">
                  <img 
                    src="images/About/Mission.jpeg"
                    alt="Mother and baby bonding"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg mr-2">
                      <HeartIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Our Mission</h2>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Our mission is to design and manufacture high-quality baby products that prioritize child safety, promote healthy development, and support modern parenting needs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-40 mb-4">
                  <img 
                    src="images/About/Vision.jpeg"
                    alt="Baby eyes close-up"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1566004100631-35d015d6a491?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg mr-2">
                      <EyeIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Our Vision</h2>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    To become the most trusted and innovative baby care brand, enriching every child's early years with safe, sustainable, and thoughtfully designed products.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-40 mb-4">
                  <img 
                    src="/images/About/Values.jpeg"
                    alt="Mother and baby together"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg mr-2">
                      <StarIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Our Values</h2>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Love-inspired design, unwavering safety, mother's intuition, and the belief that every baby deserves the very best care.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Journey */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-40 mb-4">
                  <img 
                    src="images/About/Journey.jpeg"
                    alt="Mother and baby journey"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 flex items-center">
                    <div className="p-1.5 bg-white/20 backdrop-blur-sm rounded-lg mr-2">
                      <CalendarIcon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-white">Our Journey</h2>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Founded with a mother's love, Phoenix has grown from a small family business to a trusted global brand, dedicated to creating safe and nurturing feeding solutions for babies worldwide.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals leading Phoenix's mission to create safer, better baby products.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* First row - 4 members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM_MEMBERS.slice(0, 4).map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto bg-primary-100 border-4 border-primary-200 flex items-center justify-center">
                      <UsersIcon className="w-12 h-12 text-primary-600" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Second row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {TEAM_MEMBERS.slice(4, 7).map((member, index) => (
                <motion.div
                  key={member.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto bg-primary-100 border-4 border-primary-200 flex items-center justify-center">
                      <UsersIcon className="w-12 h-12 text-primary-600" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      {member.experience}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Facts Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company Facts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key facts and achievements that define Phoenix's excellence in baby product manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.values(COMPANY_FACTS).map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fact.title}</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">{fact.value}</p>
                <p className="text-gray-600 text-sm">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manufacturing Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive manufacturing process ensures the highest quality standards from concept to delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mb-16">
              {MANUFACTURING_PROCESS.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{process.icon}</div>
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-primary-700 transition-colors duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600 mb-4">{process.description}</p>
                  <div className="space-y-1">
                    {process.details.map((detail, idx) => (
                      <div key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                        <CheckCircleIcon className="w-3 h-3 text-green-500 mr-1" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to support your baby product needs from concept to market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_OFFERED.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-gray-500 flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Phoenix Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
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
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>

            {/* What Sets Us Apart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">What Sets Us Apart</h3>
              
              {/* Hero Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
              >
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {WHAT_SETS_APART.differentiators.map((diff, index) => (
                  <motion.div
                    key={diff.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

              {/* Trusted Suppliers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12 bg-white rounded-xl p-8 shadow-lg"
              >
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Trusted Suppliers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { name: 'RELIANCE', logo: 'text-blue-600' },
                    { name: 'WACKER', logo: 'text-red-600' },
                    { name: 'RUCO', logo: 'text-green-600' },
                    { name: 'MARABU', logo: 'text-purple-600' }
                  ].map((supplier, index) => (
                    <motion.div
                      key={supplier.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 group-hover:shadow-md">
                        <div className={`text-2xl font-bold ${supplier.logo} mb-2`}>
                          {supplier.name}
                        </div>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-gray-600 mt-6 text-sm">
                  We partner with industry-leading suppliers to ensure the highest quality raw materials for our products.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-400 to-primary-500 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Phoenix?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join the hundreds of companies who trust Phoenix for their baby product manufacturing needs and quality excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Contact Us Today
                </motion.button>
              </Link>
              <Link to="/products" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  View Our Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};