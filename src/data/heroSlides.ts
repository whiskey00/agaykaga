// Hero Slideshow Data

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
}

// Brand colors for slideshow backgrounds
export const BRAND_COLORS = {
  COCOA: "#3E3333",
  MERLOT: "#5E3F44", 
  MAUVE: "#A47E82",
  PEONY: "#E6CECE",
  PETAL: "#F7EAEB"
} as const;

// Hero slideshow slides - Easy to maintain and add new collections
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "Teacher's Day Collection",
    subtitle: "Honor the educators who shape our future with timeless floral arrangements that symbolize gratitude and respect",
    description: "Perfect for expressing appreciation",
    backgroundColor: BRAND_COLORS.COCOA
  },
  {
    id: 2,
    title: "Valentine's Day Collection",
    subtitle: "Celebrate eternal love with handcrafted flowers that never fade, just like your feelings",
    description: "Romance that lasts forever",
    backgroundColor: BRAND_COLORS.MERLOT
  },
  {
    id: 3,
    title: "Mother's Day Collection",
    subtitle: "Show your appreciation for the most important woman in your life with delicate, beautiful arrangements",
    description: "Love crafted by hand",
    backgroundColor: BRAND_COLORS.MAUVE
  },
  {
    id: 4,
    title: "Christmas Collection",
    subtitle: "Bring the magic of the holidays into your home with festive arrangements that capture the spirit of the season",
    description: "Holiday joy that endures",
    backgroundColor: BRAND_COLORS.PEONY
  },
  {
    id: 5,
    title: "Graduation Collection",
    subtitle: "Commemorate this milestone achievement with elegant flowers that represent growth, success, and new beginnings",
    description: "Celebrating your success",
    backgroundColor: BRAND_COLORS.PETAL
  }
];

// Utility functions for slide management
export const getSlideById = (id: number): HeroSlide | undefined => {
  return HERO_SLIDES.find(slide => slide.id === id);
};

export const getTotalSlides = (): number => {
  return HERO_SLIDES.length;
};

// Helper function to add new slides easily
export const addSlide = (slide: Omit<HeroSlide, 'id'>): HeroSlide => {
  const newSlide = {
    ...slide,
    id: Math.max(...HERO_SLIDES.map(s => s.id)) + 1
  };
  HERO_SLIDES.push(newSlide);
  return newSlide;
};
