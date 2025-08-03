'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-[#0E1A22] py-20 px-6 sm:px-10 md:px-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Contact Form */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left">
            Get in Touch
          </h2>
          <p className="text-[#CCCCCC] mb-8 text-center lg:text-left">
            Have questions or want to get started? Fill out the form and we’ll get back to you shortly.
          </p>

          {!submitted ? (
            <form
              action="https://formspree.io/f/xblkapnp"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="grid gap-5 text-left"
            >
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#00A4B8]"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#00A4B8]"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full p-3 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#00A4B8]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#00A4B8] hover:bg-[#007C91] text-white py-3 px-6 rounded font-semibold transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-[#FDCB6E] font-semibold text-lg mt-8">
              ✅ Thank you! We’ll be in touch soon.
            </div>
          )}
        </motion.div>

        {/* Illustration */}
        <motion.div
          className="hidden lg:block w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/contact.svg"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
