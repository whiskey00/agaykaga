import React from 'react';
import flower1 from '../images/sample_flowers/1.png';
import flower2 from '../images/sample_flowers/2.png';
import flower3 from '../images/sample_flowers/3.png';

function MidPageBanner() {
  return (
    <section className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] bg-gradient-to-r from-mauve via-merlot to-peony overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/15"></div>
        <div className="absolute bottom-6 left-1/3 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          {/* Left Flower */}
          <div className="flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/90 rounded-full p-3 sm:p-4 shadow-xl hover:scale-105 transition-transform duration-300">
              <img 
                src={flower1} 
                alt="Flower arrangement" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Center Text */}
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 font-serif">
              Handcrafted
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light">
              with Love
            </p>
          </div>
          
          {/* Right Flower */}
          <div className="flex justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/90 rounded-full p-3 sm:p-4 shadow-xl hover:scale-105 transition-transform duration-300">
              <img 
                src={flower2} 
                alt="Flower bouquet" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom accent flower */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/80 rounded-full p-2 sm:p-3 shadow-lg">
          <img 
            src={flower3} 
            alt="Accent flower" 
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      </div>
    </section>
  );
}

export default MidPageBanner;