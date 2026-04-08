import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductList from './ProductList';

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  // Filter products by category
  const filteredProducts = products.filter(p =>
    p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p>😕 No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <>
          <p className="category-count">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
          <ProductList
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </>
      )}
    </div>
  );
}

export default CategoryPage;