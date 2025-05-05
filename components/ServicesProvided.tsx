'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Cloud Solutions',
    description: 'Empowering businesses with secure and scalable cloud infrastructure.',
    icon: '☁️',
  },
  {
    title: 'Network Security',
    description: 'Ensuring robust cybersecurity measures to protect business data.',
    icon: '🔒',
  },
  {
    title: 'Server Management',
    description: 'Reliable server setups and maintenance for smooth ICT operations.',
    icon: '🖥️',
  },
  {
    title: 'Data Backup',
    description: 'Comprehensive data backup solutions to safeguard your information.',
    icon: '💾',
  },
  {
    title: 'ICT Consulting',
    description: 'Expert advice to optimize your IT infrastructure and strategy.',
    icon: '📞',
  },
  {
    title: 'Software Development',
    description: 'Building Android, iOS and Mac apps tailored devices to company needs.',
    icon: '🌐',
  }
];

export default function ServicesProvided() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // GSAP animations on scroll
  useEffect(() => {
    if (!cardsRef.current.length || !titleRef.current) return;

    // Title animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
      },
    });

    // Card animations
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.15,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 bg-white overflow-hidden"
      id='services'
    >
      <div className="max-w-7xl mx-auto">
        {/* Elegant Title */}
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'power3.out' }}
        >
          Our <span className="text-blue-600">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-6">{service.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>

              {/* Subtle hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Animated background elements (corporate-friendly) */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden opacity-5">
          <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-[url('/images/grid.svg')] bg-center" />
        </div>
      </div>
    </section>
  );
}