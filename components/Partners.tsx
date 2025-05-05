'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const partners = [
  { name: 'Microsoft', logo: '/partners/microsoft.svg' },
  { name: 'Dell', logo: '/partners/dell.svg' },
  { name: 'Intel', logo: '/partners/intel.svg' },
  { name: 'HP', logo: '/partners/hp.svg' },
  { name: 'Cisco', logo: '/partners/cisco.svg' },
  { name: 'IBM', logo: '/partners/ibm (2).svg' },
  { name: 'Lenovo', logo: '/partners/lenovo.svg' },
  { name: 'VMware', logo: '/partners/vmware.svg' },
  { name: 'D-Link', logo: '/partners/dlink.svg' },
  { name: 'Siemon', logo: '/partners/siemon.svg' },
  { name: 'Oracle', logo: '/partners/oracle.svg' },
  { name: 'Cyberoam', logo: '/partners/cyberoam.svg' },
]

export default function MarqueePartners() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.1 })
  const controls = useAnimation()

  // Double the array for seamless looping
  const doubledPartners = [...partners, ...partners]

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ['0%', '-50%'], // Moves left by 50% of container width
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      })
    }
  }, [isInView, controls])

  return (
    <section 
      ref={containerRef}
      className="py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
      id='partners'
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          Our Trusted Partners
        </motion.h2>

        {/* Left-moving marquee (top row) */}
        <div className="relative h-24 mb-8">
          <motion.div
            animate={controls}
            className="absolute flex gap-12 items-center h-full"
            style={{ left: '0%' }}
          >
            {doubledPartners.map((partner, i) => (
              <motion.div
                key={`left-${i}`}
                className="flex-shrink-0 w-40 h-16 relative"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right-moving marquee (bottom row) */}
        <div className="relative h-24">
          <motion.div
            animate={{
              x: ['-50%', '0%'], // Moves right by 50% of container width
            }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="absolute flex gap-12 items-center h-full"
            style={{ left: '0%' }}
          >
            {doubledPartners.reverse().map((partner, i) => (
              <motion.div
                key={`right-${i}`}
                className="flex-shrink-0 w-40 h-16 relative"
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-lg font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Become a Partner
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}