// Hero Slideshow Data — monochrome, bryl-minimal

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
}

// Kept for legacy imports; all resolve to the same monochrome background.
export const BRAND_COLORS = {
  COCOA:  '#ffffff',
  MERLOT: '#ffffff',
  MAUVE:  '#ffffff',
  PEONY:  '#ffffff',
  PETAL:  '#ffffff',
} as const;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "Teacher's Day Collection",
    subtitle: 'Honor the educators who shape our future with timeless floral arrangements that symbolize gratitude and respect.',
    description: 'Perfect for expressing appreciation',
    backgroundColor: BRAND_COLORS.COCOA,
  },
  {
    id: 2,
    title: "Valentine's Day Collection",
    subtitle: 'Celebrate eternal love with handcrafted flowers that never fade, just like your feelings.',
    description: 'Romance that lasts forever',
    backgroundColor: BRAND_COLORS.MERLOT,
  },
  {
    id: 3,
    title: "Mother's Day Collection",
    subtitle: 'Show your appreciation for the most important woman in your life with delicate, beautiful arrangements.',
    description: 'Love crafted by hand',
    backgroundColor: BRAND_COLORS.MAUVE,
  },
  {
    id: 4,
    title: 'Christmas Collection',
    subtitle: 'Bring the magic of the holidays into your home with festive arrangements that capture the spirit of the season.',
    description: 'Holiday joy that endures',
    backgroundColor: BRAND_COLORS.PEONY,
  },
  {
    id: 5,
    title: 'Graduation Collection',
    subtitle: 'Commemorate this milestone achievement with elegant flowers that represent growth, success, and new beginnings.',
    description: 'Celebrating your success',
    backgroundColor: BRAND_COLORS.PETAL,
  },
];

export const getSlideById = (id: number): HeroSlide | undefined =>
  HERO_SLIDES.find((slide) => slide.id === id);

export const getTotalSlides = (): number => HERO_SLIDES.length;

export const addSlide = (slide: Omit<HeroSlide, 'id'>): HeroSlide => {
  const newSlide = { ...slide, id: Math.max(...HERO_SLIDES.map((s) => s.id)) + 1 };
  HERO_SLIDES.push(newSlide);
  return newSlide;
};
