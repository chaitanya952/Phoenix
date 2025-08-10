// src/pages/Products/ProductDetail.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../../data/catalogData';
import { Button } from '../../components/common/Button';
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

  // For catalog products, we'll use the category image as fallback
  const images = [category.image];

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
                <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
                  <img
                    src={images[selectedImageIndex]}
                    alt={product.description}
                    className="w-full h-full object-cover"
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.description}
                  </h1>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Model:</span>
                      <span className="ml-2 text-gray-600">{product.modelNo}</span>
                    </div>
                    {product.capacity && (
                      <div>
                        <span className="font-semibold text-gray-700">Capacity:</span>
                        <span className="ml-2 text-gray-600">{product.capacity}</span>
                      </div>
                    )}
                    <div>
                      <span className="font-semibold text-gray-700">Packaging:</span>
                      <span className="ml-2 text-gray-600">{product.packaging}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">MOQ:</span>
                      <span className="ml-2 text-gray-600">{product.moq.toLocaleString()} units</span>
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
              {category.products.filter((p: any) => p.modelNo !== product.modelNo)
                .slice(0, 3)
                .map((relatedProduct: any) => (
                  <Link
                    key={relatedProduct.modelNo}
                    to={`/products/${relatedProduct.modelNo}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={category.image}
                          alt={relatedProduct.description}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/Phoenix_Logo.png';
                          }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {relatedProduct.description}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Model: {relatedProduct.modelNo}
                        </p>
                        {relatedProduct.capacity && (
                          <p className="text-gray-600 text-sm">
                            Capacity: {relatedProduct.capacity}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* View All Products Button */}
            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                View All Products
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
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