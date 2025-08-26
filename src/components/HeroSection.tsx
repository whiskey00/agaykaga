import React, { useState } from 'react';

function HeroSection() {
  const slides = [
    { id: 1, label: "Slideshow", bg: "bg-mauve" },
    { id: 2, label: "Slideshow", bg: "bg-merlot" },
    { id: 3, label: "Slideshow", bg: "bg-peony" },
  ];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % slides.length);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section id="hero" className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 w-full px-2 sm:px-4">
      {/* Left static image area */}
      <div className="flex items-center justify-center h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] text-white text-lg sm:text-xl select-none bg-mauve">
        Image
      </div>

      {/* Right slideshow area */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] select-none overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center text-white text-lg sm:text-xl ${slides[idx].bg}`}>
          Another Image but slideshow
        </div>
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center gap-1 sm:gap-2">
          <button onClick={prev} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cocoa/70 text-white grid place-items-center text-sm sm:text-base hover:bg-cocoa/80 transition-colors">‹</button>
          <button onClick={next} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cocoa/70 text-white grid place-items-center text-sm sm:text-base hover:bg-cocoa/80 transition-colors">›</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;