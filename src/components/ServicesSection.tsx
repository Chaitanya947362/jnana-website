'use client';

import { motion } from 'framer-motion';
import { FaGlobeAsia, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';
import Image from 'next/image';

const services = [
  {
    title: 'Global Education',
    icon: <FaGlobeAsia className="text-4xl text-[#00A4B8] group-hover:text-[#007C91] transition" />,
    description:
      'Guidance for studying abroad with top universities, visa support, and admissions consulting.',
  },
  {
    title: 'Skill Building',
    icon: <FaChalkboardTeacher className="text-4xl text-[#00A4B8] group-hover:text-[#007C91] transition" />,
    description:
      'Workshops and mentoring for essential 21st-century skills like communication, tech, and leadership.',
  },
  {
    title: 'Career Roadmapping',
    icon: <FaBriefcase className="text-4xl text-[#00A4B8] group-hover:text-[#007C91] transition" />,
    description:
      'Helping students and professionals align their education with their long-term career goals.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F5F7FA] py-20 px-6 md:px-12 text-[#1F1F1F]" id="services">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Left Side: Text & Services */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#00A4B8] mb-2 text-center md:text-left"
          >
            Our Services
          </motion.h2>
          <div className="w-24 h-1 bg-[#FDCB6E] mb-10 rounded-full mx-auto md:mx-0" />

          <div className="grid gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white shadow-md hover:shadow-xl rounded-xl p-6 transition duration-300 border border-transparent hover:border-[#00A4B8]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#13242E]">{service.title}</h3>
                <p className="text-[#555555]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Illustration */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src="/images/services-illustration.svg"
            alt="Services Illustration"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
}
