'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  'Welcome!',
  'स्वागत है!',
  'Bienvenido!',
  'Bienvenue!',
  'Willkommen!',
  '欢迎!',
  'ようこそ!',
  '환영합니다!',
  'Добро пожаловать!',
];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;
        if (next >= messages.length) {
          clearInterval(interval);
          setTimeout(() => setShowIntro(false), 600); // trigger screen exit
        }
        return next;
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  const handleExitComplete = () => {
    router.push('/home');
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showIntro && (
        <motion.div
          key="intro"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6 }}
          className="h-screen flex items-center justify-center fixed inset-0 z-50 bg-[#092540] text-white text-4xl font-bold"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {messages[index]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
