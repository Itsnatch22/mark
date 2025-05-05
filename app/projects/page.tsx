'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Project data
const projects = [
  {
    id: 1,
    title: "Enterprise Cloud Migration",
    category: "Cloud Solutions",
    description: "Full-scale migration of legacy systems to AWS cloud infrastructure for a Fortune 500 client",
    image: "/cloud-migration.jpg",
    technologies: ["AWS", "Terraform", "Kubernetes", "Docker"],
    duration: "6 months",
    teamSize: "12 specialists",
    results: [
      "Reduced infrastructure costs by 42%",
      "Improved system uptime to 99.99%",
      "Enabled auto-scaling for 300% traffic spikes"
    ],
    client: "Confidential Financial Institution",
    year: 2024
  },
  {
    id: 2,
    title: "AI-Powered Cybersecurity Platform",
    category: "Security",
    description: "Development of machine learning-based threat detection system with real-time monitoring",
    image: "/ai-security.jpg",
    technologies: ["Python", "TensorFlow", "React", "Node.js"],
    duration: "9 months",
    teamSize: "8 engineers",
    results: [
      "Detected 98.7% of zero-day attacks",
      "Reduced false positives by 65%",
      "Processing 2M events/second"
    ],
    client: "National Defense Contractor",
    year: 2023
  },
  {
    id: 3,
    title: "IoT Smart City Infrastructure",
    category: "IoT",
    description: "City-wide sensor network for traffic, pollution and utility monitoring",
    image: "/smart-city.jpg",
    technologies: ["LoRaWAN", "Kafka", "Grafana", "React"],
    duration: "18 months",
    teamSize: "15 engineers",
    results: [
      "Reduced traffic congestion by 27%",
      "Lowered energy consumption by 18%",
      "10,000+ connected devices"
    ],
    client: "European Municipal Government",
    year: 2023
  },
  {
    id: 4,
    title: "Blockchain Supply Chain Solution",
    category: "Blockchain",
    description: "End-to-end supply chain tracking with smart contracts and immutable ledger",
    image: "/blockchain-supply.jpg",
    technologies: ["Hyperledger", "Solidity", "React", "Node.js"],
    duration: "12 months",
    teamSize: "10 developers",
    results: [
      "Reduced fraud incidents by 92%",
      "Cut paperwork processing by 75%",
      "20% faster customs clearance"
    ],
    client: "Global Logistics Provider",
    year: 2024
  },
  {
    id: 5,
    title: "Healthcare Data Analytics Platform",
    category: "Data Analytics",
    description: "HIPAA-compliant analytics dashboard for hospital network",
    image: "/healthcare-analytics.jpg",
    technologies: ["Snowflake", "Tableau", "Python", "FastAPI"],
    duration: "7 months",
    teamSize: "6 data scientists",
    results: [
      "Reduced patient wait times by 33%",
      "Identified $4.2M in cost savings",
      "30+ predictive models deployed"
    ],
    client: "Regional Hospital Network",
    year: 2024
  },
  {
    id: 6,
    title: "5G Network Optimization",
    category: "Telecom",
    description: "Performance optimization for next-gen mobile network deployment",
    image: "/5g-network.jpg",
    technologies: ["5G NR", "Python", "C++", "Prometheus"],
    duration: "5 months",
    teamSize: "9 network engineers",
    results: [
      "Increased throughput by 40%",
      "Reduced latency to 8ms",
      "Coverage for 2M subscribers"
    ],
    client: "Middle East Telecom Provider",
    year: 2023
  }
];

const categories = ["All", ...new Set(projects.map(project => project.category))];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openProject = (project: typeof projects[0]) => {
    setIsLoading(true);
    setSelectedProject(project);
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeProject = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
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
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">Innovative Projects</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Explore our portfolio of cutting-edge ICT solutions that transform businesses and industries
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
              onClick={() => openProject(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              {isLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <>
                  <div className="relative h-64 md:h-80 w-full">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <Link
                      href={selectedProject.image}
                      onClick={closeProject}
                      className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </Link>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full mb-4">
                          {selectedProject.category}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          {selectedProject.title}
                        </h2>
                        <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Results</h3>
                        <ul className="space-y-2 mb-6">
                          {selectedProject.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="md:w-64 lg:w-80 flex-shrink-0">
                        <div className="bg-gray-50 rounded-lg p-5">
                          <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-500">Client</p>
                              <p className="font-medium">{selectedProject.client}</p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-500">Year</p>
                              <p className="font-medium">{selectedProject.year}</p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="font-medium">{selectedProject.duration}</p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-500">Team Size</p>
                              <p className="font-medium">{selectedProject.teamSize}</p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-500">Technologies</p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {selectedProject.technologies.map(tech => (
                                  <span key={tech} className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Request Similar Solution
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our team of ICT experts is ready to help you build innovative solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              Get in Touch
            </Link>
            <Link href="/about" className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}