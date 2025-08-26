import React, { useState, useEffect } from 'react';

function HeroSection() {
  const slides = [
    { 
      id: 1, 
      title: "Teacher's Day Collection", 
      subtitle: "Honor the educators who shape our future with timeless floral arrangements that symbolize gratitude and respect",
      description: "Perfect for expressing appreciation",
      bg: "#3E3333" // COCOA
    },
    { 
      id: 2, 
      title: "Valentine's Day Collection", 
      subtitle: "Celebrate eternal love with handcrafted flowers that never fade, just like your feelings",
      description: "Romance that lasts forever",
      bg: "#5E3F44" // MERLOT
    },
    { 
      id: 3, 
      title: "Mother's Day Collection", 
      subtitle: "Show your appreciation for the most important woman in your life with delicate, beautiful arrangements",
      description: "Love crafted by hand",
      bg: "#A47E82" // MAUVE
    },
    { 
      id: 4, 
      title: "Christmas Collection", 
      subtitle: "Bring the magic of the holidays into your home with festive arrangements that capture the spirit of the season",
      description: "Holiday joy that endures",
      bg: "#E6CECE" // PEONY
    },
    { 
      id: 5, 
      title: "Graduation Collection", 
      subtitle: "Commemorate this milestone achievement with elegant flowers that represent growth, success, and new beginnings",
      description: "Celebrating your success",
      bg: "#F7EAEB" // PETAL
    }
  ];
  
  const [idx, setIdx] = useState(0);

  // Auto-advance slideshow every 5 seconds (increased for better reading time)
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Function to go to specific slide when dot is clicked
  const goToSlide = (slideIndex: number) => {
    setIdx(slideIndex);
  };

  // Determine text color based on background
  const getTextColor = (bgColor: string) => {
    // Light backgrounds (PEONY, PETAL) need dark text
    if (bgColor === "#E6CECE" || bgColor === "#F7EAEB") {
      return "text-cocoa";
    }
    // Dark backgrounds need white text
    return "text-white";
  };

  const getDotColor = (bgColor: string) => {
    // Light backgrounds need dark dots
    if (bgColor === "#E6CECE" || bgColor === "#F7EAEB") {
      return "bg-cocoa";
    }
    // Dark backgrounds need light dots
    return "bg-white";
  };

  const getDotInactiveColor = (bgColor: string) => {
    // Light backgrounds need dark inactive dots
    if (bgColor === "#E6CECE" || bgColor === "#F7EAEB") {
      return "bg-cocoa/40";
    }
    // Dark backgrounds need light inactive dots
    return "bg-white/40";
  };

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
      {/* Left static area with solid background */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] select-none" style={{backgroundColor: '#5e3e49'}}>
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 sm:mb-3 md:mb-4 cursive leading-tight drop-shadow-lg">
              Twist
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 cursive leading-tight drop-shadow-lg">
              and
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white cursive leading-tight drop-shadow-lg">
              Bloom
            </h1>
          </div>
        </div>
      </div>

      {/* Right slideshow area - Events */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] select-none overflow-hidden">
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-all duration-1000 ${getTextColor(slides[idx].bg)}`}
          style={{backgroundColor: slides[idx].bg}}
        >
          <div className="text-center max-w-md mx-auto">
            {/* Decorative line */}
            <div className={`w-16 h-0.5 mx-auto mb-3 sm:mb-4 ${getTextColor(slides[idx].bg) === 'text-white' ? 'bg-white/60' : 'bg-cocoa/60'}`}></div>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 font-serif leading-tight">
              {slides[idx].title}
            </h2>
            
            <p className={`text-xs sm:text-sm md:text-base font-light leading-relaxed mb-2 sm:mb-3 ${getTextColor(slides[idx].bg) === 'text-white' ? 'text-white/90' : 'text-cocoa/80'}`}>
              {slides[idx].subtitle}
            </p>
            
            <div className={`text-xs sm:text-sm font-medium italic ${getTextColor(slides[idx].bg) === 'text-white' ? 'text-white/70' : 'text-cocoa/70'}`}>
              {slides[idx].description}
            </div>
            
            {/* Decorative line */}
            <div className={`w-12 h-0.5 mx-auto mt-3 sm:mt-4 ${getTextColor(slides[idx].bg) === 'text-white' ? 'bg-white/60' : 'bg-cocoa/60'}`}></div>
          </div>
        </div>
        
        {/* Clickable Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
                index === idx 
                  ? `${getDotColor(slides[idx].bg)} scale-125` 
                  : `${getDotInactiveColor(slides[idx].bg)} hover:scale-110`
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;