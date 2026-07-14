import React from 'react';
import flower1 from '../../images/sample_flowers/1.png';
import flower2 from '../../images/sample_flowers/2.png';
import flower3 from '../../images/sample_flowers/3.png';

function MidPageBanner() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      {/* Halftone accent, inverted */}
      <div className="pointer-events-none absolute inset-0 halftone-invert opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-24 md:py-28 text-center">
        <div className="micro-label !text-white/60 mb-4">
          05 &mdash; customization
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
          every bouquet can be customized
        </h2>
        <h2 className="font-pixel text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/70 mt-2 leading-tight">
          into any shade you love.
        </h2>

        <div className="h-px w-16 bg-white/30 mx-auto mt-8" />

        {/* Flower rail */}
        <div className="flex justify-center items-center gap-6 sm:gap-10 mt-10">
          {[flower1, flower2, flower3].map((src, i) => (
            <div
              key={i}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border border-white/25 p-3 grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <img src={src} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MidPageBanner;
