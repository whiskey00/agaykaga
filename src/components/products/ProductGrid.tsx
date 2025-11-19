import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../data/products';
import { ProductCard } from './ProductCard';
import { useResponsive } from '../../hooks/useResponsive';
import { AnimationDirection } from '../../hooks/useProductFilter';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  animationDirection?: AnimationDirection;
  selectedCategory?: string;
  currentPage?: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onProductClick,
  animationDirection,
  selectedCategory,
  currentPage = 0
}) => {
  const { isMobile } = useResponsive();

  // Show limited products on mobile, all on desktop
  const displayedProducts = isMobile ? products.slice(0, 4) : products.slice(0, 10);

  // Determine animation classes based on direction
  const getAnimationClass = () => {
    if (!animationDirection) return 'animate-none';
    return animationDirection === 'next'
      ? 'animate-slide-in-right'
      : 'animate-slide-in-left';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      key={`${selectedCategory}-${currentPage}` || products[0]?.id || 'empty'}
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4 justify-items-center mb-6 sm:mb-8 max-w-6xl mx-auto ${getAnimationClass()}`}
    >
      {displayedProducts.map((product) => (
        <motion.div
          key={product.id}
          variants={item}
          className="w-full"
        >
          <ProductCard
            product={product}
            onClick={onProductClick}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
