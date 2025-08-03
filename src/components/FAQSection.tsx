'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';

const faqs = [
  {
    question: 'What countries do you support for studying abroad?',
    answer: 'We support study abroad programs in Germany, UK, Canada, USA, Australia, and more.',
  },
  {
    question: 'Do you help with visa and application processes?',
    answer: 'Absolutely! We guide students through the entire process — from shortlisting to applications and visa interviews.',
  },
  {
    question: 'Are your services only for students?',
    answer: 'No, we also help working professionals with upskilling, career counseling, and global job readiness.',
  },
  {
    question: 'Do you offer online consultations?',
    answer: 'Yes. You can book a virtual session at your convenience through our Contact form.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // one-at-a-time
  };

  return (
    <section className="bg-[#F5F7FA] py-20 px-6 sm:px-10 md:px-16 text-[#1F1F1F]" id="faq">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Illustration - show only on large screens */}
        <motion.div
          className="hidden lg:block w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/faq.svg"
            alt="FAQ Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>

        {/* FAQ Content */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#00A4B8] mb-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-24 h-1 bg-[#FDCB6E] mx-auto lg:mx-0 mb-10 rounded-full" />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 flex justify-between items-center text-left focus:outline-none group"
                >
                  <span className="font-semibold text-[#13242E] group-hover:text-[#00A4B8] transition">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-[#888] transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-[#00A4B8]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="px-5 pb-4 text-[#555555]"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
