import React from 'react';
import flower1 from '../../images/sample_flowers/1.png';
import flower2 from '../../images/sample_flowers/2.png';
import flower3 from '../../images/sample_flowers/3.png';

function MidPageBanner() {
  return (
    <section className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] bg-merlot overflow-hidden">
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Message */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 font-serif leading-tight">
            Every bouquet can be customized<br />
            <span className="text-peony">into different shade of color</span>
          </h2>
          
          {/* Decorative Line */}
          <div className="w-16 sm:w-20 md:w-24 lg:w-32 h-1 bg-peony mx-auto rounded-full"></div>
          
          {/* Flower Images */}
          <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8">
            {/* Left Flower */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/20 hover:scale-105 transition-transform duration-300">
              <img 
                src={flower1} 
                alt="Custom flower arrangement" 
                className="w-full h-full object-contain opacity-90"
              />
            </div>
            
            {/* Center Flower */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white/15 backdrop-blur-sm rounded-full p-3 sm:p-4 border-2 border-white/30 hover:scale-105 transition-transform duration-300 shadow-xl">
              <img 
                src={flower2} 
                alt="Customizable bouquet" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Right Flower */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-white/20 hover:scale-105 transition-transform duration-300">
              <img 
                src={flower3} 
                alt="Color variations" 
                className="w-full h-full object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MidPageBanner;