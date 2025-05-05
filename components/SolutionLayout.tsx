'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, ChevronRight } from 'lucide-react';

interface SolutionLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  awardBadge?: boolean;
  children: React.ReactNode;
}

export default function SolutionLayout({ 
  title, 
  subtitle, 
  heroImage, 
  awardBadge = false, 
  children 
}: SolutionLayoutProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 md:h-[32rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 z-10" />
        <Image
          src={heroImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <div className="max-w-2xl">
              {awardBadge && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                >
                  <Award className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">Award-Winning Solution</span>
                </motion.div>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-blue-100"
              >
                {subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Request Consultation
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {children}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our solution experts are standing by to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Sales
            </Link>
            <Link 
              href="/solutions" 
              className="px-8 py-3.5 border border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium"
            >
              Browse All Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}