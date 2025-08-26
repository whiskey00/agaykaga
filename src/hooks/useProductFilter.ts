import { useState, useMemo } from 'react';
import { Product, ProductCategory, getProductsByCategory, getProductSets } from '../data/products';

export type FilterOption = "All" | ProductCategory;

interface UseProductFilterReturn {
  selectedCategory: FilterOption;
  currentPage: number;
  currentProducts: Product[];
  totalPages: number;
  setSelectedCategory: (category: FilterOption) => void;
  setCurrentPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  hasNavigation: boolean;
}

export const useProductFilter = (itemsPerPage: number = 10): UseProductFilterReturn => {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");
  const [currentPage, setCurrentPage] = useState(0);

  // Memoized product filtering and pagination logic
  const { currentProducts, totalPages, hasNavigation } = useMemo(() => {
    if (selectedCategory === "All") {
      // Show paginated products when "All" is selected
      const productSets = getProductSets(itemsPerPage);
      return {
        currentProducts: productSets[currentPage] || productSets[0] || [],
        totalPages: productSets.length,
        hasNavigation: true
      };
    } else {
      // Show all products of selected category
      const filteredProducts = getProductsByCategory(selectedCategory);
      return {
        currentProducts: filteredProducts,
        totalPages: 1,
        hasNavigation: false
      };
    }
  }, [selectedCategory, currentPage, itemsPerPage]);

  // Category change handler
  const handleCategoryChange = (category: FilterOption) => {
    if (category === "Keychain") return; // Disabled category
    setSelectedCategory(category);
    setCurrentPage(0); // Reset to first page
  };

  // Navigation handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return {
    selectedCategory,
    currentPage,
    currentProducts,
    totalPages,
    setSelectedCategory: handleCategoryChange,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
    hasNavigation
  };
};
