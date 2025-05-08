// app/case-studies/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Filter, ChevronDown } from 'lucide-react';
import Image from 'next/image';
type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
  duration: string;
  teamSize: string;
};

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      // In a real app, you would fetch from an API
      await new Promise(resolve => setTimeout(resolve, 800));
      setCaseStudies([
        {
          id: '1',
          title: 'E-Commerce Platform Scaling',
          client: 'FashionForward',
          industry: 'Retail',
          challenge: 'FashionForward needed to handle 10x traffic during seasonal sales without performance degradation.',
          solution: 'Implemented microservices architecture with auto-scaling and optimized database queries.',
          results: [
            '300% increase in peak traffic capacity',
            '40% reduction in page load times',
            '99.99% uptime during Black Friday'
          ],
          image: '/ecommerce-scaling.jpg',
          tags: ['E-Commerce', 'Scalability', 'AWS'],
          duration: '6 months',
          teamSize: '8 engineers'
        },
        {
          id: '2',
          title: 'Healthcare Data Platform',
          client: 'MediCare Systems',
          industry: 'Healthcare',
          challenge: 'Securely aggregate patient data from multiple EHR systems while maintaining HIPAA compliance.',
          solution: 'Built a FHIR-compliant API gateway with fine-grained access controls and audit logging.',
          results: [
            'Unified 12 disparate data sources',
            'Reduced data retrieval time from hours to seconds',
            'Achieved 100% compliance in audits'
          ],
          image: '/healthcare-data.jpg',
          tags: ['Healthcare', 'Data Integration', 'Security'],
          duration: '9 months',
          teamSize: '6 engineers + 2 compliance specialists'
        },
        {
          id: '3',
          title: 'Mobile Banking App',
          client: 'UrbanBank',
          industry: 'Finance',
          challenge: 'Modernize legacy mobile banking with real-time features while maintaining security.',
          solution: 'Developed React Native app with biometric auth and real-time transaction processing.',
          results: [
            '4.8/5 app store rating',
            '35% increase in mobile transactions',
            'Zero security incidents post-launch'
          ],
          image: '/mobile-banking.jpg',
          tags: ['FinTech', 'Mobile', 'React Native'],
          duration: '5 months',
          teamSize: '5 engineers'
        },
        {
          id: '4',
          title: 'IoT Fleet Management',
          client: 'LogiTrack',
          industry: 'Logistics',
          challenge: 'Monitor 10,000+ vehicles in real-time with predictive maintenance alerts.',
          solution: 'Custom IoT platform with edge computing and machine learning models.',
          results: [
            '22% reduction in fuel costs',
            '15% decrease in maintenance downtime',
            'Real-time tracking accuracy of 99.2%'
          ],
          image: '/iot-fleet.jpg',
          tags: ['IoT', 'Machine Learning', 'Telematics'],
          duration: '12 months',
          teamSize: '10 engineers + 3 data scientists'
        }
      ]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const filters = ['All', 'E-Commerce', 'Healthcare', 'Finance', 'Logistics', 'Mobile', 'IoT'];

  const filteredCaseStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => 
        study.tags.includes(activeFilter) || 
        study.industry === activeFilter
      );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-white to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped clients overcome challenges and achieve results.
          </p>
        </motion.div>

        {/* Filters - Mobile */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <Filter className="h-5 w-5" />
            <span>Filter</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-2 bg-white p-4 rounded-lg shadow-md"
              >
                <div className="grid grid-cols-2 gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter}
                      onClick={() => {
                        setActiveFilter(filter);
                        setShowFilters(false);
                      }}
                      className={`px-3 py-2 text-sm rounded-md ${
                        activeFilter === filter
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Filters - Desktop */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-medium ${
                  index === 0 ? 'rounded-l-lg' : ''
                } ${
                  index === filters.length - 1 ? 'rounded-r-lg' : ''
                } ${
                  activeFilter === filter
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden h-96 animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Case Studies Grid */}
        {!isLoading && (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCaseStudies.map((caseStudy) => (
                <motion.div
                  key={caseStudy.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCase(caseStudy)}
                >
                  <div className="h-48 overflow-hidden">
                    <motion.img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
                        {caseStudy.industry}
                      </span>
                      {caseStudy.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{caseStudy.challenge}</p>
                    <div className="flex items-center text-indigo-600 font-medium">
                      <span>Read case study</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Empty State */}
        {!isLoading && filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-500">Try selecting a different filter</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-64 w-full overflow-hidden">
                  <Image
                    width={800}
                    height={400}
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCase.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCase.title}</h2>
                <p className="text-lg text-gray-600 mb-2"><strong>Client:</strong> {selectedCase.client}</p>
                <p className="text-lg text-gray-600 mb-6"><strong>Duration:</strong> {selectedCase.duration} • <strong>Team:</strong> {selectedCase.teamSize}</p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Challenge</h3>
                    <p className="text-gray-700">{selectedCase.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Solution</h3>
                    <p className="text-gray-700">{selectedCase.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">The Results</h3>
                    <ul className="space-y-3">
                      {selectedCase.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-3 mt-0.5">
                            <svg viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Ready to start your project?</h3>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Contact our team
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}