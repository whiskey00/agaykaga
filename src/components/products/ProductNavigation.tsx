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
  onNext,
}) => {
  return (
    <div className="w-full flex items-center justify-center gap-6 mt-6">
      <button
        onClick={onPrevious}
        className="micro-label hover:text-ink transition-colors"
        aria-label="Previous page"
      >
        &larr; prev
      </button>

      <div className="flex items-center gap-3 border border-[color:var(--gray-200)] rounded-full px-3 py-1.5">
        <span className="font-mono-ui text-xs text-ink">
          {String(currentPage + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentPage ? 'bg-ink' : 'bg-ink/20'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        className="micro-label hover:text-ink transition-colors"
        aria-label="Next page"
      >
        next &rarr;
      </button>
    </div>
  );
};
