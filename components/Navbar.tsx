'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className={`text-2xl font-bold ${scrolled ? 'text-orange-600' : 'text-white'}`}>Fincom Africa</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              About Us
            </Link>
            <Link href="/team
            " className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              Team
            </Link>
            <Link href="/" className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              Partners
            </Link>
            <Link href="/blogs" className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              Blogs
            </Link>
            <Link href="/products" className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              Products
            </Link>
            <Link href="/contact" className={`${scrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white hover:text-blue-200'} font-medium transition-colors`}>
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="" className={`p-2 rounded-full ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <Search className="h-5 w-5" />
            </Link>
            <Link href=""className={`p-2 rounded-full ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'} relative`}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${scrolled ? 'bg-white' : 'bg-gray-900'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            Home
          </Link>
          <Link href="/products" className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            Products
          </Link>
          <Link href="/solutions" className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            Solutions
          </Link>
          <Link href="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            About
          </Link>
          <Link href="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            Contact
          </Link>
          <div className="flex space-x-4 px-3 py-2">
            <Link href="" className={`p-2 rounded-full ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              <Search className="h-5 w-5" />
            </Link>
            <Link href="" className={`p-2 rounded-full ${scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'} relative`}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;