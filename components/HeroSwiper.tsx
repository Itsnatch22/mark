'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const HeroSwiper = () => {
  const slides = [
    {
      id: 1,
      title: "Next-Gen Enterprise Solutions",
      subtitle: "Powering businesses with cutting-edge technology",
      image: "/images/marketing.png",
      ctaText: "Explore Products",
      ctaLink: "/products"
    },
    {
      id: 2,
      title: "AI-Driven Transformation",
      subtitle: "Revolutionize your operations with our AI solutions",
      image: "/images/ai.png",
      ctaText: "Discover AI Solutions",
      ctaLink: "/solutions/ai"
    },
    {
      id: 3,
      title: "Secure Cloud Infrastructure",
      subtitle: "Enterprise-grade security with 99.99% uptime",
      image: "/images/cloud.webp",
      ctaText: "Cloud Services",
      ctaLink: "/solutions/cloud"
    },
    {
      id: 4,
      title: "Advanced Networking Solutions",
      subtitle: "Seamless connectivity for your enterprise",
      image: "/images/network.webp",
      ctaText: "Networking Solutions",
      ctaLink: "/solutions/networking"
    },
    {
      id: 5,
      title: 'Cutting-Edge Cybersecurity',
      subtitle: 'Protecting your business from digital threats',
      image: '/images/cybersecurity.jpg',
      ctaText: 'Learn More',
      ctaLink: '/solutions/cybersecurity'
    },
    {
      id: 6,
      title: '24/7 ICT Support',
      subtitle: 'Always here to help you succeed',
      image: '/images/ict.jpg',
      ctaText: 'Get Support',
      ctaLink: '/contact'
    },
    {
      id: 7,
      title: 'Reliable Banking Equipment',
      subtitle: 'High-performance solutions for your business',
      image: '/images/banking.jpg',
      ctaText: 'Explore Banking Solutions',
      ctaLink: '/solutions/banking'
    },
    {
      id: 8,
      title: 'Android, iOS & Web Development',
      subtitle: 'Custom solutions tailored to your needs',
      image: '/images/dev.jpg',
      ctaText: 'Get Started',
      ctaLink: '/solutions/development'
    },
    {
      id: 9,
      title: 'Server Storage and Maintenance',
      subtitle: 'Reliable solutions for your data needs',
      image: '/images/server.jpg',
      ctaText: 'Learn More',
      ctaLink: '/solutions/server-storage'
    },
    {
      id: 10,
      title: 'Data Backup and Recovery',
      subtitle: 'Protecting your data with our solutions',
      image: '/images/data.jpg',
      ctaText: 'Discover Backup Solutions',
      ctaLink: '/solutions/backup'
    },
    {
      id: 11,
      title: 'Hardware Sales and Procurement',
      subtitle: 'Quality hardware for your business needs',
      image: '/images/hsr.jpg',
      ctaText: 'Shop Hardware',
      ctaLink: '/products'
    },
    {
      id: 12,
      title: 'Tech Training and Cerifications',
      subtitle: 'Empowering your team with knowledge',
      image: '/images/tech.jpg',
      ctaText: 'Explore Training Programs',
      ctaLink: '/training',
    },
    {
      id: 13,
      title: 'Enterprise Resource Planning',
      subtitle: 'Streamline your business processes with our ERP solutions',
      image: '/images/erp.jpg',
      ctaText: 'Learn More',
      ctaLink: '/solutions/erp'
    }
  ];

  return (
    <section className="relative h-screen w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority
              />
              
              {/* Content */}
              <div className="relative z-20 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                      {slide.subtitle}
                    </p>
                    <Link
                      href={slide.ctaLink}
                      className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                      {slide.ctaText}
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-white mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSwiper;