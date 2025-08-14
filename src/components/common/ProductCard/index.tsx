// src/components/common/ProductCard/index.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product } from '../../../types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const hasSubProducts = product.subProducts && product.subProducts.length > 0;



  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, type: "spring", stiffness: 300 }
      }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-primary-300"
    >
      <div className="relative overflow-hidden bg-gray-50 h-56">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <LazyLoadImage
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 bg-white"
            effect="blur"
          />
        </motion.div>
        
        {/* Sub-products indicator */}
        {hasSubProducts && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-4 right-4 bg-primary-400 text-white text-xs px-2 py-1 rounded-full font-medium"
          >
            {product.subProducts!.length} variants
          </motion.div>
        )}
        
        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary-100/40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-full p-3"
          >
            <span className="text-primary-600 font-semibold text-sm">
              Know More
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-700 mb-3 group-hover:text-primary-600 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          {product.name}
        </motion.h3>
        
        <motion.p 
          className="text-gray-500 mb-4 line-clamp-2 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {product.description}
        </motion.p>
        
        {product.features && (
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-primary-50 text-primary-600 text-xs font-medium rounded-full border border-primary-200 hover:bg-primary-100 transition-colors"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to={`/products/${product.id}`}
            className="w-full bg-primary-500 text-white py-2 px-4 rounded-2xl hover:bg-primary-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Know More
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};