'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      className="bg-[#F5F7FA] text-[#1F1F1F] py-20 px-6 sm:px-10 md:px-16"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#00A4B8]">
            About <span className="text-[#007C91]">Jñāna Education</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            At <strong>Jñāna</strong>, we believe education is the passport to the future. 
            We help students, professionals, and global learners unlock new opportunities 
            through <span className="text-[#13242E] font-medium">personalized guidance</span>, 
            <span className="text-[#13242E] font-medium"> skill-building</span>, and a deep 
            commitment to <span className="text-[#FDCB6E] font-medium">quality education</span>.
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/about-illustration.svg"
            alt="About Jñāna Illustration"
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
