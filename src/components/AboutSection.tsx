import React from 'react';
import { Facebook, Mail, Instagram, Heart } from 'lucide-react';

function AboutSection() {
  return (
    <footer className="bg-cocoa text-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Heart className="w-8 h-8 text-petal" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">AGAYKAGA</h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-petal max-w-md mx-auto lg:mx-0">
              Filling your space with something that makes you and your loved ones smile is a sweet reminder to celebrate life's simple joys.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-6 text-white">Connect With Us</h4>
            <div className="flex flex-col gap-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com/agaykaga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">Facebook</p>
                  <p className="text-xs text-petal">facebook.com/agaykaga</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:ichacasabar@gmail.com"
                className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-xs text-petal">ichacasabar@gmail.com</p>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/agaykaga" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-white">Instagram</p>
                  <p className="text-xs text-petal">instagram.com/agaykaga</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-center text-xs text-petal/80">
            © 2025 AGAYKAGA. Handcrafted with love for lasting beauty.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default AboutSection;