'use client';

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="bg-[#13242E] text-white py-12 px-6 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Jñāna</h3>
          <p className="text-sm text-[#CCCCCC] leading-relaxed">
            Empowering global learners with education, skill-building, and career success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#FDCB6E]">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#CCCCCC]">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="#services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#FDCB6E]">Contact</h4>
          <p className="text-sm text-[#CCCCCC] mb-3">
            📧 info@jnanaedu.com<br />
            📍 Hyderabad, India
          </p>
          <div className="flex gap-4 text-[#00A4B8] text-xl mt-2">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-[#888888] mt-10 border-t border-[#1f3543] pt-6">
        © {new Date().getFullYear()} Jñāna Education Services. All rights reserved.
      </div>
    </footer>
  );
}
