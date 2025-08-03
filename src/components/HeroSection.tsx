'use client';

import Lottie from 'lottie-react';
import globeAnimation from '@/animations/globe.json';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0E1A22] text-white px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left: Lottie Globe */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-64 sm:w-80 md:w-96">
          <Lottie animationData={globeAnimation} loop />
        </div>
      </motion.div>

      {/* Right: Text + SVG */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Empowering Global <span className="text-[#00A4B8]">Learners</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
          Your trusted partner for education, careers, and global opportunities.
        </p>
        <div className="hidden md:block">
          <Image
            src="/images/hero-illustration.svg"
            alt="Learning Illustration"
            width={400}
            height={400}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
