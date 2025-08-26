import React from 'react';
import { HeroSlide } from '../../data/heroSlides';
import { getDotColor, getDotInactiveColor } from '../../utils/colorHelpers';

interface SlideDotsProps {
  slides: HeroSlide[];
  currentIndex: number;
  currentSlide: HeroSlide;
  onDotClick: (index: number) => void;
}

export const SlideDots: React.FC<SlideDotsProps> = ({ 
  slides, 
  currentIndex, 
  currentSlide, 
  onDotClick 
}) => {
  const activeDotColor = getDotColor(currentSlide.backgroundColor);
  const inactiveDotColor = getDotInactiveColor(currentSlide.backgroundColor);

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
            index === currentIndex 
              ? `${activeDotColor} scale-125` 
              : `${inactiveDotColor} hover:scale-110`
          }`}
          aria-label={`Go to slide ${index + 1}: ${slides[index].title}`}
        />
      ))}
    </div>
  );
};
