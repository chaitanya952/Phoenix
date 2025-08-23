// src/pages/News/index.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEWS_ITEMS, TESTIMONIALS } from '../../utils/constants';
import { 
  CalendarIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { NewsItem } from '../../types';

export const NewsPage: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

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

  const handleImageError = (itemId: string) => {
    setImageLoadErrors(prev => new Set(prev).add(itemId));
  };

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard events for modal
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedNews) {
        setSelectedNews(null);
      }
    };

    if (selectedNews) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedNews]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="images/baby_news_two.png" 
            alt="About Phoenix Baby Products" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/Phoenix_Logo.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 to-primary-800/70"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white relative flex flex-col items-center"
          >
        
            <div className="relative inline-block z-10">
              <h1 className="relative text-4xl md:text-5xl text-white font-bold mb-6">
                Latest News & Updates
              </h1>
            </div>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay updated with Phoenix's latest developments, industry insights, and company milestones.
            </p>
          </motion.div>
        </div>
      </div>

      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                    <div className="flex items-center justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {NEWS_ITEMS.map((item, index) => (
              <motion.article
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!imageLoadErrors.has(item.id)) {
                        handleImageError(item.id);
                        target.src = '/images/Phoenix_Logo.png';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <UserIcon className="w-4 h-4" />
                      <span>{item.author}</span>
                    </div>
                    
                    <button
                      onClick={() => setSelectedNews(item)}
                      className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          )}
        </div>
      </section>

      {/* Modal for full news content */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNews(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                duration: 0.4 
              }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
                <div className="flex items-center justify-between p-6">
                  <div className="flex-1 pr-4">
                    <h3 className="text-2xl font-bold text-gray-900 line-clamp-2">{selectedNews.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        {new Date(selectedNews.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {selectedNews.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <UserIcon className="w-4 h-4" />
                        {selectedNews.author}
                      </span>
                    </div>
                  </div>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                    onClick={() => setSelectedNews(null)}
                    aria-label="Close"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(85vh-120px)] custom-scrollbar">
                <div className="p-6 space-y-6">
                  {/* Featured Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <img
                      src={selectedNews.image}
                      alt={selectedNews.title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!imageLoadErrors.has(selectedNews.id)) {
                          handleImageError(selectedNews.id);
                          target.src = '/images/Phoenix_Logo.png';
                        }
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedNews.category}
                    </div>
                  </motion.div>

                  {/* Article Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="prose prose-lg max-w-none"
                  >
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
                      {selectedNews.content}
                    </div>
                  </motion.div>

                  {/* Article Footer */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-gray-200 pt-6 mt-8"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        Published on {new Date(selectedNews.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <button
                        onClick={() => setSelectedNews(null)}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Close Article
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied customers about their experience with Phoenix products.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="text-sm text-primary-600">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;