import React from 'react';

function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  const items: Array<[string, string]> = [
    ['home', 'hero'],
    ['collections', 'product-showcase'],
    ['gallery', 'gallery'],
    ['how to order', 'how-to-order'],
    ['about', 'about'],
  ];

  return (
    <div className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-[color:var(--gray-200)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Wordmark — pixel display */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-pixel text-xl sm:text-2xl text-ink"
            aria-label="Home"
          >
            agaykaga
          </button>

          {/* Nav — mono micro labels */}
          <nav className="flex items-center gap-4 sm:gap-6">
            {items.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="micro-label hover:text-ink transition-colors duration-200"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
