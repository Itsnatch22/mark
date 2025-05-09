'use client';
import React from "react";
import { motion } from "framer-motion";
import { FiTwitter, FiLink, FiCode } from "react-icons/fi";

const AboutDeveloper: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
      >
        <div className="grid md:grid-cols-3 gap-0">
          {/* Left Column - Visual Element */}
          <div className="md:col-span-1 bg-gradient-to-b from-indigo-600 to-purple-600 p-8 flex flex-col items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-40 rounded-full bg-white bg-opacity-10 border-2 border-white border-opacity-20 mb-6 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </motion.div>
            
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold mb-2 text-center"
            >
              Mark
            </motion.h3>
            
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-purple-200 text-center mb-6"
            >
              Frontend Developer
            </motion.p>
            
            <div className="flex space-x-4">
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition"
              >
                <FiTwitter className="text-xl" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.1, y: -2 }}
                href="#" 
                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition"
              >
                <FiLink className="text-xl" />
              </motion.a>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:col-span-2 p-8 md:p-12">
            <div className="flex items-center mb-6">
              <FiCode className="text-purple-400 mr-3 text-xl" />
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Who's building Fincom Africa?
              </h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 mb-6 leading-relaxed text-lg"
            >
              Hi, <span className="font-bold text-white">Mark</span>. I've been building web applications for over <span className="text-purple-300">2 years</span>. I've worked with small projects, but I believe this wis my first full-stack application. People call me a <span className="italic">"Software Guru😂😂"</span> but I prefer to call myself a <span className="font-bold text-white">problem solver</span> :)
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mb-8 leading-relaxed text-lg"
            >
              I started <span className="text-white font-bold">Fincom Africa</span> to help businesses build their web presence, providing unique web apps that <span className="underline decoration-purple-400">stand out</span> and <span className="underline decoration-pink-400">scale well</span>.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-700 bg-opacity-50 rounded-xl p-4 border-l-4 border-purple-500"
            >
              <p className="text-gray-300 italic">
                Also, I post relevant web development snippets and use <span className="font-bold text-white">Sun my twitter</span> and occasionally allipost!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutDeveloper;