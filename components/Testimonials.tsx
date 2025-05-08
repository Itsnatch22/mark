'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCards } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import {SwiperRef} from 'swiper/react';
// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Boniface Sadia",
    role: "ICT Desk Support, BAT",
    content: "Fincom Africa provides ICT support & infrastructure management to BAT, ensuring smooth day-to-day operations. We handle network security, server management, and IT maintenance, enabling BAT to maintain an efficient and secure digital ecosystem. Our team ensures zero downtime in IT services, facilitating seamless workflow across BAT's operations in East Africa.",
    rating: 5,
    image: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Abdi Mohamed",
    role: "IT Manager, KCB Bank",
    content: "Fincom Africa has been instrumental in transforming KCB Bank's IT infrastructure. Their expertise in cloud solutions and cybersecurity has significantly enhanced our operational efficiency and data security. We trust Fincom to keep our systems running smoothly and securely.",
    rating: 5,
    image: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Aisha Mwangi",
    role: "Operations Lead, Safaricom",
    content: "Fincom Africa's support in managing our IT infrastructure has been invaluable. Their proactive approach to system maintenance and security has allowed us to focus on our core business without worrying about IT issues.",
    rating: 4,
    image: "/testimonial-3.jpg"
  },
  {
    id: 4,
    name: "Patrick",
    role: "IT Director, CFAO Mobility",
    content: "We play a critical role in CFAO Mobility’s ICT management, helping to integrate automotive business solutions with digital platforms. Our IT support services ensure that CFAO's operations—ranging from vehicle sales to servicing and logistics—run efficiently. We provide enterprise software solutions, helping CFAO manage inventory, customer relations, and real-time vehicle tracking.",
    rating: 5,
    image: "/testimonial-4.jpg"
  },
];

export default function TestimonialsPage() {
  const [, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleVideoEnd = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Success</span> Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses accelerating their digital transformation
          </p>
        </motion.div>

        {/* Interactive Stats Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "4.9/5", label: "Average Rating" },
            { value: "10K+", label: "Active Users" },
            { value: "98%", label: "Retention Rate" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center min-w-[200px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Swiper */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Navigation, EffectCards]}
            effect="cards"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            pagination={{
              clickable: true,
              el: '.custom-pagination',
              bulletClass: 'custom-bullet',
              bulletActiveClass: 'custom-bullet-active',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="!overflow-visible"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <motion.div
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden h-full ${isActive ? 'scale-100' : 'scale-90'}`}
                    whileHover={{ scale: isActive ? 1.02 : 0.92 }}
                  >
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex items-start mb-6">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-blue-100">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-xl font-bold">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <AnimatePresence>
                          <motion.p
                            className="text-gray-700"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          >
                            {isExpanded
                              ? testimonial.content
                              : `${testimonial.content.substring(0, 120)}...`}
                          </motion.p>
                        </AnimatePresence>

                        {testimonial.content.length > 120 && (
                          <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
                          >
                            {isExpanded ? 'Read less' : 'Read more'}
                          </button>
                        )}
                      </div>

                      {isActive && (
                        <motion.div
                          className="mt-auto pt-4 border-t border-gray-100"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <p className="text-sm text-gray-500">Featured testimonial</p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="custom-pagination flex justify-center mt-12 space-x-2" />

          {/* Navigation Arrows */}
          <button
            title="Previous Slide"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md -ml-4 hover:bg-gray-50"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            title="Next Slide"
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md -mr-4 hover:bg-gray-50"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Video Testimonial Trigger */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => (document.getElementById('video-modal') as HTMLDialogElement)?.showModal()}
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Watch Customer Stories
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      <dialog id="video-modal" className="bg-transparent backdrop:bg-black/50 rounded-xl">
        <form method="dialog" className="relative">
          <button className="absolute -top-10 right-0 text-white hover:text-gray-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video
            controls
            autoPlay
            className="w-full max-w-4xl rounded-lg"
            onEnded={handleVideoEnd}
          >
            <source src="/customer-stories.mp4" type="video/mp4" />
          </video>
        </form>
      </dialog>
    </div>
  );
}