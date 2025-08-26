import { useState, useEffect } from 'react';
import { HeroSlide, HERO_SLIDES } from '../data/heroSlides';

interface UseSlideshowOptions {
  autoAdvanceInterval?: number; // in milliseconds
  startIndex?: number;
}

interface UseSlideshowReturn {
  currentSlide: HeroSlide;
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
  isAutoPlaying: boolean;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
}

/**
 * Custom hook for managing slideshow functionality
 * Provides auto-advance, manual navigation, and pause/resume capabilities
 */
export const useSlideshow = (options: UseSlideshowOptions = {}): UseSlideshowReturn => {
  const {
    autoAdvanceInterval = 5000, // 5 seconds default
    startIndex = 0
  } = options;

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[currentIndex] || HERO_SLIDES[0];

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % totalSlides);
    }, autoAdvanceInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides, autoAdvanceInterval]);

  // Manual navigation functions
  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  // Auto-play controls
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  return {
    currentSlide,
    currentIndex,
    totalSlides,
    goToSlide,
    goToNext,
    goToPrevious,
    isAutoPlaying,
    pauseAutoPlay,
    resumeAutoPlay
  };
};
