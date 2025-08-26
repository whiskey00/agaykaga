import React from 'react';
import { CATEGORIES } from '../data/products';
import { FilterOption } from '../hooks/useProductFilter';

interface CategoryFilterProps {
  selectedCategory: FilterOption;
  onCategoryChange: (category: FilterOption) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  const allCategories: FilterOption[] = ["All", ...CATEGORIES];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 px-4">
      {allCategories.map((category) => {
        const isDisabled = category === "Keychain";
        const isActive = selectedCategory === category;
        
        return (
          <div key={category} className="relative group">
            <button 
              onClick={() => onCategoryChange(category)}
              disabled={isDisabled}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 shadow-lg border-2 border-transparent ${
                isDisabled 
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed opacity-60' 
                  : isActive
                  ? 'bg-cocoa text-white shadow-xl scale-105 border-white/20'
                  : 'bg-merlot text-white hover:bg-cocoa hover:scale-105 hover:shadow-xl hover:border-white/20'
              }`}
            >
              {category}
            </button>
            
            {/* Tooltip for disabled keychain button */}
            {isDisabled && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                Coming Soon
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
