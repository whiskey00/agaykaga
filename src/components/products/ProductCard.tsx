import React from 'react';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const handleClick = () => {
    onClick(product);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 sm:p-4 w-full max-w-xs mx-auto border border-petal/50 hover:border-merlot/30 hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-32 sm:h-36 md:h-40 bg-gradient-to-br from-petal/40 to-peony/60 mb-3 flex items-center justify-center rounded-lg overflow-hidden shadow-inner">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-xs sm:text-sm font-semibold text-cocoa mb-1 line-clamp-2 leading-tight">
        {product.name}
      </p>
      <p className="text-sm sm:text-base text-merlot font-bold">
        ₱{product.price.toFixed(2)}
      </p>
    </div>
  );
};
