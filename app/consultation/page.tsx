'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronRight, Check } from 'lucide-react';

export default function ConsultationPage() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    'Cloud Migration',
    'AI Integration',
    'Cybersecurity Audit',
    'Network Infrastructure',
    'Data Analytics',
    'Custom Software'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build <span className="text-orange-400">Your Solution</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Schedule a consultation with our experts to discuss your technology needs and discover tailored solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Form Column */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {submitted ? (
              <motion.div 
                className="p-12 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring' }}
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-8">
                  We've received your consultation request. Our team will contact you within 24 hours to schedule your session.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Request Consultation
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Interested In</label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <motion.div
                          key={service}
                          whileTap={{ scale: 0.95 }}
                          className="relative"
                        >
                          <input
                            type="radio"
                            id={service}
                            name="service"
                            value={service}
                            checked={selectedService === service}
                            onChange={() => setSelectedService(service)}
                            className="absolute opacity-0"
                          />
                          <label
                            htmlFor={service}
                            className={`block w-full px-4 py-3 border rounded-lg cursor-pointer transition ${selectedService === service ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
                          >
                            {service}
                          </label>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2">Project Details</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                  >
                    Schedule Consultation
                  </motion.button>
                </div>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-xl"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <ul className="space-y-5">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-600">30-minute discovery call with a solutions architect</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Technical assessment of your current infrastructure</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Customized solution recommendations</p>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <ChevronRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-gray-600">No-obligation proposal with implementation roadmap</p>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-blue-100">Email</p>
                    <p className="font-medium">consultation@fincomafrica.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-blue-100">Phone</p>
                    <p className="font-medium">+254 20 240 7879</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-blue-100">Location</p>
                    <p className="font-medium">Upper Hill, Nairobi CIC Plaza</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-blue-100">Hours</p>
                    <p className="font-medium">Mon-Fri: 8AM - 5PM EAT</p>
                    <p className="font-medium">24/7 Emergency Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Clients Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Fincom Africa</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our approach to technology consulting delivers measurable results
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Expertise",
                description: "15+ years implementing solutions for Fortune 500 companies and government agencies",
                stat: "500+"
              },
              {
                title: "Certified Specialists",
                description: "All consultants hold advanced certifications in their respective technologies",
                stat: "100%"
              },
              {
                title: "Proven Results",
                description: "Average 3.2x ROI for clients within first year of implementation",
                stat: "3.2x"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.stat}</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}