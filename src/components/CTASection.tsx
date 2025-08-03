'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section id="apply" className="bg-[#13242E] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Future?
          </h2>

          <p className="text-lg md:text-xl text-[#FDCB6E] mb-8">
            Join Jñāna Education today and unlock global opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="#contact">
              <button className="bg-[#00A4B8] hover:bg-[#007C91] hover:scale-105 transition transform px-8 py-3 rounded-xl font-semibold shadow-lg">
                Apply Now
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-white text-[#13242E] hover:bg-[#F5F7FA] hover:scale-105 transition transform px-8 py-3 rounded-xl font-semibold border border-white shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center md:justify-end"
        >
          <Image
            src="/images/cta-illustration.svg"
            alt="Apply Now Illustration"
            width={400}
            height={400}
            className="max-w-xs md:max-w-sm w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
