'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Aarav Patel',
    feedback:
      'Thanks to Jñāna, I got admitted to a top German university with full support throughout the process!',
    country: '🇩🇪 Germany',
  },
  {
    name: 'Meera Reddy',
    feedback:
      'The guidance and mentoring I received helped me crack IELTS and choose the right program.',
    country: '🇬🇧 UK',
  },
  {
    name: 'Siddharth Rao',
    feedback:
      'Jñāna made the whole study-abroad journey smooth and stress-free. Highly recommended!',
    country: '🇨🇦 Canada',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#F5F7FA] py-20 px-6 sm:px-10 md:px-16 text-[#1F1F1F]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Testimonials Content */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#13242E] mb-2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Students Say
          </motion.h2>
          <div className="w-24 h-1 bg-[#FDCB6E] mx-auto lg:mx-0 mb-10 rounded-full" />

          <div className="grid gap-6 md:grid-cols-1">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 border border-[#e0e0e0] text-left transition-transform duration-300 hover:scale-[1.02]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-[#1F1F1F] mb-4 text-[15.5px] leading-relaxed">
                  “{testimonial.feedback}”
                </p>
                <div className="font-semibold text-[#00A4B8]">
                  {testimonial.name}
                  <span className="text-sm text-gray-500 ml-2">
                    {testimonial.country}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <motion.div
          className="hidden lg:block w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/testimonials.svg"
            alt="Student Testimonials Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
