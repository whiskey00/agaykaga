import React from 'react';

function ColorPalette() {
  const colorPalette = [
    { name: "COCOA", code: "#3E3333" },
    { name: "MERLOT", code: "#5E3F44" },
    { name: "MAUVE", code: "#A47E82" },
    { name: "PEONY", code: "#E6CECE" },
    { name: "PETAL", code: "#F7EAEB" },
    { name: "ALMOND", code: "#F0E7E2" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">Our Color Palette</h3>
          <p className="text-gray-600">Inspired by nature's most beautiful hues</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {colorPalette.map((color) => (
            <div key={color.name} className="text-center">
              <div 
                className="w-20 h-20 rounded-lg mx-auto mb-3 shadow-md"
                style={{ backgroundColor: color.code }}
              ></div>
              <h4 className="font-medium text-gray-800 mb-1">{color.name}</h4>
              <p className="text-sm text-gray-600">{color.code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ColorPalette;
