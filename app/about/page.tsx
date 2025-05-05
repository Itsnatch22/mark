'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Award, Shield, Users, Globe, Headphones, Server, Cpu } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Award-Winning Solutions Since 2015</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">The Story Behind <span className='text-orange-400 font-bold'>Fincom Africa</span></h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                We are a leading ICT firm in Kenya, dedicated to providing top-notch technology solutions and support services to enterprises across Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Story</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
            Located at Upper hill Nairobi CIC plaza, Fincom Africa is a Kenyan based ICT firm incorporated in 2003. We remains a technical firm with ¾ of our staff being systems engineers.<br></br>

                Our mission has always been to provide and maintain the complete ICT Infrastructure environment for any business across africa.<br></br>

                Our vision is To be the leading and trusted one stop provider of end to end ICT foundation in support of corporate business in Kenya and the region beyond.<br></br>

                Regarding contracted ICT support services, Fincom core business is ICT support and we encourage organization to focus on their core business be it manufacturing, transport etc and outsource ICT issues to Fincom Africa.We are recognized for the provision of managed ICT professional services and the entire range is outlined in the products page. <br></br>

                Under communications and infrastructure solutions we are known for structured networking cabling , LAN/WAN systems, wireless networks, consultancy, project management, Lan audit/design, data center design among others.DRP etc.<br></br>

                Under computing systems infrastructure we are renowned for supply and integration of servers and storage. We supply and integrate servers from leading manufactures namely HP, IBM & DELL. For connectivity we integrate Cisco routers, switches, IP PBXs. Tele/video conferencing<br></br>

                We also provide sector specific tailor-made technology solutions that are unique to the needs of any particular industry. Within this area, we supply the Banking and Financial sector with ATM machines, Cheque scanner equipment, note counters,note counters, currency processing equipment, Que management solutions. In addition to all of the above, we also have a department that deals in the sale of computer hardware and accessories, original Toners and inks and software.<br></br>
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
            Our business is know-how based and our values remain as always. SPEED QUALITY & SKILL. We have a technical training policy in place that ensures our staff, of over fourty, remains at the top in terms of capability and certification. Fincom africa now has an ICT lab which will be used for research and development as well as a system integration test bed for Server Technology and other emerging technologies. This will in turn ensure that any business solution we design and propose has been fully tested.<br></br>

            Fincom has formed strong partnerships with leading global players such as CISCO HP, SIEMON,IBM/Lenovo , Dell Microsoft, Symantec, among many others.<br></br>

            In the very recent past we have integrated 50 server systems, installed 20 structured networking projects and provided project management to many enterprises. We look forward to working with you to build a better and more efficient company.<br></br>

            Regionally, we have capacity to implement projects in any country within East, central, west Africa and Comesa region.

            24x7x365 Customer Care Contact center

            Fincom runs a 24x7x365 contact center. This is reachable on 254 20 240 7879 email info@fincomafrica.com<br></br><br></br>


            Gabriel Nderitu<br></br>
            General Manager
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-3 rounded-lg">
                <h3 className="font-bold text-blue-600">500+</h3>
                <p className="text-gray-600 text-sm">Enterprise Clients</p>
              </div>
              <div className="bg-purple-50 px-4 py-3 rounded-lg">
                <h3 className="font-bold text-purple-600">98%</h3>
                <p className="text-gray-600 text-sm">Client Retention</p>
              </div>
              <div className="bg-green-50 px-4 py-3 rounded-lg">
                <h3 className="font-bold text-green-600">24/7</h3>
                <p className="text-gray-600 text-sm">Global Support</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/about-office.jpg"
              alt="Fincom Africa team working"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-light">Our headquarters in Nairobi</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and innovation at TechHaven
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Security First",
                description: "We build all solutions with enterprise-grade security as the foundation, not an afterthought."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Client-Centric",
                description: "Your success is our success. We measure our performance by your business outcomes."
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Global Perspective",
                description: "With teams across 12 countries, we bring world-class solutions tailored to local needs."
              },
              {
                icon: <Headphones className="h-8 w-8 text-yellow-600" />,
                title: "Relentless Support",
                description: "Our 24/7 support teams have consistently achieved 99.9% satisfaction ratings."
              },
              {
                icon: <Server className="h-8 w-8 text-red-600" />,
                title: "Infrastructure Excellence",
                description: "We maintain Tier IV data centers with 100% uptime SLAs for mission-critical systems."
              },
              {
                icon: <Cpu className="h-8 w-8 text-indigo-600" />,
                title: "Innovation Driven",
                description: "Our R&D team holds 47 patents in cloud architecture and AI optimization."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to enterprise technology needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Cloud Transformation",
              description: "End-to-end migration and optimization for AWS, Azure, and Google Cloud environments.",
              icon: "/about/cloud-icon.svg",
              ctaLink: "/solutions/cloud"
            },
            {
              title: "AI Integration",
              description: "Custom machine learning models and automation solutions for business processes.",
              icon: "/about/ai-icon.svg",
              ctaLink: "/solutions/ai"
            },
            {
              title: "Cybersecurity",
              description: "360° protection with threat detection, response, and compliance management.",
              icon: "/about/security-icon.svg",
              ctaLink: "/solutions/cybersecurity"
            },
            {
              title: "Data Analytics",
              description: "Turn raw data into actionable insights with our BI and visualization platforms.",
              icon: "/about/analytics-icon.svg",
              ctaLink: "/solutions/analytics"
            },
            {
              title: "IoT Solutions",
              description: "Complete ecosystem development for connected devices and smart infrastructure.",
              icon: "/about/iot-icon.svg",
              ctaLink: "/solutions/iot"
            },
            {
              title: "Managed IT",
              description: "Proactive monitoring and management of your entire technology stack.",
              icon: "/about/managed-it-icon.svg",
              ctaLink: "/solutions/managed-it"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Image
                  src={service.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href={service.ctaLink || '/default-path'} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-28 bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-white.svg')] opacity-20" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Technology?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our solutions architects are standing by to discuss your enterprise needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3.5 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium"
              >
                Get Started
              </Link>
              <Link 
                href="/solutions" 
                className="px-8 py-3.5 border border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}