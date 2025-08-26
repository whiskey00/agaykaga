import React from 'react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F0E7E2]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0E7E2] to-[#E6CECE]">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About AGAYKAGA</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are passionate artisans dedicated to creating beautiful, everlasting fuzzy wire flowers 
            that bring joy and warmth to your space.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Filling your space with something that makes you and your loved ones smile is a sweet reminder to celebrate life's simple joys.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece we create is handcrafted with love, using premium materials and time-honored techniques. 
                Our flowers never wilt, never fade, and always bring a smile.
              </p>
            </div>
            <div className="bg-[#A47E82] h-96 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-medium">Our Workshop</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#A47E82] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Handcrafted with Love</h3>
              <p className="text-gray-600">
                Every flower is carefully crafted by hand, ensuring unique beauty in every piece.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#A47E82] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Beauty</h3>
              <p className="text-gray-600">
                Our flowers last forever, reducing waste while bringing lasting joy to your home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#A47E82] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Materials</h3>
              <p className="text-gray-600">
                We use only the finest materials to ensure your flowers maintain their beauty for years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F7EAEB]">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Facebook</h3>
              <p className="text-gray-600">facebook.com/agaykaga</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600">ichacasabar@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Instagram</h3>
              <p className="text-gray-600">instagram.com/agaykaga</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
