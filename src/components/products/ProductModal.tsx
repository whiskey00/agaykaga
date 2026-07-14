import React, { useEffect } from 'react';
import { Product } from '../../data/products';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/30 backdrop-blur-md animate-fade-up"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl border border-[color:var(--gray-200)] max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-[color:var(--gray-200)]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-[color:var(--gray-200)] hover:bg-ink hover:text-white hover:border-ink transition-colors"
            aria-label="Close modal"
          >
            &times;
          </button>
          <div className="micro-label mb-2">product detail</div>
          <h3 className="text-2xl text-ink pr-8 leading-tight">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <span className="chip">{product.category}</span>
            <span className="chip chip-inverted">in stock</span>
          </div>
        </div>

        {/* Image */}
        <div className="px-6 pt-6">
          <div className="h-72 bg-[color:var(--gray-50)] border border-[color:var(--gray-200)] rounded-[10px] flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          <div className="flex items-baseline justify-between mb-6">
            <div className="micro-label">price</div>
            <div className="font-mono-ui text-2xl text-ink">
              &#8369;{product.price.toFixed(2)}
            </div>
          </div>

          <div className="rule mb-6" />

          <div>
            <div className="micro-label mb-2">description</div>
            <p className="font-serif-longform text-[17px] leading-[1.75] text-ink/80">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
