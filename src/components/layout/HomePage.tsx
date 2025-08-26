import React from 'react';
import { HeroSection } from '../hero';
import { ProductShowcase } from '../products';
import { MidPageBanner, HowToOrder } from '../shared';
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