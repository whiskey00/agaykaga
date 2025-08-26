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

function ProductShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Create multiple sets of 5 different flowers
  const flowerSets = [
    // Set 1
    [
      { id: 1, name: "Rose Bouquet", price: 120.00, image: flower1 },
      { id: 2, name: "Lily Arrangement", price: 150.00, image: flower2 },
      { id: 3, name: "Tulip Collection", price: 100.00, image: flower3 },
      { id: 4, name: "Sunflower Bundle", price: 180.00, image: flower4 },
      { id: 5, name: "Orchid Display", price: 200.00, image: flower5 }
    ],
    // Set 2
    [
      { id: 6, name: "Daisy Chain", price: 90.00, image: flower6 },
      { id: 7, name: "Carnation Mix", price: 110.00, image: flower7 },
      { id: 8, name: "Peony Bouquet", price: 160.00, image: flower8 },
      { id: 9, name: "Lavender Bundle", price: 85.00, image: flower1 },
      { id: 10, name: "Iris Collection", price: 130.00, image: flower2 }
    ],
    // Set 3
    [
      { id: 11, name: "Chrysanthemum", price: 95.00, image: flower3 },
      { id: 12, name: "Gerbera Daisy", price: 105.00, image: flower4 },
      { id: 13, name: "Hydrangea", price: 170.00, image: flower5 },
      { id: 14, name: "Marigold Mix", price: 75.00, image: flower6 },
      { id: 15, name: "Pansy Collection", price: 80.00, image: flower7 }
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

  const categories = ["Bouquet", "Single Flower", "Flower Pot", "Keychain"];

  function ProductCard({ product }: { product: { id: number; name: string; price: number; image: string } }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-5 w-full max-w-xs mx-auto border border-petal/50 hover:border-merlot/30 hover:-translate-y-1">
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
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 px-4">
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

  return (
    <section id="product-showcase" className="text-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-petal/30 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cocoa mb-3 sm:mb-4 px-4 leading-tight">
            Check some pieces of happiness you can keep forever
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-merlot mx-auto rounded-full"></div>
        </div>

      <CategoryPills />

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center pb-6">
          {currentFlowers.slice(0, isMobile ? 4 : currentFlowers.length).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
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
  );
}

export default ProductShowcase;