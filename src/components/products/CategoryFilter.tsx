import React from 'react';
import { CATEGORIES } from '../../data/products';
import { FilterOption } from '../../hooks/useProductFilter';

interface CategoryFilterProps {
  selectedCategory: FilterOption;
  onCategoryChange: (category: FilterOption) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const allCategories: FilterOption[] = ['All', ...CATEGORIES];

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4">
      {allCategories.map((category) => {
        const isDisabled = category === 'Keychain';
        const isActive = selectedCategory === category;

        const base =
          'chip transition-colors duration-200 cursor-pointer select-none';
        const state = isDisabled
          ? 'opacity-40 cursor-not-allowed'
          : isActive
          ? 'chip-inverted'
          : 'hover:text-ink hover:border-ink/50';

        return (
          <div key={category} className="relative group">
            <button
              onClick={() => onCategoryChange(category)}
              disabled={isDisabled}
              className={`${base} ${state}`}
            >
              {category.toLowerCase()}
            </button>

            {isDisabled && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-ink text-white micro-label opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 rounded-md">
                coming soon
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
