import React from 'react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

function Header({ currentPage, onPageChange }: HeaderProps) {
  return (
    <>
      {/* Navigation */}
      <nav className="w-full flex justify-center py-3 sm:py-4 text-xs sm:text-sm gap-4 sm:gap-6 md:gap-8 text-cocoa/80 px-4">
        {[
          ["Home", "home"],
          ["Collections", "collections"],
          ["About", "about"],
        ].map(([label, page]) => (
          <button
            key={label}
            onClick={() => onPageChange(page)}
            className={`hover:text-merlot transition-colors ${
              currentPage === page ? 'text-merlot' : ''
            }`}
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