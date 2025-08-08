// src/pages/Products/ProductDetail.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../../utils/constants';
import { Button } from '../../components/common/Button';
import { 
  ArrowLeftIcon, 
  CheckCircleIcon,
  ShieldCheckIcon,
  StarIcon,
  HeartIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const [selectedSubProduct, setSelectedSubProduct] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary-600 hover:text-primary-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const currentSubProduct = product.subProducts?.[selectedSubProduct];
  const images = [product.image, ...(currentSubProduct?.image ? [currentSubProduct.image] : [])];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Header */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-primary-600 hover:text-primary-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/products" className="text-primary-600 hover:text-primary-700">Products</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{product.name}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                  <img
                    src={images[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder-product.png';
                    }}
                  />
                  
                  {/* Image Navigation */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                      >
                        <ChevronLeftIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                      >
                        <ChevronRightIcon className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Image Thumbnails */}
                {images.length > 1 && (
                  <div className="flex space-x-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index 
                            ? 'border-primary-600' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {product.category}
                  </span>
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sub Products */}
                {product.subProducts && product.subProducts.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Variants</h3>
                    <div className="space-y-3">
                      {product.subProducts.map((subProduct, index) => (
                        <button
                          key={subProduct.id}
                          onClick={() => setSelectedSubProduct(index)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                            selectedSubProduct === index
                              ? 'border-primary-600 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">{subProduct.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">{subProduct.material}</p>
                            </div>
                            {selectedSubProduct === index && (
                              <CheckCircleIcon className="w-5 h-5 text-primary-600" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    size="lg" 
                    className="bg-primary-600 hover:bg-primary-700 text-white flex-1"
                  >
                    Request Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary-600 text-primary-600 hover:bg-primary-50 flex-1"
                  >
                    Download Catalog
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      {currentSubProduct && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {currentSubProduct.name} Specifications
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Specifications Table */}
                {currentSubProduct.specifications && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                    <div className="space-y-3">
                      {Object.entries(currentSubProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Material Properties */}
                <div className="space-y-6">
                  {currentSubProduct.transparency && (
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                      <p className="text-gray-600">{currentSubProduct.transparency}</p>
                    </div>
                  )}
                  
                  {currentSubProduct.heatResistance && (
                    <div className="bg-red-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Heat Resistance</h4>
                      <p className="text-gray-600">{currentSubProduct.heatResistance}</p>
                    </div>
                  )}
                  
                  {currentSubProduct.durability && (
                    <div className="bg-green-50 rounded-2xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Durability</h4>
                      <p className="text-gray-600">{currentSubProduct.durability}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {currentSubProduct.features && currentSubProduct.features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentSubProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                        <StarIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Products
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/products/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {relatedProduct.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in This Product?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss customization options, pricing, and how we can meet your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/products">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300"
                  >
                    View All Products
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};