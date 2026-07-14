// Monochrome (bryl-minimal) — all slides read as dark ink on white.

export const getTextColor = (_bg: string): string => 'text-ink';
export const getDotColor = (_bg: string): string => 'bg-ink';
export const getDotInactiveColor = (_bg: string): string => 'bg-ink/25';
export const getDecorativeLineColor = (_bg: string): string => 'bg-ink/60';
export const getSubtitleColor = (_bg: string): string => 'text-ink/70';
export const getDescriptionColor = (_bg: string): string => 'text-ink/50';
export const isLightBackground = (_bg: string): boolean => true;
