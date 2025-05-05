'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Telescope, LifeBuoy } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-950 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[6rem] md:text-[10rem] font-extrabold bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_5px_30px_rgba(109,40,217,0.6)]"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-2xl md:text-3xl font-light mb-4"
        >
          You&apos;ve entered the void.
        </motion.p>
        <p className="text-md text-zinc-400 max-w-xl mx-auto">
          The dev gods haven&apos;t blessed this page with their presence🙌. It seems you have stumbled upon a black hole of the internet🕳.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8"
        >
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-indigo-500 to-pink-500 hover:brightness-110 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all"
          >
            <LifeBuoy className="h-5 w-5" />
            Get Help
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative glitch background lights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-purple-500 filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl opacity-20 animate-pulse"></div>
      </motion.div>

      {/* Glitching telescope animation or text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.08, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex items-center gap-2 pointer-events-none"
      >
        <Telescope className="h-6 w-6 text-white" />
        <p className="text-white text-sm font-mono tracking-wide">scanning for signs of life...</p>
      </motion.div>
    </div>
  );
}
