'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
}

export const SectionHeading = ({ children }: SectionHeadingProps) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-5xl font-extrabold mb-12 tracking-tight text-center"
  >
    {children}
  </motion.h2>
);