import React from 'react';

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="w-full flex justify-center py-3 sm:py-4 text-xs sm:text-sm gap-4 sm:gap-6 md:gap-8 text-cocoa/80 px-4">
        {[
          ["Home", "hero"],
          ["Collections", "product-showcase"],
          ["How to Order", "how-to-order"],
        ].map(([label, sectionId]) => (
          <button
            key={label}
            onClick={() => scrollToSection(sectionId)}
            className="hover:text-merlot transition-colors"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Title */}
      <header className="text-center py-6 sm:py-8 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cocoa tracking-wide">AGAYKAGA</h1>
      </header>
    </>
  );
}

export default Header;