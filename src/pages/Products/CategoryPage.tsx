// src/pages/Products/CategoryPage.tsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeftIcon, 
  SparklesIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import { getCategoryById, CatalogProduct } from '../../data/catalogData';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high' | 'model'>('name');

  const category = getCategoryById(categoryId || '');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    if (!category) return [];

    let filtered = category.products.filter(product =>
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.modelNo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.description.localeCompare(b.description);
        case 'price-low':
          return a.usd - b.usd;
        case 'price-high':
          return b.usd - a.usd;
        case 'model':
          return a.modelNo.localeCompare(b.modelNo);
        default:
          return 0;
      }
    });

    return filtered;
  }, [category, searchQuery, sortBy]);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-primary-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link to="/products" className="text-primary-600 hover:text-primary-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-gradient-to-br from-white to-primary-50">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden pt-32">
        <div className="absolute inset-0">
          <img 
            src={category.image} 
            alt={category.displayName}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/mother/d4859ef1-2b89-49de-9e17-d68cb397ac60.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                to="/products" 
                className="inline-flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to All Products
              </Link>
            </motion.div>

            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative inline-block mb-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white font-display">
                  {category.displayName}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-8 text-primary-300"
                  >
                    <SparklesIcon className="w-8 h-8" />
                  </motion.div>
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-1 bg-primary-400 rounded-full"
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed"
              >
                {category.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Sort and Filter Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="model">Sort by Model</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>

              <div className="text-sm text-gray-600">
                {filteredAndSortedProducts.length} products found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredAndSortedProducts.map((product, index) => (
              <motion.div key={`${product.modelNo}-${index}`} variants={itemVariants}>
                <ProductCard product={product} category={category} />
              </motion.div>
            ))}
          </motion.div>

          {filteredAndSortedProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search terms.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Clear Search
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  product: CatalogProduct;
  category: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, category }) => {

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
      {/* Product Image */}
      <Link to={`/products/${product.modelNo}`}>
        <div className="relative h-48 overflow-hidden bg-gray-100 cursor-pointer">
        <img 
          src={`/images/${category.name} JPEG/${product.modelNo}.jpg`}
          alt={product.description}
          className="w-full h-full object-contain p-4 bg-white group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/Phoenix_Logo.png';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          ${product.usd.toFixed(2)}
        </div>

        {/* Capacity Badge */}
        {product.capacity && (
          <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
            {product.capacity}
          </div>
        )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-3">
          <Link to={`/products/${product.modelNo}`}>
            <h4 className="text-lg font-bold text-gray-900 mb-1 hover:text-primary-600 transition-colors cursor-pointer">{product.description}</h4>
          </Link>
          <p className="text-sm text-gray-500 font-mono">{product.modelNo}</p>
        </div>

        {/* Key Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">MOQ:</span>
            <span className="font-semibold">{product.moq.toLocaleString()} pcs</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Packaging:</span>
            <span className="font-semibold">{product.packaging}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Inner/Outer:</span>
            <span className="font-semibold">{product.inner}/{product.outer}</span>
          </div>
        </div>

        {/* Price Display */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-xs text-gray-500">USD</div>
            <div className="text-lg font-bold text-primary-600">${product.usd.toFixed(2)}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-500">INR</div>
            <div className="text-lg font-bold text-secondary-600">₹{product.inr}</div>
          </div>
        </div>

        {/* Learn More Button */}
        <Link 
          to={`/products/${product.modelNo}`}
          className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium flex items-center justify-center gap-2"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};