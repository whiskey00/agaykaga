import React from 'react';

interface BrandSectionProps {
  backgroundColor?: string;
}

export const BrandSection: React.FC<BrandSectionProps> = ({ 
  backgroundColor = '#5e3e49' 
}) => {
  return (
    <div 
      className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] select-none" 
      style={{ backgroundColor }}
    >
      {/* Brand Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-3 md:mb-4 cursive leading-tight drop-shadow-lg">
            Twist
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 cursive leading-tight drop-shadow-lg">
            and
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white cursive leading-tight drop-shadow-lg">
            Bloom
          </h1>
        </div>
      </div>
    </div>
  );
};
