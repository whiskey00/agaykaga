import React from 'react';

interface ProductNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const ProductNavigation: React.FC<ProductNavigationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-3 sm:gap-4">
      <button 
        onClick={onPrevious}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center transition-all duration-300 bg-mauve text-white hover:bg-cocoa hover:scale-110 cursor-pointer shadow-md hover:shadow-lg"
        aria-label="Previous page"
      >
        ‹
      </button>
      
      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-white/50">
        <span className="text-xs sm:text-sm font-semibold text-cocoa">
          {currentPage + 1} / {totalPages}
        </span>
        <div className="flex gap-1 ml-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPage ? 'bg-merlot shadow-md' : 'bg-cocoa/40'
              }`}
            />
          ))}
        </div>
      </div>
      
      <button 
        onClick={onNext}
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center transition-all duration-300 bg-mauve text-white hover:bg-cocoa hover:scale-110 cursor-pointer shadow-md hover:shadow-lg"
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
};
