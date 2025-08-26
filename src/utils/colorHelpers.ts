// Color utility functions for theme-based styling

import { BRAND_COLORS } from '../data/heroSlides';

type BrandColor = typeof BRAND_COLORS[keyof typeof BRAND_COLORS];

// Light background colors that need dark text
const LIGHT_BACKGROUNDS: BrandColor[] = [
  BRAND_COLORS.PEONY,
  BRAND_COLORS.PETAL
];

/**
 * Determines the appropriate text color based on background color
 * @param backgroundColor - The background color to evaluate
 * @returns Tailwind CSS class for text color
 */
export const getTextColor = (backgroundColor: string): string => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor) 
    ? "text-cocoa" 
    : "text-white";
};

/**
 * Determines the appropriate dot color for active state
 * @param backgroundColor - The background color to evaluate
 * @returns Tailwind CSS class for dot background
 */
export const getDotColor = (backgroundColor: string): string => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor)
    ? "bg-cocoa"
    : "bg-white";
};

/**
 * Determines the appropriate dot color for inactive state
 * @param backgroundColor - The background color to evaluate
 * @returns Tailwind CSS class for inactive dot background
 */
export const getDotInactiveColor = (backgroundColor: string): string => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor)
    ? "bg-cocoa/40"
    : "bg-white/40";
};

/**
 * Determines the appropriate decorative line color
 * @param backgroundColor - The background color to evaluate
 * @returns Tailwind CSS class for decorative line background
 */
export const getDecorativeLineColor = (backgroundColor: string): string => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor)
    ? "bg-cocoa/60"
    : "bg-white/60";
};

/**
 * Determines the appropriate subtitle text color with opacity
 * @param backgroundColor - The background color to evaluate
 * @returns Tailwind CSS class for subtitle text
 */
export const getSubtitleColor = (backgroundColor: string): string => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor)
    ? "text-cocoa/80"
    : "text-white/90";
};

/**
 * Determines the appropriate description text color with opacity
 * @param backgroundColor - The background color to evaluate
 * @returns Tailwind CSS class for description text
 */
export const getDescriptionColor = (backgroundColor: string): string => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor)
    ? "text-cocoa/70"
    : "text-white/70";
};

/**
 * Checks if a background color is considered light
 * @param backgroundColor - The background color to evaluate
 * @returns Boolean indicating if the background is light
 */
export const isLightBackground = (backgroundColor: string): boolean => {
  return LIGHT_BACKGROUNDS.includes(backgroundColor as BrandColor);
};
