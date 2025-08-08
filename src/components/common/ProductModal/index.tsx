// src/components/common/ProductModal/index.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Product } from '../../../types';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  const hasSubProducts = product.subProducts && product.subProducts.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="space-y-4">
                    <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                      <LazyLoadImage
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        effect="blur"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    {product.features && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sub Products */}
                    {hasSubProducts && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Variants</h3>
                        <div className="space-y-4">
                          {product.subProducts!.map((subProduct) => (
                            <div key={subProduct.id} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex items-start gap-4">
                                <LazyLoadImage
                                  src={subProduct.image}
                                  alt={subProduct.name}
                                  className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                  effect="blur"
                                />
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-900">{subProduct.name}</h4>
                                  <p className="text-sm text-gray-600 mt-1">{subProduct.description}</p>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {subProduct.features.slice(0, 3).map((feature, index) => (
                                      <span
                                        key={index}
                                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                                      >
                                        {feature}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      // Scroll to services section for inquiries
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      onClose();
                    }}
                    className="flex-1 py-3 px-6 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-semibold"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};