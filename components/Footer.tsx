'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function CyberFooter() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/myfincom' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourcompany' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/yourcompany' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/yourcompany' },
  ]

  const footerLinks = [
    { title: 'Work', links: ['Projects', 'Case Studies', 'Clients'] },
    { title: 'Services', links: ['Web Development', 'UI/UX Design', 'Consulting'] },
    { title: 'Company', links: ['About', 'Team', 'Careers'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
  ]

  
  

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10 px-6 border-t border-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">
                Fincom Africa
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              Quality, Speed and Skill in I.C.T.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer navigation */}
          {footerLinks.map((column, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {currentYear} Fincom Africa. All rights reserved.
            Powered by GPT-4.0
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <Link href="#home" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Services
            </Link>
            <Link href="#partners" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Partners
            </Link>
            <Link href="/blogs" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Blogs
            </Link>
            <Link href="/products" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Contact
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16 text-gray-600 text-xs"
      >
        Crafted with <span className="text-cyan-400">♥</span> by <Link href="https://github.com/Itsnatch22" rel='noopener noreferrer' target='_blank' className='text-cyan-400'>Mark</Link>
      </motion.div>
    </footer>
  )
}