import React, { useState, useEffect } from 'react';

// Import sample flower images
import flower1 from '../images/sample_flowers/1.png';
import flower2 from '../images/sample_flowers/2.png';
import flower3 from '../images/sample_flowers/3.png';
import flower4 from '../images/sample_flowers/4.png';
import flower5 from '../images/sample_flowers/5.png';
import flower6 from '../images/sample_flowers/6.png';
import flower7 from '../images/sample_flowers/7.png';
import flower8 from '../images/sample_flowers/8.png';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
};

function ProductShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Create multiple sets of 5 different flowers with enhanced details
  const flowerSets = [
    // Set 1
    [
      { 
        id: 1, 
        name: "Rose Bouquet", 
        price: 120.00, 
        image: flower1,
        description: "A beautiful arrangement of handcrafted wire roses that will never wilt. Perfect for expressing love and appreciation.",
        category: "Bouquet"
      },
      { 
        id: 2, 
        name: "Lily Arrangement", 
        price: 150.00, 
        image: flower2,
        description: "Elegant white lilies crafted with attention to detail. Symbolizes purity and rebirth.",
        category: "Single Flower"
      },
      { 
        id: 3, 
        name: "Tulip Collection", 
        price: 100.00, 
        image: flower3,
        description: "Vibrant tulips that bring spring into your home year-round. Each petal is carefully shaped by hand.",
        category: "Bouquet"
      },
      { 
        id: 4, 
        name: "Sunflower Bundle", 
        price: 180.00, 
        image: flower4,
        description: "Bright and cheerful sunflowers that capture the warmth of summer. Perfect for any room.",
        category: "Bouquet"
      },
      { 
        id: 5, 
        name: "Orchid Display", 
        price: 200.00, 
        image: flower5,
        description: "Exotic orchids that showcase elegance and sophistication. A premium addition to any space.",
        category: "Flower Pot"
      }
    ],
    // Set 2
    [
      { 
        id: 6, 
        name: "Daisy Chain", 
        price: 90.00, 
        image: flower6,
        description: "Sweet and simple daisies that bring joy and innocence to any setting.",
        category: "Bouquet"
      },
      { 
        id: 7, 
        name: "Carnation Mix", 
        price: 110.00, 
        image: flower7,
        description: "A colorful mix of carnations representing admiration and love.",
        category: "Bouquet"
      },
      { 
        id: 8, 
        name: "Peony Bouquet", 
        price: 160.00, 
        image: flower8,
        description: "Luxurious peonies that symbolize honor and wealth. Full and fluffy design.",
        category: "Bouquet"
      },
      { 
        id: 9, 
        name: "Lavender Bundle", 
        price: 85.00, 
        image: flower1,
        description: "Calming lavender sprigs that bring peace and tranquility to your space.",
        category: "Single Flower"
      },
      { 
        id: 10, 
        name: "Iris Collection", 
        price: 130.00, 
        image: flower2,
        description: "Regal irises that represent wisdom and valor. Perfect for elegant displays.",
        category: "Bouquet"
      }
    ],
    // Set 3
    [
      { 
        id: 11, 
        name: "Chrysanthemum", 
        price: 95.00, 
        image: flower3,
        description: "Beautiful chrysanthemums that symbolize longevity and joy.",
        category: "Single Flower"
      },
      { 
        id: 12, 
        name: "Gerbera Daisy", 
        price: 105.00, 
        image: flower4,
        description: "Vibrant gerbera daisies that radiate happiness and cheerfulness.",
        category: "Single Flower"
      },
      { 
        id: 13, 
        name: "Hydrangea", 
        price: 170.00, 
        image: flower5,
        description: "Full hydrangea blooms that represent heartfelt emotions and understanding.",
        category: "Flower Pot"
      },
      { 
        id: 14, 
        name: "Marigold Mix", 
        price: 75.00, 
        image: flower6,
        description: "Bright marigolds that bring warmth and positive energy to any space.",
        category: "Bouquet"
      },
      { 
        id: 15, 
        name: "Pansy Collection", 
        price: 80.00, 
        image: flower7,
        description: "Delicate pansies with their characteristic 'faces' that symbolize thoughtfulness.",
        category: "Keychain"
      }
    ]
  ];

  const currentFlowers = flowerSets[currentPage] || flowerSets[0];
  const totalPages = flowerSets.length;

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const categories = ["Bouquet", "Single Flower", "Flower Pot", "Keychain"];

  function ProductCard({ product }: { product: Product }) {
    return (
      <div 
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 w-full max-w-xs mx-auto border border-petal/50 hover:border-merlot/30 hover:-translate-y-1 cursor-pointer"
        onClick={() => openModal(product)}
      >
        <div className="h-48 sm:h-52 md:h-56 bg-gradient-to-br from-petal/40 to-peony/60 mb-4 flex items-center justify-center rounded-xl overflow-hidden shadow-inner">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-sm sm:text-base font-semibold text-cocoa mb-2 line-clamp-2 leading-tight">{product.name}</p>
        <p className="text-base sm:text-lg text-merlot font-bold">₱{product.price.toFixed(2)}</p>
      </div>
    );
  }

  function CategoryPills() {
    return (
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8 px-4">
        {categories.map((c) => (
          <button 
            key={c} 
            className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base font-semibold bg-merlot text-white hover:bg-cocoa hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/20"
          >
            {c}
          </button>
        ))}
      </div>
    );
  }

  function ProductModal() {
    if (!selectedProduct) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative p-6 pb-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-cocoa font-serif pr-8">
              {selectedProduct.name}
            </h3>
            <div className="inline-block px-3 py-1 mt-2 rounded-full text-xs font-medium bg-merlot/10 text-merlot">
              {selectedProduct.category}
            </div>
          </div>

          {/* Image - Made Larger */}
          <div className="px-6 pb-4">
            <div className="h-80 bg-gradient-to-br from-petal/40 to-peony/60 rounded-2xl flex items-center justify-center shadow-inner">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            {/* Price */}
            <div className="text-3xl font-bold text-merlot mb-4">
              ₱{selectedProduct.price.toFixed(2)}
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-cocoa mb-2">Description</h4>
              <p className="text-gray-600 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section id="product-showcase" className="text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-petal/30 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Title and Category Pills at top */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cocoa mb-2 sm:mb-3 px-4 leading-tight">
              Check some pieces of happiness you can keep forever
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-merlot mx-auto rounded-full mb-6 sm:mb-8 md:mb-10"></div>
            <CategoryPills />
          </div>

          {/* Products and Navigation centered lower */}
          <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center pb-8 sm:pb-10 md:pb-12">
              {currentFlowers.slice(0, isMobile ? 4 : currentFlowers.length).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Navigation Buttons */}
            <div className="w-full flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
              <button 
                onClick={goToPrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center transition-all duration-300 bg-mauve text-white hover:bg-cocoa hover:scale-110 cursor-pointer shadow-md hover:shadow-lg"
              >
                ‹
              </button>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-white/50">
                <span className="text-sm sm:text-base font-semibold text-cocoa">
                  {currentPage + 1} / {totalPages}
                </span>
                <div className="flex gap-1.5 ml-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentPage ? 'bg-merlot shadow-md' : 'bg-cocoa/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <button 
                onClick={goToNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center transition-all duration-300 bg-mauve text-white hover:bg-cocoa hover:scale-110 cursor-pointer shadow-md hover:shadow-lg"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProductModal />
    </>
  );
}

export default ProductShowcase;