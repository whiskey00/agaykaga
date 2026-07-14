import React from 'react';
import { motion } from 'framer-motion';

interface BrandSectionProps {
  backgroundColor?: string;
}

export const BrandSection: React.FC<BrandSectionProps> = () => {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] select-none bg-white overflow-hidden border-r border-[color:var(--gray-200)]">
      {/* Halftone accent — dissolves out of the bottom-left corner */}
      <div className="pointer-events-none absolute inset-0 halftone-corner opacity-70" />

      {/* Section label */}
      <div className="absolute top-6 left-6 micro-label">
        01 &mdash; the studio
      </div>

      {/* Brand Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[0.95]"
          >
            twist
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="micro-label my-2"
          >
            &amp;
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.19, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[0.95]"
          >
            bloom
          </motion.h1>
        </div>
      </div>

      {/* Corner meta */}
      <div className="absolute bottom-6 right-6 micro-label text-right">
        est. handcrafted<br />
        <span className="text-ink/80">fuzzy wire florals</span>
      </div>
    </div>
  );
};
