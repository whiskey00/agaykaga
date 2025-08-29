// Import sample flower images
import flower1 from '../images/sample_flowers/1.jpg';
import flower2 from '../images/sample_flowers/2.png';
import flower3 from '../images/sample_flowers/3.png';
import flower4 from '../images/sample_flowers/4.png';
import flower5 from '../images/sample_flowers/5.png';
import flower6 from '../images/sample_flowers/6.png';
import flower7 from '../images/sample_flowers/7.png';
import flower8 from '../images/sample_flowers/8.png';

// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: ProductCategory;
}

export type ProductCategory = "Bouquet" | "Single Flower" | "Flower Pot" | "Keychain";

export const CATEGORIES: ProductCategory[] = ["Bouquet", "Single Flower", "Flower Pot", "Keychain"];

// Product Database - Easy to maintain and add new products
export const PRODUCTS: Product[] = [
  // Set 1 - Products 1-10
  {
    id: 1,
    name: "Rose Bouquet",
    price: 120.00,
    image: flower1,
    description: "A beautiful arrangement of handcrafted wire roses that will never wilt. Perfect for expressing love and appreciation.",
    category: "Bouquet"
  },
  {
    id: 2,
    name: "Lily Arrangement",
    price: 150.00,
    image: flower2,
    description: "Elegant white lilies crafted with attention to detail. Symbolizes purity and rebirth.",
    category: "Single Flower"
  },
  {
    id: 3,
    name: "Tulip Collection",
    price: 100.00,
    image: flower3,
    description: "Vibrant tulips that bring spring into your home year-round. Each petal is carefully shaped by hand.",
    category: "Bouquet"
  },
  {
    id: 4,
    name: "Sunflower Bundle",
    price: 180.00,
    image: flower4,
    description: "Bright and cheerful sunflowers that capture the warmth of summer. Perfect for any room.",
    category: "Bouquet"
  },
  {
    id: 5,
    name: "Orchid Display",
    price: 200.00,
    image: flower5,
    description: "Exotic orchids that showcase elegance and sophistication. A premium addition to any space.",
    category: "Flower Pot"
  },
  {
    id: 6,
    name: "Cherry Blossom",
    price: 140.00,
    image: flower6,
    description: "Delicate cherry blossoms that represent renewal and the beauty of life.",
    category: "Single Flower"
  },
  {
    id: 7,
    name: "Hydrangea Bundle",
    price: 165.00,
    image: flower7,
    description: "Full hydrangea blooms in beautiful clusters that symbolize heartfelt emotions.",
    category: "Bouquet"
  },
  {
    id: 8,
    name: "Peony Collection",
    price: 175.00,
    image: flower8,
    description: "Luxurious peonies that represent honor, wealth, and good fortune.",
    category: "Flower Pot"
  },
  {
    id: 9,
    name: "Lavender Keychain",
    price: 45.00,
    image: flower1,
    description: "Miniature lavender charm that brings calming energy wherever you go.",
    category: "Keychain"
  },
  {
    id: 10,
    name: "Rose Keychain",
    price: 50.00,
    image: flower2,
    description: "Tiny rose charm crafted with love, perfect for everyday carry.",
    category: "Keychain"
  },

  // Set 2 - Products 11-20
  {
    id: 11,
    name: "Daisy Chain",
    price: 90.00,
    image: flower6,
    description: "Sweet and simple daisies that bring joy and innocence to any setting.",
    category: "Bouquet"
  },
  {
    id: 12,
    name: "Carnation Mix",
    price: 110.00,
    image: flower7,
    description: "A colorful mix of carnations representing admiration and love.",
    category: "Bouquet"
  },
  {
    id: 13,
    name: "Peony Bouquet",
    price: 160.00,
    image: flower8,
    description: "Luxurious peonies that symbolize honor and wealth. Full and fluffy design.",
    category: "Bouquet"
  },
  {
    id: 14,
    name: "Lavender Bundle",
    price: 85.00,
    image: flower1,
    description: "Calming lavender sprigs that bring peace and tranquility to your space.",
    category: "Single Flower"
  },
  {
    id: 15,
    name: "Iris Collection",
    price: 130.00,
    image: flower2,
    description: "Regal irises that represent wisdom and valor. Perfect for elegant displays.",
    category: "Bouquet"
  },
  {
    id: 16,
    name: "Magnolia Bloom",
    price: 155.00,
    image: flower3,
    description: "Elegant magnolia flowers that symbolize dignity and perseverance.",
    category: "Single Flower"
  },
  {
    id: 17,
    name: "Jasmine Arrangement",
    price: 125.00,
    image: flower4,
    description: "Fragrant jasmine flowers that represent grace and elegance.",
    category: "Bouquet"
  },
  {
    id: 18,
    name: "Violet Pot",
    price: 95.00,
    image: flower5,
    description: "Delicate violets in a charming pot arrangement.",
    category: "Flower Pot"
  },
  {
    id: 19,
    name: "Daisy Keychain",
    price: 40.00,
    image: flower6,
    description: "Cute daisy charm that brings sunshine to your day.",
    category: "Keychain"
  },
  {
    id: 20,
    name: "Tulip Keychain",
    price: 42.00,
    image: flower7,
    description: "Miniature tulip charm representing perfect love.",
    category: "Keychain"
  },

  // Set 3 - Products 21-30
  {
    id: 21,
    name: "Chrysanthemum",
    price: 95.00,
    image: flower3,
    description: "Beautiful chrysanthemums that symbolize longevity and joy.",
    category: "Single Flower"
  },
  {
    id: 22,
    name: "Gerbera Daisy",
    price: 105.00,
    image: flower4,
    description: "Vibrant gerbera daisies that radiate happiness and cheerfulness.",
    category: "Single Flower"
  },
  {
    id: 23,
    name: "Hydrangea",
    price: 170.00,
    image: flower5,
    description: "Full hydrangea blooms that represent heartfelt emotions and understanding.",
    category: "Flower Pot"
  },
  {
    id: 24,
    name: "Marigold Mix",
    price: 75.00,
    image: flower6,
    description: "Bright marigolds that bring warmth and positive energy to any space.",
    category: "Bouquet"
  },
  {
    id: 25,
    name: "Pansy Collection",
    price: 80.00,
    image: flower7,
    description: "Delicate pansies with their characteristic 'faces' that symbolize thoughtfulness.",
    category: "Keychain"
  },
  {
    id: 26,
    name: "Zinnia Bouquet",
    price: 115.00,
    image: flower8,
    description: "Colorful zinnias that represent remembrance and lasting friendship.",
    category: "Bouquet"
  },
  {
    id: 27,
    name: "Camellia Display",
    price: 185.00,
    image: flower1,
    description: "Elegant camellias that symbolize admiration and perfection.",
    category: "Single Flower"
  },
  {
    id: 28,
    name: "Begonia Pot",
    price: 88.00,
    image: flower2,
    description: "Charming begonias in a decorative pot arrangement.",
    category: "Flower Pot"
  },
  {
    id: 29,
    name: "Sunflower Keychain",
    price: 48.00,
    image: flower3,
    description: "Bright sunflower charm that brings joy and positivity.",
    category: "Keychain"
  },
  {
    id: 30,
    name: "Orchid Keychain",
    price: 55.00,
    image: flower4,
    description: "Elegant orchid charm representing luxury and strength.",
    category: "Keychain"
  }
];

// Utility functions for product management
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return PRODUCTS.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductSets = (itemsPerSet: number = 10): Product[][] => {
  const sets: Product[][] = [];
  for (let i = 0; i < PRODUCTS.length; i += itemsPerSet) {
    sets.push(PRODUCTS.slice(i, i + itemsPerSet));
  }
  return sets;
};

// Helper function to add new products easily
export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const newProduct = {
    ...product,
    id: Math.max(...PRODUCTS.map(p => p.id)) + 1
  };
  PRODUCTS.push(newProduct);
  return newProduct;
};
