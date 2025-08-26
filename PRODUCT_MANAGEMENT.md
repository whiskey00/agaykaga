# Product Management Guide

## Overview
The ProductShowcase component has been restructured for professional maintainability and easy product management.

## File Structure
```
src/
├── components/
│   ├── ProductShowcase.tsx      # Main container component
│   ├── ProductCard.tsx          # Individual product display
│   ├── CategoryFilter.tsx       # Category filter buttons
│   ├── ProductGrid.tsx          # Product grid layout
│   ├── ProductNavigation.tsx    # Pagination controls
│   └── ProductModal.tsx         # Product detail modal
├── hooks/
│   ├── useProductFilter.ts      # Product filtering logic
│   ├── useModal.ts              # Modal state management
│   └── useResponsive.ts         # Responsive breakpoint detection
└── data/
    └── products.ts              # **MAIN FILE FOR PRODUCT MANAGEMENT**
```

## Adding New Products

### Step 1: Add Product Data
Edit `src/data/products.ts` and add your product to the `PRODUCTS` array:

```typescript
{
  id: 31, // Use next available ID
  name: "Your Product Name",
  price: 99.99,
  image: flowerX, // Import your image at the top
  description: "Detailed description of your product...",
  category: "Bouquet" // "Bouquet" | "Single Flower" | "Flower Pot" | "Keychain"
}
```

### Step 2: Add Product Image
1. Place your image in `src/images/sample_flowers/`
2. Import it at the top of `products.ts`:
   ```typescript
   import flowerX from '../images/sample_flowers/your-image.png';
   ```

### Example: Adding a New Product
```typescript
// At the top of products.ts
import flower9 from '../images/sample_flowers/9.png';

// In the PRODUCTS array
{
  id: 31,
  name: "Wedding Bouquet Special",
  price: 250.00,
  image: flower9,
  description: "An elegant wedding bouquet featuring white roses and baby's breath, perfect for your special day.",
  category: "Bouquet"
}
```

## Product Categories
- **"Bouquet"**: Flower arrangements
- **"Single Flower"**: Individual flower displays
- **"Flower Pot"**: Potted arrangements
- **"Keychain"**: Miniature flower accessories (currently disabled)

## Utility Functions

### Easy Product Addition
Use the helper function to add products programmatically:
```typescript
import { addProduct } from './data/products';

const newProduct = addProduct({
  name: "Rose Garden",
  price: 150.00,
  image: flowerX,
  description: "Beautiful rose garden arrangement",
  category: "Bouquet"
});
// ID is automatically assigned
```

### Filter Products by Category
```typescript
import { getProductsByCategory } from './data/products';

const bouquets = getProductsByCategory("Bouquet");
const singleFlowers = getProductsByCategory("Single Flower");
```

### Get Product by ID
```typescript
import { getProductById } from './data/products';

const product = getProductById(1);
```

## Component Features

### Responsive Design
- **Mobile**: 2x2 grid (4 products)
- **Tablet**: 3 columns
- **Desktop**: 5x2 grid (10 products)

### Category Filtering
- **All**: Shows paginated view of all products
- **Category**: Shows all products in that category
- **Keychain**: Disabled with "Coming Soon" tooltip

### Pagination
- Only shown when "All" category is selected
- Automatically calculates total pages
- 10 products per page by default

## Customization

### Change Products Per Page
Edit the `useProductFilter(10)` parameter in `ProductShowcase.tsx`:
```typescript
const {...} = useProductFilter(12); // 12 products per page
```

### Enable Keychain Category
In `src/hooks/useProductFilter.ts`, remove the keychain check:
```typescript
const handleCategoryChange = (category: FilterOption) => {
  // Remove this line: if (category === "Keychain") return;
  setSelectedCategory(category);
  setCurrentPage(0);
};
```

### Modify Grid Layout
Edit `ProductGrid.tsx` to change the grid structure:
```typescript
// Current: grid-cols-2 sm:grid-cols-3 md:grid-cols-5
// Example: grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6
```

## TypeScript Types
All components are fully typed for better development experience:
- `Product`: Product data structure
- `ProductCategory`: Available categories
- `FilterOption`: Filter options including "All"

## Best Practices
1. **Images**: Use consistent image sizes and formats (PNG recommended)
2. **Descriptions**: Keep descriptions informative but concise
3. **Pricing**: Use consistent decimal formatting (2 decimal places)
4. **IDs**: Always use unique, sequential IDs
5. **Categories**: Stick to the defined category types

## Maintenance
- **Adding**: Simply add to `PRODUCTS` array
- **Removing**: Remove from `PRODUCTS` array
- **Updating**: Modify the product object in `PRODUCTS` array
- **Reordering**: Change the order in `PRODUCTS` array

The system automatically handles filtering, pagination, and display logic!
