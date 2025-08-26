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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cocoa tracking-wide leading-tight">AGAYKAGA</h1>
      </header>
    </>
  );
}

export default Header;