import React from 'react';

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="w-full flex justify-center py-2 sm:py-3 md:py-4 text-xs sm:text-sm gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-cocoa/80 px-4">
        {[
          ["Home", "hero"],
          ["Collections", "product-showcase"],
          ["How to Order", "how-to-order"],
        ].map(([label, sectionId]) => (
          <button
            key={label}
            onClick={() => scrollToSection(sectionId)}
            className="hover:text-merlot transition-colors py-1 px-2 rounded-md hover:bg-petal/50"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Title */}
      <header className="text-center py-4 sm:py-6 md:py-8 px-4">
        <div className="relative inline-block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-cocoa tracking-widest leading-tight font-serif mb-2">
            AGAYKAGA
          </h1>
          {/* Small underline with proper spacing */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-28 h-0.5 bg-merlot"></div>
        </div>
      </header>
    </>
  );
}

export default Header;