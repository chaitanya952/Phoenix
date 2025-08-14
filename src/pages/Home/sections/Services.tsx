// src/pages/Home/sections/Services.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../../utils/constants';
import { 
  BuildingOfficeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  TruckIcon,
  SwatchIcon, 
  PrinterIcon, 
  CubeIcon, 
  PencilSquareIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      BuildingOfficeIcon,
      LightBulbIcon,
      ShieldCheckIcon,
      TruckIcon
    };
    const IconComponent = iconMap[iconName] || BuildingOfficeIcon;
    return <IconComponent className="w-8 h-8" />;
  };

  const additionalServices = [
    {
      id: 5,
      title: 'Custom Colors',
      description: 'Varieties of colors are available, you can customize the colors you need according to the Pantone color card',
      icon: SwatchIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 6,
      title: 'Printing Services',
      description: 'We provide customized printing services, including: screen printing, pad printing, thermal transfer, UV 3D color printing',
      icon: PrinterIcon,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 7,
      title: 'Packaging Solutions',
      description: 'Blister, clamshell, pdg, color box, cardboard box, etc. is available or we can also help you design the packaging',
      icon: CubeIcon,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 8,
      title: 'Design Services',
      description: 'Our professional design team can help you create unique and attractive product designs that stand out in the market',
      icon: PencilSquareIcon,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

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

  return (
    <section id="services" className="relative overflow-hidden">

      {/* Background Elements with Image */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
            alt="Services background" 
            className="w-full h-full object-cover opacity-15"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/Phoenix_Logo.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/90 to-white/90"></div>
        </div>
        
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
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
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-xl"
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
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block">
            Core Services
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-primary-600 rounded-full"
            />
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every service we offer is designed with one goal: creating products that make precious moments between you and your baby even more special.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card card-hover p-8 text-center group bg-white/90 backdrop-blur-sm shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-orange group-hover:shadow-orange-lg transition-all duration-300">
                  {getIcon(service.icon)}
                </div>
              </div>
              <h4 className="text-xl font-bold text-secondary-900 mb-4 font-display">{service.title}</h4>
              <p className="text-secondary-600 leading-relaxed mb-6">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-secondary-600">
                    <CheckCircleIcon className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block" style={{ transform: 'none', writingMode: 'horizontal-tb', textOrientation: 'mixed' }}>
            Additional Services
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-2 left-0 h-1 bg-primary-600 rounded-full"
            />
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The finishing touches that transform good products into extraordinary experiences for babies and parents alike.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {additionalServices.map((service, index) => {
            const IconComponent = service.icon;
            const serviceImages = [
              '/images/Phoenix/printing and packaging/A1.jpeg', // Custom Colors
              '/images/Phoenix/printing and packaging/A2.jpeg', // Printing Services
              '/images/Phoenix/printing and packaging/A3.jpeg', // Packaging Solutions
              '/images/Phoenix/printing and packaging/A4.jpeg'  // Design Services
            ];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-80 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className={`p-3 ${service.bgColor} rounded-xl`}>
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-75">Service #{service.id - 4}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl font-bold mb-3 font-display text-white">{service.title}</h4>
                    <p className="text-white/90 leading-relaxed text-sm mb-4">{service.description}</p>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-sm font-semibold"
                    >
                      Learn More
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Banner section has been removed */}

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold gradient-text mb-4 font-display">Our Process</h3>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Every step carefully crafted with the love and attention your baby's products deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Understanding your requirements and vision" },
              { step: "2", title: "Design", desc: "Creating detailed designs and prototypes" },
              { step: "3", title: "Development", desc: "Engineering and testing the product" },
              { step: "4", title: "Production", desc: "Manufacturing with quality control" },
              { step: "5", title: "Delivery", desc: "Packaging and global shipping" }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-orange animate-pulse-glow">
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-secondary-900 mb-2 font-display">{process.title}</h4>
                <p className="text-secondary-600 text-sm">{process.desc}</p>
                

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
          className="text-center"
        >
          <div className="card p-12 glass-orange">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-orange-lg animate-float">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold gradient-text mb-4 font-display">Ready to Start Your Project?</h3>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your baby product vision to life with our comprehensive services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 text-lg flex items-center gap-2 mx-auto"
            >
              Get Started Today
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};