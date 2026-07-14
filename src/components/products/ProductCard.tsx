import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      onClick={() => onClick(product)}
      className="card-bryl group text-left w-full max-w-xs mx-auto p-3 sm:p-4 cursor-pointer"
    >
      {/* Image well */}
      <div className="relative h-32 sm:h-36 md:h-40 bg-[color:var(--gray-50)] mb-3 overflow-hidden rounded-[10px] border border-[color:var(--gray-200)]">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute top-2 left-2 chip bg-white/85 backdrop-blur-sm">
          {product.category}
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm text-ink line-clamp-2 leading-snug font-medium">
          {product.name}
        </p>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="font-mono-ui text-sm text-ink">
          &#8369;{product.price.toFixed(2)}
        </span>
        <span className="micro-label group-hover:text-ink transition-colors">
          view &nearr;
        </span>
      </div>
    </motion.button>
  );
};
