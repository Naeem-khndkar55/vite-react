import React from "react";
import "./ProductCard.css";

export const ProductCard = ({
  product,
  addToCart,
  isAdded,
  removeFromCart,
}) => {
  const handleAddToCart = () => {
    addToCart(product);
  };
  const removeProduct = () => {
    removeFromCart(product.id);
  };
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{`TK- ${product.price}`}</p>
      <h4>{` Quantity: ${product.quantity}`}</h4>

      {isAdded ? (
        <button className="cart-button" onClick={removeProduct}>
          Remove
        </button>
      ) : (
        <button onClick={handleAddToCart} className="cart-button">
          Add to Cart
        </button>
      )}
    </div>
  );
};
