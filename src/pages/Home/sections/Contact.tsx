// src/pages/Home/sections/Contact.tsx
// Updated with new Hyderabad address - Manoharabad location
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../../../utils/constants';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

export const Contact: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  // Updated contact information - Phoenix Plastowares Manoharabad
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 73865 90043", "9000700700"],
      color: "text-primary-600"
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      details: ["bda@phoenixplastowares.com", "info@phoenixplastowares.com"],
      color: "text-green-600"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Address",
      details: ["S.No 30/5&30/EE, V SRP Properties, Block C2", "beside Reliance Petrol Station, Manoharabad", "Hyderabad, Telangana 502334, India"],
      color: "text-blue-600"
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: Open 24 hours", "Sunday: Closed"],
      color: "text-purple-600"
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
    <section id="contact" className="section bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-primary-100/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-32 -left-32 w-48 h-48 bg-secondary-100/20 rounded-full"
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
            Get In <span className="text-primary-600">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to partner with us? Contact our team for inquiries, quotes, or support.
          </motion.p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gray-50 mb-4 ${info.color}`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="oem">OEM Services</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl hover:bg-primary-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <PaperAirplaneIcon className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="p-4 bg-gradient-to-r from-primary-500 to-primary-600">
                <h4 className="text-white font-semibold flex items-center">
                  <MapPinIcon className="w-5 h-5 mr-2" />
                  Our Location
                </h4>
              </div>
              <div className="h-64 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.2!2d78.4672192!3d17.7721533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb7b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPhoenix%20Plastowares%20Private%20Limited!5e0!3m2!1sen!2sin!4v1640000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Phoenix Plastowares Private Limited - Manoharabad, Hyderabad"
                ></iframe>
                {/* Fallback for map loading */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="text-center">
                    <MapPinIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Click to open in Google Maps</p>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <div className="space-y-1">
                  <p className="text-sm text-gray-800 font-semibold">Phoenix Plastowares</p>
                  <p className="text-sm text-gray-600">S.No 30/5&30/EE, V SRP Properties, Block C2</p>
                  <p className="text-sm text-gray-600">beside Reliance Petrol Station, Manoharabad</p>
                  <p className="text-sm text-gray-600">Hyderabad, Telangana 502334, India</p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <a
                    href="https://maps.app.goo.gl/GB6udZDUk8vjcJQX8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                  >
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why  Phoenix?</h4>
              <ul className="space-y-3">
                {[
                  "10+ years of manufacturing experience",
                  "International quality certifications",
                  "Custom OEM/ODM solutions",
                  "Global shipping to 60+ countries",
                  "24/7 customer support"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>



        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products and services.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* FAQ Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['All', 'Safety', 'Materials', 'Business', 'Manufacturing', 'Certifications'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FAQS.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{faq.question}</h4>
                  <span className="text-sm text-primary-600 font-medium">{faq.category}</span>
                </div>
                {openFAQ === faq.id ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === faq.id ? "auto" : 0,
                  opacity: openFAQ === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};