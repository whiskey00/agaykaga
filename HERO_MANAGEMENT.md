# Hero Section Management Guide

## Overview
The HeroSection component has been restructured into a professional, maintainable architecture that makes it easy to manage slideshow content and add new event collections.

## File Structure
```
src/
├── components/
│   ├── HeroSection.tsx          # Main container component
│   ├── BrandSection.tsx         # Left side brand display
│   ├── SlideContent.tsx         # Individual slide content
│   └── SlideDots.tsx           # Navigation dots
├── hooks/
│   └── useSlideshow.ts         # Slideshow logic and state
├── utils/
│   └── colorHelpers.ts         # Color utility functions
└── data/
    └── heroSlides.ts           # **MAIN FILE FOR SLIDE MANAGEMENT**
```

## Adding New Event Collections

### Step 1: Add Slide Data
Edit `src/data/heroSlides.ts` and add your new event to the `HERO_SLIDES` array:

```typescript
{
  id: 6, // Use next available ID
  title: "Father's Day Collection",
  subtitle: "Honor the father figures in your life with meaningful arrangements that celebrate strength and love",
  description: "Celebrating fatherhood",
  backgroundColor: BRAND_COLORS.COCOA // Choose from available brand colors
}
```

### Step 2: Choose Background Color
Available brand colors in `BRAND_COLORS`:
- **COCOA**: `#3E3333` (Dark brown)
- **MERLOT**: `#5E3F44` (Dark red-brown)
- **MAUVE**: `#A47E82` (Medium mauve)
- **PEONY**: `#E6CECE` (Light pink) 
- **PETAL**: `#F7EAEB` (Very light pink)

### Example: Adding a New Event
```typescript
// In heroSlides.ts HERO_SLIDES array
{
  id: 6,
  title: "Anniversary Collection",
  subtitle: "Celebrate years of love and commitment with elegant arrangements that honor your journey together",
  description: "Timeless love, timeless beauty",
  backgroundColor: BRAND_COLORS.MERLOT
}
```

## Component Features

### Auto-Advancing Slideshow
- **Interval**: 5 seconds (customizable)
- **Smooth Transitions**: 1-second duration
- **Auto-Loop**: Cycles through all slides continuously

### Manual Navigation
- **Clickable Dots**: Users can jump to any slide
- **Hover Effects**: Visual feedback on interaction
- **Accessibility**: ARIA labels for screen readers

### Responsive Design
- **Mobile**: Optimized text sizing and spacing
- **Tablet/Desktop**: Enhanced typography and layout
- **Consistent**: Brand colors and styling across all devices

### Smart Color System
- **Automatic Text Color**: Light backgrounds get dark text, dark backgrounds get white text
- **Dynamic Dots**: Dot colors adapt to current slide background
- **Decorative Elements**: Lines and accents match the color scheme

## Utility Functions

### Easy Slide Addition
Use the helper function to add slides programmatically:
```typescript
import { addSlide, BRAND_COLORS } from './data/heroSlides';

const newSlide = addSlide({
  title: "New Event Collection",
  subtitle: "Description of your new event...",
  description: "Short tagline",
  backgroundColor: BRAND_COLORS.MAUVE
});
// ID is automatically assigned
```

### Get Slide Information
```typescript
import { getSlideById, getTotalSlides } from './data/heroSlides';

const slide = getSlideById(1);
const total = getTotalSlides();
```

## Customization Options

### Change Auto-Advance Timing
Edit the `useSlideshow` call in `HeroSection.tsx`:
```typescript
const { ... } = useSlideshow({
  autoAdvanceInterval: 7000, // 7 seconds instead of 5
  startIndex: 0
});
```

### Modify Brand Section
Edit `BrandSection.tsx` to change:
- Background color
- Text content
- Typography styling
- Layout positioning

### Add New Brand Colors
In `heroSlides.ts`, extend the `BRAND_COLORS` object:
```typescript
export const BRAND_COLORS = {
  // ... existing colors
  NEW_COLOR: "#123456"
} as const;
```

### Pause Auto-Play on Hover
Add hover handlers to the slideshow:
```typescript
// In HeroSection.tsx
const { pauseAutoPlay, resumeAutoPlay } = useSlideshow();

// Add to slideshow container
<div 
  onMouseEnter={pauseAutoPlay}
  onMouseLeave={resumeAutoPlay}
>
```

## Content Guidelines

### Title Best Practices
- Keep titles **concise** (2-4 words)
- Use **"Collection"** suffix for consistency
- Focus on the **event/occasion**

### Subtitle Guidelines
- **Descriptive** but not too long
- Explain the **emotional connection**
- Mention **"handcrafted"** or **"arrangements"** when appropriate

### Description Rules
- **Short tagline** (3-5 words)
- **Emotional appeal**
- **Action-oriented** when possible

### Color Selection
- **Dark colors** (COCOA, MERLOT) for serious/elegant events
- **Medium colors** (MAUVE) for balanced/versatile events  
- **Light colors** (PEONY, PETAL) for soft/celebratory events

## Performance Features
- **Memoized Color Calculations**: Efficient color utility functions
- **Optimized Re-renders**: Smart state management prevents unnecessary updates
- **Smooth Animations**: CSS transitions for professional feel
- **Accessible Navigation**: Keyboard and screen reader support

## TypeScript Benefits
- **Type Safety**: All slide properties are strongly typed
- **IntelliSense**: Full IDE support for slide management
- **Error Prevention**: Compile-time validation of slide data
- **Refactoring Support**: Safe renaming and restructuring

## Maintenance
- **Adding**: Simply add to `HERO_SLIDES` array
- **Removing**: Remove from `HERO_SLIDES` array
- **Updating**: Modify the slide object in `HERO_SLIDES` array
- **Reordering**: Change the order in `HERO_SLIDES` array

The system automatically handles slideshow logic, color calculations, and responsive behavior!
