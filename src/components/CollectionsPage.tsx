import React, { useState } from 'react';
import { Grid, List, ChevronDown } from 'lucide-react';

// Import sample flower images
import flower1 from '../images/sample_flowers/1.png';
import flower2 from '../images/sample_flowers/2.png';
import flower3 from '../images/sample_flowers/3.png';
import flower4 from '../images/sample_flowers/4.png';
import flower5 from '../images/sample_flowers/5.png';
import flower6 from '../images/sample_flowers/6.png';
import flower7 from '../images/sample_flowers/7.png';
import flower8 from '../images/sample_flowers/8.png';

function CollectionsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('default');

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Sunset Rose Bouquet",
      price: 45.00,
      image: flower1,
      category: "Bouquets",
      color: "Red",
      size: "L",
      brand: "Fuzzy Wire"
    },
    {
      id: 2,
      name: "Lavender Field Arrangement",
      price: 38.00,
      image: flower2,
      category: "Bouquets",
      color: "Purple",
      size: "M",
      brand: "Fuzzy Wire"
    },
    {
      id: 3,
      name: "Wildflower Mix",
      price: 32.00,
      image: flower3,
      category: "Bouquets",
      color: "Mixed",
      size: "S",
      brand: "Fuzzy Wire"
    },
    {
      id: 4,
      name: "Spring Tulip Collection",
      price: 42.00,
      image: flower4,
      category: "Single flower",
      color: "Pink",
      size: "M",
      brand: "Fuzzy Wire"
    },
    {
      id: 5,
      name: "Autumn Rustic Bundle",
      price: 35.00,
      image: flower5,
      category: "Single flower",
      color: "Orange",
      size: "L",
      brand: "Fuzzy Wire"
    },
    {
      id: 6,
      name: "Elegant White Roses",
      price: 48.00,
      image: flower6,
      category: "flower pot",
      color: "White",
      size: "XL",
      brand: "Fuzzy Wire"
    },
    {
      id: 7,
      name: "Garden Delight",
      price: 41.00,
      image: flower7,
      category: "flower pot",
      color: "Green",
      size: "M",
      brand: "Fuzzy Wire"
    },
    {
      id: 8,
      name: "Summer Breeze",
      price: 39.00,
      image: flower8,
      category: "keychain",
      color: "Yellow",
      size: "S",
      brand: "Fuzzy Wire"
    }
  ];

  const categories = [
    { name: "Bouquets", count: 3 },
    { name: "Single Flower", count: 2 },
    { name: "Flower Pot", count: 2 },
    { name: "Keychain", count: 1 }
  ];

  const colors = ["Red", "Purple", "Pink", "Orange", "White", "Green", "Yellow", "Mixed"];
  const sizes = ["S", "M", "L", "XL"];
  const brands = ["Fuzzy Wire"];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Page Header */}
      <div className="bg-stone-800 text-white py-8">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif mb-2">Collection</h1>
        </div>
      </div>

      <div className="w-full px-8 sm:px-12 lg:px-16 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="bg-stone-50 rounded-lg shadow-sm p-6 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.name} className="flex items-center justify-between cursor-pointer">
                      <span className="text-stone-600 hover:text-stone-800">{category.name}</span>
                      <span className="text-stone-400 text-sm">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Price</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-stone-600">
                    <span>$20.00</span>
                    <span>$150.00</span>
                  </div>
                  <div className="w-full bg-stone-200 rounded-full h-2">
                    <div className="bg-stone-800 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Color</h3>
                <div className="grid grid-cols-4 gap-2">
                  {colors.map((color) => (
                    <div key={color} className="flex flex-col items-center space-y-1">
                      <div className={`w-8 h-8 rounded-full border-2 border-stone-200 cursor-pointer hover:border-stone-400 ${
                        color === 'Red' ? 'bg-red-400' :
                        color === 'Purple' ? 'bg-purple-400' :
                        color === 'Pink' ? 'bg-pink-400' :
                        color === 'Orange' ? 'bg-orange-400' :
                        color === 'White' ? 'bg-stone-100' :
                        color === 'Green' ? 'bg-green-400' :
                        color === 'Yellow' ? 'bg-yellow-400' :
                        'bg-gradient-to-r from-red-400 to-blue-400'
                      }`}></div>
                      <span className="text-xs text-stone-600">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Size</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <label key={size} className="flex items-center justify-between cursor-pointer">
                      <span className="text-stone-600 hover:text-stone-800">{size}</span>
                      <span className="text-stone-400 text-sm">({products.filter(p => p.size === size).length})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center justify-between cursor-pointer">
                      <span className="text-stone-600 hover:text-stone-800">{brand}</span>
                      <span className="text-stone-400 text-sm">({products.length})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Products */}
          <div className="lg:w-3/4">
            {/* Top Bar */}
            <div className="bg-stone-50 rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-stone-600">Showing 1-{products.length} of {products.length} items</p>
                <div className="flex items-center space-x-4">
                  {/* View Mode Toggle */}
                  <div className="flex border border-stone-200 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-stone-800 text-white' : 'text-stone-600'}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-stone-800 text-white' : 'text-stone-600'}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-stone-200 rounded-lg px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-400"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <div key={product.id} className="text-center">
                                   <div className="mb-4 p-6">
                   <img
                     src={product.image}
                     alt={product.name}
                     className="w-full h-80 object-contain"
                   />
                 </div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-stone-800">₱{product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {product.color !== 'Mixed' && (
                        <div className={`w-4 h-4 rounded-full border border-stone-200 ${
                          product.color === 'Red' ? 'bg-red-400' :
                          product.color === 'Purple' ? 'bg-purple-400' :
                          product.color === 'Pink' ? 'bg-pink-400' :
                          product.color === 'Orange' ? 'bg-orange-400' :
                          product.color === 'White' ? 'bg-stone-100' :
                          product.color === 'Green' ? 'bg-green-400' :
                          product.color === 'Yellow' ? 'bg-yellow-400' :
                          'bg-gradient-to-r from-red-400 to-blue-400'
                        }`}></div>
                      )}
                    </div>
                    <button className="bg-stone-800 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition-colors text-sm">
                      Message to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <div className="w-full bg-stone-200 h-px mb-6"></div>
              <button className="bg-stone-800 text-white px-8 py-3 rounded-lg hover:bg-stone-700 transition-colors">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
