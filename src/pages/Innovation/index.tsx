// src/pages/Innovation/index.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeftIcon,
  BeakerIcon,
  LightBulbIcon,
  CogIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  SparklesIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  RocketLaunchIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

export const InnovationPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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

  const innovationApproaches = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Every product is designed with real feedback from parents, pediatricians, and caregivers to ensure maximum comfort, safety, and ease of use.",
      color: "bg-blue-50 border-blue-200 text-blue-600"
    },
    {
      icon: <BeakerIcon className="w-8 h-8" />,
      title: "Advanced Materials",
      description: "We work with cutting-edge, BPA-free, food-grade materials such as Tritan™, medical-grade silicone, and eco-friendly polymers — tested for global compliance.",
      color: "bg-green-50 border-green-200 text-green-600"
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Anti-Colic & Ergonomic Engineering",
      description: "Our bottles and nipples are designed using scientific airflow systems to reduce colic, gas, and feeding discomfort.",
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: "Smart Molds & Prototyping",
      description: "Our in-house R&D team uses 3D modeling, rapid prototyping, and mold simulations to bring new ideas to life — quickly and cost-effectively.",
      color: "bg-orange-50 border-orange-200 text-orange-600"
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Eco-Innovation",
      description: "We're actively developing sustainable babyware solutions, including biodegradable plastics, recyclable packaging, and low-energy manufacturing processes.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-600"
    }
  ];

  const testingProcesses = [
    "Drop, leak, and pull-force testing",
    "Flow rate calibration and nipple strength tests",
    "Migration and sterilization compatibility validation"
  ];

  const collaborations = [
    "Pediatric experts and nutritionists",
    "Parent focus groups",
    "OEM partners and international distributors"
  ];



const upcomingDevelopmentImages = [
  "/images/Innovation & Development Pics/IMG-20250807-WA0159.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0160.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0161.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0162.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0163.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0164.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0165.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0168.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0169.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0170.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0171.jpg",
  "/images/Innovation & Development Pics/IMG-20250807-WA0172.jpg",
];

  const innovationProcess = [
    {
      step: "01",
      title: "Market & Parent Insights",
      description: "We begin by collecting real feedback from parents, pediatricians, retailers, and partners. We identify challenges in baby feeding, hygiene, and comfort, and track emerging global trends and technologies.",
      icon: <ChartBarIcon className="w-8 h-8" />,
      color: "bg-blue-600"
    },
    {
      step: "02",
      title: "Concept Design & Ideation",
      description: "Our in-house R&D and design team brainstorm solutions that solve real problems. We focus on ergonomics, safety, ease of use, and aesthetic appeal. Sketches and design proposals are created collaboratively.",
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: "bg-green-600"
    },
    {
      step: "03",
      title: "Material & Technology Evaluation",
      description: "Selection of safe, certified materials (e.g., BPA-free PP, Tritan™, silicone). Evaluation of features like anti-colic vents, temperature sensitivity, or soft grips. Research into eco-friendly alternatives and recyclable options.",
      icon: <BeakerIcon className="w-8 h-8" />,
      color: "bg-purple-600"
    },
    {
      step: "04",
      title: "Prototype Development",
      description: "Using 3D CAD modeling and rapid prototyping tools, we bring ideas to life. Functional samples are tested internally and shared with focus groups for feedback. Multiple iterations are done to refine the design.",
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      color: "bg-orange-600"
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Each prototype undergoes rigorous testing: Leak tests, Flow rate calibration, Drop tests, Sterilization resistance, Material migration (chemical safety). Products are validated to meet BIS, EN 14350, and FDA standards.",
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      color: "bg-red-600"
    },
    {
      step: "06",
      title: "Pilot Production & Tooling",
      description: "Molds are developed or modified based on final design. A pilot batch is produced for quality check and minor refinements. Packaging, labeling, and instruction manuals are developed.",
      icon: <CogIcon className="w-8 h-8" />,
      color: "bg-indigo-600"
    },
    {
      step: "07",
      title: "Launch & Market Feedback",
      description: "Product is launched through retail, distribution, and online channels. We closely monitor customer feedback, returns, and reviews. Insights from real-world use are used to improve future batches.",
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      color: "bg-pink-600"
    }
  ];

  const continuousImprovements = [
    "New color variants, materials, or accessories",
    "Technology add-ons (e.g., temperature indicators)",
    "Evolving regulatory updates and consumer needs"
  ];

  // Parallax scroll effect refs
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Modern Hero Section with Parallax */}
      <div ref={heroRef} className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroImageY }}
        >
          <img 
            src="/images/Phoenix/4.jpeg" 
            alt="Phoenix Innovation and Development" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-800/80"></div>
          
          {/* Floating elements for modern look */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary-300/20 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-orange-300/20 blur-xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: heroOpacity }}
        >
          <div className="text-center text-white max-w-5xl px-4 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider">
                PHOENIX INNOVATION CENTER
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight"
            >
              <span className="text-white">Innovation & </span><span className="text-white">Development</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8"
            >
              Pioneering the future of safe, smart, and sustainable baby products
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/30">
                  Explore Our Innovations
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <motion.div 
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
      
      {/* Header Section */}
      <section className="pt-8 pb-8 relative overflow-hidden">
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
            className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-orange-400/20 rounded-full blur-xl"
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
            
          </motion.div>
        </div>
      </section>

      {/* Innovation Approach - Modern Design */}
      <section className="py-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute -right-20 top-40 w-80 h-80 rounded-full bg-primary-100/30 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -left-20 bottom-40 w-64 h-64 rounded-full bg-orange-100/30 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium tracking-wider">
                INNOVATION METHODOLOGY
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Approach to <span className="text-primary-600">Innovation</span>
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Every innovation starts with understanding real needs and applying cutting-edge technology 
              to create meaningful solutions that enhance the lives of babies and parents.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {innovationApproaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <motion.div 
                    className={`p-5 ${approach.color} rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-gray-700">
                      {approach.icon}
                    </div>
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-primary-600 transition-colors duration-300">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{approach.description}</p>
                
                {/* Animated underline on hover */}
                <div className="w-full flex justify-center mt-4">
                  <motion.div 
                    className="h-0.5 bg-primary-500 rounded-full w-0 group-hover:w-16 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Innovation Gallery - Modern Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium tracking-wider">
                INNOVATION SHOWCASE
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Innovation in <span className="text-primary-600">Action</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our state-of-the-art facilities where innovation comes to life through 
                advanced manufacturing, rigorous testing, and cutting-edge research.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="md:col-span-5 relative group overflow-hidden rounded-2xl shadow-xl h-[500px]"
              >
                <img 
                  src="/images/Phoenix/4.jpeg"
                  alt="Manufacturing Process"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-8 left-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="p-3 bg-primary-500 rounded-lg inline-block mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <CogIcon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Advanced Manufacturing</h4>
                    <p className="text-white/80 max-w-xs">
                      Our state-of-the-art production facilities combine precision engineering with 
                      rigorous quality control to create products that exceed global standards.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-7 grid grid-cols-1 md:grid-rows-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-2xl shadow-xl h-[240px]"
                >
                  <img 
                    src="/images/Phoenix/5.jpeg"
                    alt="Quality Control"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="p-2 bg-green-500 rounded-lg inline-block mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <ShieldCheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-1">Quality Assurance</h4>
                      <p className="text-white/80 text-sm">Rigorous testing protocols ensure safety and reliability</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-2xl shadow-xl h-[240px]"
                >
                  <img 
                    src="/images/Phoenix/6.jpeg"
                    alt="Innovation Lab"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="p-2 bg-blue-500 rounded-lg inline-block mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <BeakerIcon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-1">Research & Development</h4>
                      <p className="text-white/80 text-sm">Cutting-edge innovation lab where ideas become reality</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Testing & Continuous Improvement - Modern Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute -left-20 top-40 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              y: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -right-20 bottom-40 w-80 h-80 rounded-full bg-green-100/30 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium tracking-wider">
              QUALITY ASSURANCE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Product Testing & <span className="text-primary-600">Continuous Improvement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product goes through rigorous testing to ensure safety, quality, and performance
              that exceeds international standards.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100/50 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-xl"></div>
                
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-green-500 text-white shadow-lg mb-6">
                    <ShieldCheckIcon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Rigorous Testing Protocols
                  </h3>
                  
                  <div className="space-y-5">
                    {testingProcesses.map((process, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-start bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-colors duration-300"
                      >
                        <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        </div>
                        <div>
                          <span className="text-gray-800 font-medium">{process}</span>
                          <div className="w-0 group-hover:w-full h-0.5 bg-green-500 mt-1 transition-all duration-300"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex items-center">
                    <div className="flex -space-x-2">
                      {['CIPET.jpg', 'INTERTEK.png', 'NABL.png', 'SGS.png'].map((lab, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * index, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white"
                        >
                          <img 
                            src={`/images/LABS/${lab}`}
                            alt={`Lab certification ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="ml-4 text-sm text-gray-600">Certified by international testing labs</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl shadow-xl h-64"
                  >
                    <img 
                      src="/images/Phoenix/3.jpeg"
                      alt="Testing Laboratory"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h4 className="text-xl font-bold text-white">Advanced Testing Laboratory</h4>
                        <p className="text-white/80">Where safety and quality are verified</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                <div className="col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl shadow-xl h-48"
                  >
                    <img 
                      src="/images/Phoenix/(@).jpeg"
                      alt="Quality Control Process"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h4 className="text-lg font-bold text-white">Quality Control</h4>
                    </div>
                  </motion.div>
                </div>
                
                <div className="col-span-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl shadow-xl h-48"
                  >
                    <img 
                      src="/images/Phoenix/WhatsApp Image 2025-08-10 at 08.58.53.jpeg"
                      alt="Manufacturing Excellence"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                      <h4 className="text-lg font-bold text-white">Manufacturing Excellence</h4>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Collaborative Innovation - Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 relative"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-orange-600"></div>
              
              {/* Modern geometric patterns */}
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="0.05" fill-rule="evenodd"/%3E%3C/svg%3E")',
                  backgroundSize: '180px 180px'
                }}
              />
              
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 opacity-30"
                animate={{ 
                  background: [
                    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
                    'radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
                    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)'
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm p-16">
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
                >
                  <SparklesIcon className="w-16 h-16 text-white" />
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold mb-4 text-white"
                >
                  Collaborative Innovation
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/90 max-w-3xl mx-auto"
                >
                  We collaborate with experts and partners to ensure our innovations meet real-world needs 
                  and exceed expectations in safety, comfort, and functionality.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {collaborations.map((collaboration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {index === 0 && <UserGroupIcon className="w-6 h-6 text-white" />}
                      {index === 1 && <AcademicCapIcon className="w-6 h-6 text-white" />}
                      {index === 2 && <GlobeAltIcon className="w-6 h-6 text-white" />}
                    </div>
                    <span className="text-white text-lg font-medium">{collaboration}</span>
                    <div className="mt-4 w-12 h-1 bg-white/30 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upcoming Developments - Modern Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider">
                FUTURE INNOVATIONS
              </span>
              <h3 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                Upcoming <span className="text-primary-600">Developments</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're currently working on exciting new innovations that will revolutionize baby care
                through smart technology, sustainability, and enhanced design.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {upcomingDevelopmentImages.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-40">
                    <img 
                      src={src}
                      alt={`Upcoming Development ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-primary-600">
                        <RocketLaunchIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">Upcoming Development</span>
                      </div>
                      <span className="text-xs text-gray-400">#{index + 1}</span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 - (index % 4) * 10}%` }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QC & Lab Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔬 Quality Control & Laboratory Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art laboratory ensures every product meets the highest safety and quality standards 
              through comprehensive testing protocols.
            </p>
          </motion.div>

          {/* Testing Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Material Testing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-xl mr-4">
                  <BeakerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1. Material Testing</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "BPA Test / Bisphenol A Content Test – Ensure BPA-free materials (mandatory)",
                  "Heavy Metal Content Test – Detect toxic elements (Lead, Cadmium, Arsenic, etc.)",
                  "Food Grade Certification – Compliance with IS 14625 / ISO 10993 / FDA 21 CFR",
                  "FTIR / DSC Analysis – Confirm polymer identity and thermal properties"
                ].map((test, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{test}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Physical & Functional Tests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-600 rounded-xl mr-4">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2. Physical & Functional Tests</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Leakage Test – Ensure no leaks from bottle, nipple, or valve",
                  "Drop Test – Assess breakage when dropped from standard heights",
                  "Pull/Teat Retention Test – Nipple must not detach when pulled with force",
                  "Teat Flow Rate Test – Measure liquid flow based on nipple type",
                  "Teat Hole Size Consistency – Ensures proper feeding and no choking hazard",
                  "Ventilation/Anti-Colic System Test – Test if air venting is working correctly"
                ].map((test, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{test}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Additional Testing Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Chemical Resistance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-4">
                <div className="p-3 bg-purple-100 rounded-xl inline-block mb-3">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">3. Chemical Resistance & Stability</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sterilization Compatibility (Boiling, Steam, Microwave, UV)</li>
                <li>• Dishwasher Compatibility</li>
                <li>• Migration Tests (BIS/EN 14350/FDA)</li>
              </ul>
            </motion.div>

            {/* Dimensional & Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-4">
                <div className="p-3 bg-orange-100 rounded-xl inline-block mb-3">
                  <ClipboardDocumentCheckIcon className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">4. Dimensional & Visual Checks</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Wall Thickness Uniformity</li>
                <li>• Weight Consistency</li>
                <li>• Volume Calibration Test</li>
                <li>• Visual Inspection</li>
              </ul>
            </motion.div>

            {/* Quality Checks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="text-center mb-4">
                <div className="p-3 bg-red-100 rounded-xl inline-block mb-3">
                  <AcademicCapIcon className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">5. Printing & Packaging Quality</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Adhesion Test (Tape Test)</li>
                <li>• Print Durability Test</li>
                <li>• Seal Strength Test</li>
                <li>• Labeling Check</li>
              </ul>
            </motion.div>
          </div>

          {/* Compliance Standards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-12 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-6">🏆 Compliance Standards</h3>
            <p className="text-xl opacity-90 mb-8">
              All our products are in compliance with international safety and quality standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "IS 14625", desc: "BIS Standard for plastic feeding bottles" },
                { name: "EN 14350", desc: "European standard" },
                { name: "ASTM", desc: "American standard" },
                { name: "FDA 21 CFR", desc: "U.S. standard" },
                { name: "ISO 9001/13485", desc: "Quality systems & medical devices" }
              ].map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                >
                  <div className="text-lg font-bold mb-2">{standard.name}</div>
                  <div className="text-sm opacity-80">{standard.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Process Flow - Modern Design */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute -right-40 top-40 w-96 h-96 rounded-full bg-primary-100/30 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -left-40 bottom-40 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium tracking-wider">
                INNOVATION METHODOLOGY
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our <span className="text-primary-600">Innovation</span> Process
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Innovation isn't just about new ideas — it's a structured, research-backed process that 
              transforms insights into safe, reliable, and thoughtful baby products.
            </motion.p>
          </motion.div>
          
          {/* Process Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            {/* Removed per request: Process Flow image block */}
            
            <div className="lg:hidden">
              <div className="flex flex-col items-center">
                {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: step * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-8 relative"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                      {step}
                    </div>
                    <div className="h-16 w-1 bg-primary-200 absolute -bottom-16 left-1/2 transform -translate-x-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>


          {/* Innovation Facilities Showcase - Modern Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-orange-600 z-0"></div>
              
              <motion.div 
                className="absolute inset-0 z-0 opacity-30"
                animate={{ 
                  background: [
                    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)',
                    'radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)',
                    'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)'
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-16">
                <div className="text-center mb-16">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
                  >
                    <CogIcon className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-4 text-white"
                  >
                    World-Class Innovation Facilities
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl text-white/90 max-w-3xl mx-auto"
                  >
                    Our cutting-edge facilities combine advanced technology with meticulous craftsmanship 
                    to deliver products that exceed global standards.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      image: "/images/Phoenix/4.jpeg",
                      title: "Manufacturing",
                      description: "Advanced production lines",
                      icon: <CogIcon className="w-6 h-6 text-white" />,
                      color: "bg-blue-500"
                    },
                    {
                      image: "/images/Phoenix/5.jpeg",
                      title: "Quality Control",
                      description: "Rigorous testing protocols",
                      icon: <ShieldCheckIcon className="w-6 h-6 text-white" />,
                      color: "bg-green-500"
                    },
                    {
                      image: "/images/Phoenix/6.jpeg",
                      title: "R&D Lab",
                      description: "Innovation center",
                      icon: <BeakerIcon className="w-6 h-6 text-white" />,
                      color: "bg-purple-500"
                    },
                    {
                      image: "/images/Phoenix/3.jpeg",
                      title: "Testing Lab",
                      description: "Safety validation",
                      icon: <ClipboardDocumentCheckIcon className="w-6 h-6 text-white" />,
                      color: "bg-orange-500"
                    }
                  ].map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative rounded-xl overflow-hidden shadow-xl"
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";
                          }}
                        />
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className={`${facility.color} p-3 rounded-lg inline-block mb-3 shadow-lg`}>
                          {facility.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{facility.title}</h4>
                        <p className="text-white/80 text-sm transform opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">{facility.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Process Steps - Modern Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {innovationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${
                  activeStep === index ? 'ring-2 ring-primary-500 transform scale-[1.03]' : ''
                }`}
              >
                {/* Top colored bar */}
                <div className={`${process.color} h-2 w-full`}></div>
                
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Step number with animated background */}
                    <div className="relative">
                      <motion.div 
                        className={`${process.color} text-white rounded-2xl w-20 h-20 flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, -5, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {process.step}
                        
                        {/* Animated ring */}
                        <motion.div 
                          className={`absolute inset-0 ${process.color} rounded-2xl opacity-30`}
                          animate={activeStep === index ? {
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`p-3 ${process.color.replace('bg-', 'bg-').replace('-600', '-100')} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={process.color.replace('bg-', 'text-')}>
                            {process.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{process.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">{process.description}</p>
                      
                      {/* Animated underline on hover */}
                      <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-primary-200 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continuous Innovation - Modern Design */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 mb-24"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background with animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-primary-500 z-0"></div>
              
              <motion.div 
                className="absolute inset-0 z-0 opacity-30"
                animate={{ 
                  background: [
                    'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)',
                    'radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)',
                    'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)'
                  ]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-16">
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
                  >
                    <ArrowPathIcon className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-4 text-white"
                  >
                    Continuous Innovation
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-xl text-white/90 max-w-3xl mx-auto"
                  >
                    Even after launch, we continue improving our products with ongoing enhancements and updates
                    to ensure they remain at the cutting edge of safety and functionality.
                  </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {continuousImprovements.map((improvement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                          {index === 0 && <SparklesIcon className="w-8 h-8 text-white" />}
                          {index === 1 && <LightBulbIcon className="w-8 h-8 text-white" />}
                          {index === 2 && <ShieldCheckIcon className="w-8 h-8 text-white" />}
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-4">{improvement}</h4>
                        
                        {/* Animated underline */}
                        <motion.div 
                          className="h-0.5 bg-white/50 rounded-full w-12"
                          whileHover={{ width: "80%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action - Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <img 
                  src="/images/baby_picture.jpeg" 
                  alt="Baby with Phoenix products" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-orange-900/90"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-16 text-center">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-white"
                >
                  Innovation that grows with your baby — and your brand
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-xl text-white/90 mb-12 max-w-3xl mx-auto"
                >
                  Partner with us to bring innovative baby products to life. Our comprehensive innovation 
                  process ensures your ideas become safe, reliable, and market-ready products.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-primary-600 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl"
                    >
                      Start Your Innovation Journey
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};// src/pages/Innovation/index.tsx
