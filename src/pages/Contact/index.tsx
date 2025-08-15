// src/pages/Contact/index.tsx
// UPDATED: Phoenix Plastowares Manoharabad address and contact info
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { Button } from '../../components/common/Button';
// import emailjs from '@emailjs/browser';


export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  // Backend API endpoint (Vercel serverless function)
  const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL || '/api/contact';

  const [isSubmitting, setIsSubmitting] = useState(false);
  // Pre-fill form if product inquiry parameters are present
  useEffect(() => {
    const product = searchParams.get('product');
    const model = searchParams.get('model');
    
    if (product || model) {
      setFormData(prev => ({
        ...prev,
        subject: `Product Inquiry: ${product || model}`,
        message: `I am interested in learning more about ${product || 'your product'}${model ? ` (Model: ${model})` : ''}. Please provide information about:\n\n- Pricing and availability\n- Technical specifications\n- Minimum order quantities\n- Delivery timelines\n- Customization options\n\nThank you for your time.`,
        inquiryType: 'product'
      }));
    }
  }, [searchParams]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const resp = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          subject: formData.subject || `New ${formData.inquiryType} inquiry`,
          message: formData.message,
          inquiryType: formData.inquiryType,
        }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({} as any));
        const status = resp.status;
        const msg = data?.error || `Request failed (${status})`;
        throw new Error(msg);
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      const msg = err instanceof Error ? err.message : '';
      alert(`There was a problem sending your message. ${msg ? 'Details: ' + msg : 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // FORCE UPDATE: Phoenix Plastowares Manoharabad - v2.0
  const contactInfo = [
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 73865 90043", "9000700700"],
      color: "text-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      details: ["bda@phoenixplastowares.com", "info@phoenixplastowares.com"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Address",
      details: ["S.No 30/5&30/EE, V SRP Properties, Block C2", "beside Reliance Petrol Station, Manoharabad", "Hyderabad, Telangana 502334, India"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sat: Open 24 hours", "Sunday: Closed"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for contacting Phoenix. We'll get back to you within 24-48 hours.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                Back to Home
              </Button>
            </Link>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  phone: '',
                  subject: '',
                  message: '',
                  inquiryType: 'general'
                });
              }}
              className="w-full text-primary-600 hover:text-primary-700 font-semibold"
            >
              Send Another Message
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Header Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
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
            {/* Phoenix Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <img 
                src="/images/Phoenix_Logo.png" 
                alt="Phoenix Logo" 
                className="h-20 w-auto object-contain drop-shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary-600">Phoenix</span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-primary-600 rounded-full mx-auto mb-8"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Get in touch with our team of experts. 
              We're here to help bring your baby product vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`inline-flex p-4 rounded-xl ${info.bgColor} mb-4`}>
                  <div className={info.color}>
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="oem">OEM Services</option>
                      <option value="odm">ODM Services</option>
                      <option value="quote">Request Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please provide details about your inquiry, including quantities, specifications, or any specific requirements..."
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Interactive Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="p-4 bg-gradient-to-r from-primary-500 to-primary-600">
                  <h4 className="text-white font-semibold flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-2" />
                    Our Location
                  </h4>
                </div>
                <div className="h-64">
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
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-800 font-semibold">Phoenix Plastowares Private Limited</p>
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

              {/* Why Choose Phoenix */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Phoenix?</h3>
                <ul className="space-y-3">
                  {[
                    "10+ years of manufacturing experience",
                    "International quality certifications",
                    "Custom OEM/ODM solutions",
                    "24/7 customer support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Response Time</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email Inquiries:</span>
                    <span className="font-semibold text-primary-600">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone Calls:</span>
                    <span className="font-semibold text-primary-600">Immediate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quote Requests:</span>
                    <span className="font-semibold text-primary-600">2-3 business days</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};