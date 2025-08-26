import React from 'react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 pb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
          <h3 className="text-2xl font-bold text-cocoa font-serif pr-8">
            {product.name}
          </h3>
          <div className="inline-block px-3 py-1 mt-2 rounded-full text-xs font-medium bg-merlot/10 text-merlot">
            {product.category}
          </div>
        </div>

        {/* Image */}
        <div className="px-6 pb-4">
          <div className="h-80 bg-gradient-to-br from-petal/40 to-peony/60 rounded-2xl flex items-center justify-center shadow-inner">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Price */}
          <div className="text-3xl font-bold text-merlot mb-4">
            ₱{product.price.toFixed(2)}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-cocoa mb-2">Description</h4>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
