// src/pages/Products/ProductDetail.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../../data/catalogData';
import { Button } from '../../components/common/Button';
import { generateProductImagePath } from '../../utils/imageUtils';
import { 
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Find product across all categories
  let product: any = null;
  let category: any = null;
  
  for (const cat of PRODUCT_CATEGORIES) {
    const foundProduct = cat.products.find(p => p.modelNo === productId);
    if (foundProduct) {
      product = foundProduct;
      category = cat;
      break;
    }
  }

  if (!product || !category) {
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

  // Generate the product image path using the utility function
  const imagePath = generateProductImagePath(product, category);
  const images = [imagePath];
  
  // Debug logging
  console.log('Debug - Product modelNo:', product.modelNo);
  console.log('Debug - Category image:', category.image);
  console.log('Debug - Generated image path:', imagePath);

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
              <span className="text-gray-600">{product.description}</span>
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
                <div className="w-80 h-80 bg-white rounded-2xl shadow-lg overflow-hidden mb-4 mx-auto">
                  <img
                    src={images[selectedImageIndex]}
                    alt={product.description}
                    className="w-full h-full object-contain p-4"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/Phoenix_Logo.png';
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
                          alt={`${product.description} ${index + 1}`}
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {product.description}
                  </h1>
                  
                  {/* Product Details Grid */}
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {product.sNo && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">S.No:</span>
                          <span className="text-gray-600">{product.sNo}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Model No:</span>
                        <span className="text-gray-600 font-mono">{product.modelNo}</span>
                      </div>
                      {product.capacity && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Capacity:</span>
                          <span className="text-gray-600">{product.capacity}</span>
                        </div>
                      )}
                      {product.moldNos && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Mold No:</span>
                          <span className="text-gray-600">{product.moldNos}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Packaging:</span>
                        <span className="text-gray-600">{product.packaging}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">MOQ:</span>
                        <span className="text-gray-600">{product.moq.toLocaleString()} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Inner Pack:</span>
                        <span className="text-gray-600">{product.inner} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-700">Outer Pack:</span>
                        <span className="text-gray-600">{product.outer} units</span>
                      </div>
                      {product.dimensions && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Dimensions:</span>
                          <span className="text-gray-600">{product.dimensions}</span>
                        </div>
                      )}
                      {product.cbm && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">CBM:</span>
                          <span className="text-gray-600">{product.cbm}</span>
                        </div>
                      )}
                      {product.monoDimensions && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Mono Dimensions:</span>
                          <span className="text-gray-600">{product.monoDimensions}</span>
                        </div>
                      )}
                      {product.innerDimensions && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Inner Dimensions:</span>
                          <span className="text-gray-600">{product.innerDimensions}</span>
                        </div>
                      )}
                      {product.masterDimensions && (
                        <div className="flex justify-between">
                          <span className="font-semibold text-gray-700">Master Dimensions:</span>
                          <span className="text-gray-600">{product.masterDimensions}</span>
                        </div>
                      )}
                      {product.remarks && (
                        <div className="col-span-full">
                          <span className="font-semibold text-gray-700">Remarks:</span>
                          <p className="text-gray-600 mt-1">{product.remarks}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {category.displayName}
                  </span>
                </div>

                {/* Pricing Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing Information</h3>
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-semibold text-gray-700">INR Price:</span>
                        <span className="ml-2 text-lg font-bold text-primary-600">₹{product.inr}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">USD Price:</span>
                        <span className="ml-2 text-lg font-bold text-primary-600">${product.usd.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Inner Pack:</span>
                        <span className="ml-2 text-gray-600">{product.inner} units</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">Outer Pack:</span>
                        <span className="ml-2 text-gray-600">{product.outer} units</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link 
                    to={`/contact?product=${encodeURIComponent(product.description)}&model=${encodeURIComponent(product.modelNo)}`}
                    className="flex-1"
                  >
                    <Button 
                      size="lg" 
                      className="bg-primary-600 hover:bg-primary-700 text-white w-full"
                    >
                      Request Quote
                    </Button>
                  </Link>
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



      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular baby products across all categories
            </p>
          </div>

          {/* Products by Category with Animated Slide-up */}
          <div className="space-y-16">
            {/* Current Category First */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.displayName} <span className="text-primary-600">(Current Category)</span>
                  </h3>
                  <p className="text-gray-600">{category.products.length} products available</p>
                </div>
                <Link 
                  to={`/products/category/${category.id}`}
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 group"
                >
                  View All
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Current Category Products Grid */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.2
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
              >
                {category.products.filter((p: any) => p.modelNo !== product.modelNo).map((relatedProduct: any, productIndex: number) => (
                  <motion.div
                    key={relatedProduct.modelNo}
                    variants={{
                      hidden: { opacity: 0, y: 50, scale: 0.8 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          duration: 0.6,
                          ease: "easeOut",
                          type: "spring",
                          stiffness: 100
                        }
                      }
                    }}
                  >
                    <Link to={`/products/${relatedProduct.modelNo}`}>
                      <motion.div 
                        whileHover={{ y: -8, scale: 1.05 }}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      >
                        {/* Product Image */}
                        <div className="relative h-32 overflow-hidden bg-gray-50">
                          <img 
                            src={generateProductImagePath(relatedProduct, category)}
                            alt={relatedProduct.description}
                            className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/Phoenix_Logo.png';
                            }}
                          />
                        </div>

                        {/* Product Name */}
                        <div className="p-3 text-center">
                          <h4 className="text-xs font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedProduct.description}
                          </h4>
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Other Categories */}
            {PRODUCT_CATEGORIES
              .filter(cat => cat.id !== category.id)
              .map((otherCategory, categoryIndex) => (
                <motion.div
                  key={otherCategory.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: (categoryIndex + 1) * 0.3,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {otherCategory.displayName}
                      </h3>
                      <p className="text-gray-600">{otherCategory.products.length} products available</p>
                    </div>
                    <Link 
                      to={`/products/category/${otherCategory.id}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 group"
                    >
                      View All
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Products Grid with Staggered Animation */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: (categoryIndex + 1) * 0.4
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
                  >
                    {otherCategory.products.slice(0, 6).map((otherProduct: any, productIndex: number) => (
                      <motion.div
                        key={otherProduct.modelNo}
                        variants={{
                          hidden: { opacity: 0, y: 50, scale: 0.8 },
                          visible: { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1,
                            transition: {
                              duration: 0.6,
                              ease: "easeOut",
                              type: "spring",
                              stiffness: 100
                            }
                          }
                        }}
                      >
                        <Link to={`/products/${otherProduct.modelNo}`}>
                          <motion.div 
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                          >
                            {/* Product Image */}
                            <div className="relative h-32 overflow-hidden bg-gray-50">
                              <img 
                                src={generateProductImagePath(otherProduct, otherCategory)}
                                alt={otherProduct.description}
                                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = '/images/Phoenix_Logo.png';
                                }}
                              />
                            </div>

                            {/* Product Name */}
                            <div className="p-3 text-center">
                              <h4 className="text-xs font-medium text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                                {otherProduct.description}
                              </h4>
                            </div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
          </div>
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
                <Link to={`/contact?product=${encodeURIComponent(product.description)}&model=${encodeURIComponent(product.modelNo)}`}>
                  <Button 
                    size="lg" 
                    className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Get Quote Now
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