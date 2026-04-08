import React from 'react';
import { useCart } from '../context/CartContext';
import ProductList from './ProductList';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  // Filter products based on search term
  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">
          Found {filteredProducts.length} products for "{searchTerm}"
        </p>
      )}

      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      {filteredProducts.length === 0 && searchTerm && (
        <div className="no-results">
          <p>😕 No products found for "{searchTerm}"</p>
          <p>Try searching for something else</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;