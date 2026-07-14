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
        className="text-center py-14 sm:py-16 md:py-20 px-4 sm:px-6 bg-white min-h-screen flex flex-col"
      >
        <div className="max-w-6xl mx-auto flex-1 flex flex-col w-full">
          {/* Header Section */}
          <header className="mb-8 sm:mb-10 md:mb-12">
            <div className="micro-label mb-3">03 &mdash; collections</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-ink mb-4 leading-tight max-w-2xl mx-auto">
              pieces of happiness you can keep forever.
            </h2>
            <div className="rule w-16 mx-auto mb-8" />

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
              selectedCategory={selectedCategory}
              currentPage={currentPage}
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