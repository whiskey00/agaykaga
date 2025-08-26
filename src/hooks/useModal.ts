import { useState, useEffect } from 'react';
import { Product } from '../data/products';

interface UseModalReturn {
  selectedProduct: Product | null;
  isOpen: boolean;
  openModal: (product: Product) => void;
  closeModal: () => void;
}

export const useModal = (): UseModalReturn => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return {
    selectedProduct,
    isOpen: selectedProduct !== null,
    openModal,
    closeModal
  };
};
