'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, Star, ChevronRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { allProducts, Product } from '@/components/products-data';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isClient, setIsClient] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
    setFilteredProducts(allProducts);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    setIsSearching(true);
    const timer = setTimeout(() => {
      const results = allProducts.filter(product =>
        searchTerm.toLowerCase().split(' ').every(term =>
          product.name.toLowerCase().includes(term) ||
          product.brand.toLowerCase().includes(term) ||
          (product.category && product.category.toLowerCase().includes(term)) ||
          (product.specs && product.specs.some(spec => spec.toLowerCase().includes(term)))
        )
      );
      setFilteredProducts(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, isClient]);

  const clearSearch = () => {
    setSearchTerm('');
    searchRef.current?.focus();
  };

  const featuredProducts = allProducts.filter(p => p.featured);
  const trendingProducts = allProducts.filter(p => p.trending);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Discover Premium Tech
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Search through our curated collection of professional-grade products
            </p>
          </motion.div>

          {/* Premium Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="relative shadow-xl rounded-lg overflow-hidden">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-300" />
              <input
                ref={searchRef}
                type="text"
                placeholder="Try 'Logitech mouse', 'mechanical keyboard', or '4K monitor'..."
                className="w-full py-4 pl-12 pr-12 bg-white/5 backdrop-blur-md border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30 text-white placeholder-blue-200 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-300 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Dynamic Results Section */}
        {searchTerm ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">
                Results for <span className="text-blue-600">&quot;{searchTerm}&quot;</span>
              </h2>
              <p className="text-gray-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
              </p>
            </div>

            {isSearching ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  <Search className="h-10 w-10 text-gray-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Try different keywords or browse our categories below
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Featured Products Section */}
            <section className="mb-20">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  Editor&apos;s Picks
                </h2>
                <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>

            {/* Trending Products Section */}
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  Trending Now
                </h2>
                <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center">
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Newsletter CTA */}
      <NewsletterCTA />

    </div>
  );
}

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-contain p-6 transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
          {product.brand}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          {product.rating && (
            <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
              <span className="text-blue-600 text-sm font-medium">{product.rating}</span>
              <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {product.specs && product.specs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.specs.slice(0, 3).map((spec) => (
              <span key={spec} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                {spec}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center">
            Details <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Categories Section Component
const CategoriesSection = () => {
  const categories = [
    { name: 'Laptops', icon: '💻' },
    { name: 'Monitors', icon: '🖥️' },
    { name: 'Printers', icon: '🖨️' },
    { name: 'Networking', icon: '🛜' },
    { name: 'Storage', icon: '💾' },
    { name: 'Power', icon: '🔌' },
    { name: 'Peripherals', icon: '🖱️' },
    { name: 'Software', icon: '📊' }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-xl">
                {category.icon}
              </div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">Shop {category.name.toLowerCase()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Newsletter CTA Component
const NewsletterCTA = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Exclusive Tech Deals</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for early access to sales, new product announcements, and tech insights.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:outline-none placeholder-blue-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
