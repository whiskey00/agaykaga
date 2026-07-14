import React from 'react';
import { motion } from 'framer-motion';
import { HeroSlide } from '../../data/heroSlides';

interface SlideContentProps {
  slide: HeroSlide;
}

export const SlideContent: React.FC<SlideContentProps> = ({ slide }) => {
  return (
    <div
      key={slide.id}
      className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 bg-white"
    >
      {/* Section label */}
      <div className="absolute top-6 left-6 micro-label">
        02 &mdash; now showing
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-md mx-auto"
      >
        <div className="chip mb-5">seasonal collection</div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-ink leading-tight mb-4">
          {slide.title}
        </h2>

        <div className="rule w-16 mx-auto mb-4" />

        <p className="text-sm sm:text-base text-ink/70 leading-relaxed mb-3">
          {slide.subtitle}
        </p>

        <div className="micro-label mt-4">
          {slide.description}
        </div>

        <button className="btn-primary mt-8 inline-flex items-center gap-2">
          shop now
          <span aria-hidden>&rarr;</span>
        </button>
      </motion.div>
    </div>
  );
};
