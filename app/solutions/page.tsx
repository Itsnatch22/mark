'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const solutions = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'Transform your business with cutting-edge AI solutions including machine learning, computer vision, and natural language processing.',
    features: [
      'Custom AI model development',
      'Predictive analytics',
      'Chatbot implementation',
      'Process automation'
    ],
    icon: '/icons/ai(2).svg',
    image: '/solutions/ai.jpg',
    cta: 'Explore AI Solutions'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    description: 'Scalable and secure cloud infrastructure tailored to your business needs with hybrid and multi-cloud options.',
    features: [
      'Cloud migration services',
      'Serverless architecture',
      'Cost optimization',
      '24/7 cloud management'
    ],
    icon: '/icons/cloud.svg',
    image: '/solutions/cloud.jpg',
    cta: 'Migrate to Cloud'
  },
  {
    id: 'networking',
    title: 'Networking Solutions',
    description: 'High-performance networking infrastructure for seamless connectivity and communication.',
    features: [
      'SD-WAN implementation',
      'Network security',
      'Wi-Fi optimization',
      '5G integration'
    ],
    icon: '/icons/network.svg',
    image: '/solutions/network.jpg',
    cta: 'Optimize Network'
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    description: 'Comprehensive protection against evolving digital threats with enterprise-grade security solutions.',
    features: [
      'Threat detection & response',
      'Vulnerability assessments',
      'Compliance management',
      'Security awareness training'
    ],
    icon: '/icons/cyber.svg',
    image: '/solutions/cyber.jpg',
    cta: 'Secure Your Business'
  },
  {
    id: 'banking',
    title: 'Banking Solutions',
    description: 'Digital transformation for financial institutions with secure, compliant fintech solutions.',
    features: [
      'Core banking systems',
      'Payment processing',
      'Fraud detection',
      'Mobile banking apps'
    ],
    icon: '/icons/banking.svg',
    image: '/solutions/banking.jpg',
    cta: 'Modernize Banking'
  },
  {
    id: 'storage',
    title: 'Server Storage & Maintenance',
    description: 'Reliable storage solutions and proactive maintenance for optimal system performance.',
    features: [
      'SAN/NAS solutions',
      'Disaster recovery',
      'Performance tuning',
      'Hardware maintenance'
    ],
    icon: '/icons/storage.svg',
    image: '/solutions/storage.jpg',
    cta: 'Optimize Storage'
  },
  {
    id: 'backup',
    title: 'Data Backup Solutions',
    description: 'Comprehensive data protection strategies to ensure business continuity.',
    features: [
      'Automated backups',
      'Cloud storage options',
      'Ransomware protection',
      'Quick recovery solutions'
    ],
    icon: '/icons/backup.svg',
    image: '/solutions/backup.jpg',
    cta: 'Protect Your Data'
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Custom software solutions built to streamline your business operations.',
    features: [
      'Web & mobile apps',
      'Enterprise software',
      'API integration',
      'UI/UX design'
    ],
    icon: '/icons/software.svg',
    image: '/solutions/software.jpg',
    cta: 'Build Custom Software'
  },
  {
    id: 'erp',
    title: 'Enterprise Resource Planning',
    description: 'Integrated business management solutions to unify your operations.',
    features: [
      'ERP implementation',
      'Supply chain management',
      'Business intelligence',
      'Workflow automation'
    ],
    icon: '/icons/erp.svg',
    image: '/solutions/erp.jpg',
    cta: 'Streamline Operations'
  }
];

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">ICT Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              End-to-end technology solutions to drive innovation and business growth
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                activeSolution.id === solution.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveSolution(solution)}
            >
              <div className="p-6 flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg">
                  <Image
                    src={solution.icon}
                    alt={solution.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{solution.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Solution Detail */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          key={activeSolution.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto relative">
              <Image
                src={activeSolution.image}
                alt={activeSolution.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {activeSolution.title} Solutions
              </h2>
              <p className="text-gray-700 mb-6">{activeSolution.description}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-3 mb-8">
                {activeSolution.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                {activeSolution.cta}
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Solutions?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our team of experts can design tailored ICT solutions for your specific business requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/consultation" className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              Request Consultation
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}