import React from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { useResponsive } from '../hooks/useResponsive';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, onProductClick }) => {
  const { isMobile } = useResponsive();
  
  // Show limited products on mobile, all on desktop
  const displayedProducts = isMobile ? products.slice(0, 4) : products.slice(0, 10);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 justify-items-center mb-6 sm:mb-8 max-w-6xl mx-auto">
      {displayedProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onClick={onProductClick}
        />
      ))}
    </div>
  );
};
