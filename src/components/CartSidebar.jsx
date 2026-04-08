import React from 'react';
import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      {/* Header */}
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose} className="close-btn" aria-label="Close cart">✕</button>
      </div>

      {/* Cart Items */}
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <p className="cart-item-subtotal">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              
              <div className="cart-item-quantity">
                <button 
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              
              <button 
                className="remove-btn"
                onClick={() => onRemoveItem(item.id)}
                aria-label="Remove item"
              >
                🗑️
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer with total */}
      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-price">${calculateTotal().toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;
