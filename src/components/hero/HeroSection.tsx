import React from 'react';
import { useSlideshow } from '../../hooks/useSlideshow';
import { HERO_SLIDES } from '../../data/heroSlides';
import { BrandSection } from './BrandSection';
import { SlideContent } from './SlideContent';
import { SlideDots } from './SlideDots';

/**
 * HeroSection Component
 * 
 * A professional, maintainable hero section with brand display and event slideshow.
 * Features:
 * - Auto-advancing slideshow with manual navigation
 * - Responsive design with brand colors
 * - Easy slide management through data/heroSlides.ts
 * - Accessible navigation with ARIA labels
 * - Smooth transitions and hover effects
 */
const HeroSection: React.FC = () => {
  // Custom hook for slideshow functionality
  const {
    currentSlide,
    currentIndex,
    goToSlide
  } = useSlideshow({
    autoAdvanceInterval: 5000, // 5 seconds
    startIndex: 0
  });

  return (
    <section 
      id="hero" 
      className="grid grid-cols-1 md:grid-cols-2 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12"
    >
      {/* Left Section - Brand Display */}
      <BrandSection />

      {/* Right Section - Event Slideshow */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] select-none overflow-hidden">
        {/* Slide Content */}
        <SlideContent slide={currentSlide} />
        
        {/* Navigation Dots */}
        <SlideDots
          slides={HERO_SLIDES}
          currentIndex={currentIndex}
          currentSlide={currentSlide}
          onDotClick={goToSlide}
        />
      </div>
    </section>
  );
};

export default HeroSection;