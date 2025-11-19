import React from 'react';
import { motion } from 'framer-motion';
import { HeroSlide } from '../../data/heroSlides';
import {
  getTextColor,
  getDecorativeLineColor,
  getSubtitleColor,
  getDescriptionColor
} from '../../utils/colorHelpers';

interface SlideContentProps {
  slide: HeroSlide;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  const textColor = getTextColor(slide.backgroundColor);
  const lineColor = getDecorativeLineColor(slide.backgroundColor);
  const subtitleColor = getSubtitleColor(slide.backgroundColor);
  const descriptionColor = getDescriptionColor(slide.backgroundColor);

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-1000 ${textColor}`}
      style={{ backgroundColor: slide.backgroundColor }}
    >
      <div className="text-center max-w-md mx-auto">
        {/* Top decorative line */}
        <div className={`w-16 h-0.5 mx-auto mb-3 sm:mb-4 ${lineColor}`}></div>

        {/* Main title */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-serif leading-tight">
          {slide.title}
        </h2>

        {/* Subtitle */}
        <p className={`text-xs sm:text-sm md:text-base font-light leading-relaxed mb-2 sm:mb-3 ${subtitleColor}`}>
          {slide.subtitle}
        </p>

        {/* Description */}
        <div className={`text-xs sm:text-sm font-medium italic ${descriptionColor}`}>
          {slide.description}
        </div>

        {/* Bottom decorative line */}
        <div className={`w-12 h-0.5 mx-auto mt-3 sm:mt-4 ${lineColor}`}></div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`mt-6 px-6 py-2 rounded-full border-2 ${lineColor} ${textColor} text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors`}
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};
