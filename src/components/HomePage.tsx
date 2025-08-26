import React from 'react';
import HeroSection from './HeroSection';
import ProductShowcase from './ProductShowcase';
import MidPageBanner from './MidPageBanner';
import HowToOrder from './HowToOrder';
import AboutSection from './AboutSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <MidPageBanner />
      <HowToOrder />
      <AboutSection />
    </>
  );
}

export default HomePage;