// src/pages/Innovation/index.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

  const upcomingDevelopments = [
    "Self-sterilizing bottle technology",
    "Smart sippers with temperature indicators",
    "Plant-based biodegradable babyware",
    "Enhanced ergonomic designs for small hands and first feeds"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Header Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovation & <span className="text-primary-600">Development</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
            />
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pioneering the Future of Safe, Smart, and Sustainable Baby Products. 
              At Phoenix, innovation is at the heart of everything we do. We go beyond traditional 
              manufacturing — constantly researching, testing, and evolving to create products that 
              make parenting easier and safer while enhancing a baby's early development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Approach */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              🔬 Our Approach to Innovation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every innovation starts with understanding real needs and applying cutting-edge technology 
              to create meaningful solutions.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {innovationApproaches.map((approach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${approach.color} rounded-2xl p-8 border-2 hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    <div className={approach.color.split(' ')[2]}>
                      {approach.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{approach.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Testing & Continuous Improvement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                🧪 Product Testing & Continuous Improvement
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every product goes through rigorous testing to ensure safety, quality, and performance. 
                We follow ISO 9001, EN 14350, and FDA guidelines, ensuring quality you can trust.
              </p>
              
              <div className="space-y-4">
                {testingProcesses.map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{process}</span>
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
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <img 
                  src="/images/phoenix/3.jpeg" 
                  alt="Testing Laboratory"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Testing Facility</h3>
                  <p className="text-gray-600">
                    Our state-of-the-art laboratory ensures every product meets international safety standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Collaborative Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-3xl p-12 text-white mb-16"
          >
            <div className="text-center mb-12">
              <SparklesIcon className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">🤝 Collaborative Innovation</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                We collaborate with experts and partners to ensure our innovations meet real-world needs 
                and exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collaborations.map((collaboration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 bg-white/10 rounded-xl p-6"
                >
                  <div className="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                  <span className="text-white">{collaboration}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Developments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">📈 Upcoming Developments</h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We're currently working on exciting new innovations that will revolutionize baby care.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingDevelopments.map((development, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{development}</h4>
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

      {/* Innovation Process Flow */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Innovation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovation isn't just about new ideas — it's a structured, research-backed process that 
              transforms insights into safe, reliable, and thoughtful baby products.
            </p>
          </motion.div>



          {/* Interactive Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {innovationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  activeStep === index ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                <div className="flex items-start space-x-6">
                  <div className={`${process.color} text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold flex-shrink-0`}>
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 ${process.color.replace('bg-', 'bg-').replace('-600', '-100')} rounded-lg mr-3`}>
                        <div className={process.color.replace('bg-', 'text-')}>
                          {process.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{process.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continuous Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-12"
          >
            <div className="text-center mb-8">
              <ArrowPathIcon className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🔁 Continuous Innovation</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Even after launch, we continue improving our products with ongoing enhancements and updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {continuousImprovements.map((improvement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-white rounded-xl p-6 shadow-sm"
                >
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{improvement}</span>
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
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-600 to-orange-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">✨ Innovation that grows with your baby — and your brand.</h3>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Partner with us to bring innovative baby products to life. Our comprehensive innovation 
                process ensures your ideas become safe, reliable, and market-ready products.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors"
                >
                  Start Your Innovation Journey
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};