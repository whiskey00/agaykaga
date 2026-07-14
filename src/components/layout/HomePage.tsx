import React from 'react';
import { HeroSection } from '../hero';
import { ProductShowcase } from '../products';
import { MidPageBanner, HowToOrder, FlowerShowcase } from '../shared';
import AboutSection from './AboutSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <FlowerShowcase />
      <MidPageBanner />
      <HowToOrder />
      <AboutSection />
    </>
  );
}

export default HomePage;
