import React from 'react';
import { motion } from 'framer-motion';

interface BrandSectionProps {
  backgroundColor?: string;
}

export const BrandSection: React.FC<BrandSectionProps> = ({
  backgroundColor = '#5e3e49'
}) => {
  return (
    <div
      className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] select-none"
      style={{ backgroundColor }}
    >
      {/* Brand Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-3 md:mb-4 cursive leading-tight drop-shadow-lg"
          >
            Twist
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 cursive leading-tight drop-shadow-lg"
          >
            and
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white cursive leading-tight drop-shadow-lg"
          >
            Bloom
          </motion.h1>
        </div>
      </div>
    </div>
  );
};
