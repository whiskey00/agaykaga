import React from 'react';
import { HeroSlide } from '../../data/heroSlides';

interface SlideDotsProps {
  slides: HeroSlide[];
  currentIndex: number;
  currentSlide: HeroSlide;
  onDotClick: (index: number) => void;
}

export const SlideDots: React.FC<SlideDotsProps> = ({
  slides,
  currentIndex,
  onDotClick,
}) => {
  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3">
      {slides.map((_, index) => {
        const active = index === currentIndex;
        return (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              active
                ? 'w-6 h-1.5 bg-ink'
                : 'w-1.5 h-1.5 bg-ink/25 hover:bg-ink/50'
            }`}
          />
        );
      })}
    </div>
  );
};
