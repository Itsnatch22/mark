
'use client';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import  SplitType  from 'split-type';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitType);

const insightsData = [
  {
    id: 1,
    title: "AI-Powered Enterprise Transformation",
    excerpt: "How artificial intelligence is reshaping business operations at scale",
    category: "Artificial Intelligence",
    date: "May 15, 2025",
    image: "/ai-enterprise.jpg",
    stats: {
      adoptionRate: 72,
      costReduction: 38,
      efficiencyGain: 45,
    },
    trends: [
      { year: "2022", value: 28 },
      { year: "2023", value: 42 },
      { year: "2024", value: 59 },
      { year: "2025", value: 72 },
    ],
    readTime: "9 min read"
  },
  {
    id: 2,
    title: "Quantum Computing in Business",
    excerpt: "The next frontier of computational power for enterprises",
    category: "Emerging Tech",
    date: "May 8, 2025",
    image: "/quantum-computing.jpg",
    stats: {
      adoptionRate: 19,
      costReduction: 62,
      efficiencyGain: 78,
    },
    trends: [
      { year: "2022", value: 5 },
      { year: "2023", value: 9 },
      { year: "2024", value: 14 },
      { year: "2025", value: 19 },
    ],
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Sustainable Cloud Architectures",
    excerpt: "Reducing carbon footprint through optimized cloud solutions",
    category: "Cloud Computing",
    date: "April 30, 2025",
    image: "/green-cloud.jpg",
    stats: {
      adoptionRate: 54,
      costReduction: 27,
      efficiencyGain: 39,
    },
    trends: [
      { year: "2022", value: 22 },
      { year: "2023", value: 35 },
      { year: "2024", value: 46 },
      { year: "2025", value: 54 },
    ],
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "The Future of Cybersecurity",
    excerpt: "Next-gen protection for increasingly complex digital ecosystems",
    category: "Security",
    date: "April 22, 2025",
    image: "/future-security.jpg",
    stats: {
      adoptionRate: 88,
      costReduction: 41,
      efficiencyGain: 67,
    },
    trends: [
      { year: "2022", value: 65 },
      { year: "2023", value: 74 },
      { year: "2024", value: 82 },
      { year: "2025", value: 88 },
    ],
    readTime: "11 min read"
  }
];

export default function InsightsHub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeInsight, setActiveInsight] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0]);

  // GSAP animations
  useEffect(() => {
    // Hero animation
    const splitTitle = new SplitType(".hero-title", { types: "chars" });
    gsap.from(splitTitle.chars, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: "power3.out",
      delay: 0.2
    });

    // Category filter animation
    gsap.from(".category-filter", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".insights-container",
        start: "top 80%"
      }
    });

    // View mode toggle animation
    gsap.from(".view-toggle", {
      x: -30,
      opacity: 0,
      duration: 0.5,
      delay: 0.8
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const toggleInsight = (id: number) => {
    if (activeInsight === id) {
      setActiveInsight(null);
    } else {
      setActiveInsight(id);
      // Scroll to the expanded insight
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: `#insight-${id}`,
          offsetY: 100
        },
        ease: "power2.inOut"
      });
    }
  };

  return (
    <div ref={containerRef} className="relative bg-gray-50">
      {/* Floating background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ y: y1 }}
      >
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 blur-xl"
            style={{
              background: `conic-gradient(from 90deg at 50% 50%, #3b82f6, #8b5cf6, #ec4899, #3b82f6)`,
              width: `${Math.random() * 300 + 200}px`,
              height: `${Math.random() * 300 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-[url('/images/news.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div style={{ opacity }}>
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
              Enterprise Insights Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge research and strategic analysis for forward-thinking organizations
            </p>
            
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="inline-flex flex-col items-center">
                <span className="text-sm text-gray-500 mb-3">Explore Insights</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center items-start pt-2"
                >
                  <div className="w-1 h-3 bg-gray-500 rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Insights Navigation */}
      <section className="relative z-20 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-2 category-filter mb-4 md:mb-0">
            {['All', 'AI', 'Cloud', 'Security', 'Emerging Tech'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="view-toggle flex items-center space-x-2">
            <button 
              onClick={() => setViewMode('grid')} 
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Insights Container */}
      <section className="relative z-10 py-20 px-6">
        <div className={`insights-container max-w-7xl mx-auto ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'space-y-8'}`}>
          {insightsData.map((insight) => (
            <motion.article
              key={insight.id}
              id={`insight-${insight.id}`}
              layout
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${activeInsight === insight.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'}`}
            >
              <div className={`flex ${viewMode === 'list' ? 'flex-row h-64' : 'flex-col'}`}>
                <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'w-full h-56 md:h-64'}`}>
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full backdrop-blur-sm">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 flex flex-col ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm text-gray-500">{insight.date}</span>
                    <span className="text-sm text-gray-500">{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  
                  <div className="mt-auto">
                    <button
                      onClick={() => toggleInsight(insight.id)}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                    >
                      {activeInsight === insight.id ? 'Collapse' : 'Expand Insights'}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform ${activeInsight === insight.id ? 'rotate-180' : 'group-hover:translate-x-1'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <AnimatePresence>
                {activeInsight === insight.id && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Stats Visualization */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                          <div className="space-y-6">
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Adoption Rate</span>
                                <span className="text-sm font-bold text-blue-600">{insight.stats.adoptionRate}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-blue-600 h-2.5 rounded-full" 
                                  style={{ width: `${insight.stats.adoptionRate}%` }}
                                />
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Cost Reduction</span>
                                <span className="text-sm font-bold text-green-600">{insight.stats.costReduction}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-green-500 h-2.5 rounded-full" 
                                  style={{ width: `${insight.stats.costReduction}%` }}
                                />
                              </div>
                            </div>
                            
                            <div>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Efficiency Gain</span>
                                <span className="text-sm font-bold text-purple-600">{insight.stats.efficiencyGain}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div 
                                  className="bg-purple-500 h-2.5 rounded-full" 
                                  style={{ width: `${insight.stats.efficiencyGain}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Trend Visualization */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">Adoption Trend</h4>
                          <div className="h-48">
                            <svg width="100%" height="100%" viewBox="0 0 300 150" className="overflow-visible">
                              <path
                                d={`M${insight.trends.map((point, i) => 
                                  `${(i * 75) + 30},${150 - (point.value * 1.5)}`
                                ).join(' L')}`}
                                fill="none"
                                stroke="url(#trendGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              {insight.trends.map((point, i) => (
                                <circle
                                  key={i}
                                  cx={(i * 75) + 30}
                                  cy={150 - (point.value * 1.5)}
                                  r="4"
                                  fill="url(#trendGradient)"
                                  stroke="#fff"
                                  strokeWidth="2"
                                />
                              ))}
                              <defs>
                                <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%" stopColor="#3b82f6" />
                                  <stop offset="100%" stopColor="#8b5cf6" />
                                </linearGradient>
                              </defs>
                            </svg>
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                              {insight.trends.map((point) => (
                                <span key={point.year}>{point.year}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                        <Link 
                          href="#" 
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Download Full Report (PDF)
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </Link>
                        
                        <div className="flex space-x-2">
                          <button title='See more' className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                          </button>
                          <button title='See more' className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-50 rounded-full">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{ y: y2 }}
        >
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
        </motion.div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Custom Enterprise Insights</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our research team can provide tailored analysis and strategic recommendations for your specific business challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Schedule Consultation</span>
            </Link>
            <Link 
              href="/research" 
              className="px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>View Research Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}