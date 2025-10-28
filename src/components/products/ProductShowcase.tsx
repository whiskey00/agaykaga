import React from 'react';
import { useProductFilter } from '../../hooks/useProductFilter';
import { useModal } from '../../hooks/useModal';
import { CategoryFilter } from './CategoryFilter';
import { ProductGrid } from './ProductGrid';
import { ProductNavigation } from './ProductNavigation';
import { ProductModal } from './ProductModal';

/**
 * ProductShowcase Component
 * 
 * A professional, maintainable component for displaying and filtering products.
 * Features:
 * - Category filtering with disabled states
 * - Responsive grid layout
 * - Pagination for "All" category
 * - Modal for product details
 * - Easy product management through data/products.ts
 */
const ProductShowcase: React.FC = () => {
  // Custom hooks for clean separation of concerns
  const {
    selectedCategory,
    currentPage,
    currentProducts,
    totalPages,
    setSelectedCategory,
    goToNextPage,
    goToPreviousPage,
    hasNavigation,
    animationDirection
  } = useProductFilter(10); // 10 products per page

  const {
    selectedProduct,
    isOpen: isModalOpen,
    openModal,
    closeModal
  } = useModal();

  return (
    <>
      <section 
        id="product-showcase" 
        className="text-center py-6 sm:py-8 md:py-12 px-4 sm:px-6 bg-petal/30 min-h-screen flex flex-col"
      >
        <div className="max-w-7xl mx-auto flex-1 flex flex-col">
          {/* Header Section */}
          <header className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cocoa mb-1 sm:mb-2 px-4 leading-tight">
              Check some pieces of happiness you can keep forever
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-1 bg-merlot mx-auto rounded-full mb-4 sm:mb-6 md:mb-8"></div>
            
            {/* Category Filter */}
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </header>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col justify-center">
            {/* Product Grid */}
            <ProductGrid 
              products={currentProducts}
              onProductClick={openModal}
              animationDirection={animationDirection}
            />
            
            {/* Navigation - Only shown when filtering by "All" */}
            {hasNavigation && (
              <ProductNavigation
                currentPage={currentPage}
                totalPages={totalPages}
                onPrevious={goToPreviousPage}
                onNext={goToNextPage}
              />
            )}
          </main>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default ProductShowcase;