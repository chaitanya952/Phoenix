// src/pages/Home/sections/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/common/Button';
import { useCountUp } from '../../../hooks/useCountUp';
import { 
  SparklesIcon, 
  TrophyIcon, 
  GlobeAltIcon, 
  BuildingOfficeIcon,
  XMarkIcon,
  PlayIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const StatCard: React.FC<{ 
  icon: React.ReactNode; 
  end: number; 
  suffix: string; 
  label: string; 
  delay: number;
}> = ({ icon, end, suffix, label, delay }) => {
  const { count, ref } = useCountUp({ 
    end, 
    suffix, 
    duration: 2500, 
    delay 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: delay / 1000,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="relative group cursor-pointer"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-primary-100 hover:border-primary-300 hover:shadow-orange transition-all duration-300 card-hover">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-orange">
            {icon}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-bold gradient-text mb-2 font-display">
            {count}
          </div>
          <div className="text-secondary-600 text-sm font-medium">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Quote Form Component
const QuoteForm: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-2 font-display">Get a Quote</h2>
                  <p className="text-secondary-600">Tell us about your requirements and we'll get back to you</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-primary-50 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-secondary-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-secondary-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Type
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select product type</option>
                      <option value="wide-neck-bottles">Wide Neck Baby Bottles</option>
                      <option value="standard-neck-bottles">Standard Neck Bottles</option>
                      <option value="bottles-with-handles">Bottles with Handles</option>
                      <option value="sippy-cups">Sippy Cups</option>
                      <option value="feeding-accessories">Feeding Accessories</option>
                      <option value="custom-products">Custom Products</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="e.g., 1000 pieces"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your specific requirements, timeline, or any questions you have..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-4 pt-4"
                >
                  <Button
                    type="submit"
                    className="flex-1 bg-primary-600 text-white hover:bg-primary-700 py-4 text-lg font-semibold"
                  >
                    Send Quote Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Hero: React.FC = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "A Mother's Love in Every Product",
      subtitle: "Mother's Love",
      description: "Every Phoenix product is crafted with the same care and attention a mother gives her child. Because we understand that nothing is more precious than your baby's wellbeing.",
      image: "/images/mother/d4859ef1-2b89-49de-9e17-d68cb397ac60.jpg",
      features: ["Mother's Care", "Pure Love", "Gentle Touch"]
    },
    {
      title: "Bonding Moments Made Perfect",
      subtitle: "Precious Moments",
      description: "Creating beautiful memories between mother and child with products designed to enhance every feeding, every cuddle, every precious moment together.",
      image: "/images/mother/download.jpg",
      features: ["Bonding Time", "Sweet Memories", "Loving Care"]
    },
    {
      title: "Where Love Meets Innovation",
      subtitle: "Love & Innovation",
      description: "Combining a mother's intuition with cutting-edge technology to create products that nurture the beautiful bond between you and your little one.",
      image: "/images/mother/Meal Time.jpg",
      features: ["Maternal Instinct", "Innovation", "Pure Connection"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Twitter Header Size AI Image at Top */}
      <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
        <img 
          src="/images/mother/d4859ef1-2b89-49de-9e17-d68cb397ac60.jpg" 
          alt="Mother's Love - Phoenix Baby Products Header" 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/mother/download.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/60 via-primary-500/40 to-primary-600/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>

      {/* Clean Background with Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-300/30 to-primary-500/30 rounded-full blur-lg"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-20 mt-48">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="text-left"
            >
              {/* Phoenix Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex justify-start mb-6"
              >
                <img 
                  src="/images/Phoenix_Logo.png" 
                  alt="Phoenix Logo" 
                  className="h-16 w-auto object-contain drop-shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-orange"
              >
                <SparklesIcon className="w-4 h-4" />
                {heroSlides[currentSlide].subtitle}
              </motion.div>

              {/* Main Title */}
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display"
              >
                <span className="gradient-text-animated">
                  {heroSlides[currentSlide].title}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg md:text-xl text-secondary-600 mb-8 leading-relaxed max-w-2xl"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {heroSlides[currentSlide].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200 shadow-soft"
                  >
                    <CheckCircleIcon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-secondary-700">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => setIsQuoteFormOpen(true)}
                  className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl flex items-center justify-center gap-2 group"
                >
                  Get Quote Now
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl flex items-center justify-center gap-2 group">
                  <PlayIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Video
                </button>
              </motion.div>

              {/* Slide Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex gap-2 mt-8"
              >
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-primary-500 w-8' 
                        : 'bg-primary-200 hover:bg-primary-300'
                    }`}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Background Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-xl"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent-400/30 to-accent-600/30 rounded-full blur-lg"
                />

                {/* Main Image Container with Enhanced Animation */}
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  transition={{ 
                    duration: 1.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  {/* Image with Zoom Animation */}
                  <motion.img 
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary-600 shadow-lg"
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/30"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">
                      {heroSlides[currentSlide].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      Premium quality baby feeding solutions
                    </p>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-large border border-primary-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <TrophyIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-secondary-800">Award Winner</div>
                      <div className="text-xs text-secondary-600">Excellence in Manufacturing</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-large border border-primary-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <GlobeAltIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-secondary-800">Global Reach</div>
                      <div className="text-xs text-secondary-600">50+ Customers Served</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-16 bg-white/80 backdrop-blur-sm border-t border-primary-100"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard
              icon={<BuildingOfficeIcon className="w-6 h-6" />}
              end={10}
              suffix="yrs"
              label="Experience"
              delay={200}
            />
            <StatCard
              icon={<GlobeAltIcon className="w-6 h-6" />}
              end={50}
              suffix="+"
              label="Customers Served"
              delay={400}
            />
            <StatCard
              icon={<TrophyIcon className="w-6 h-6" />}
              end={1}
              suffix="M+"
              label="Products Manufactured"
              delay={600}
            />
            <StatCard
              icon={<StarIcon className="w-6 h-6" />}
              end={98}
              suffix="%"
              label="Customer Satisfaction"
              delay={800}
            />
          </div>
        </div>
      </motion.div>

      {/* Quote Form Modal */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} />
    </section>
  );
};