import React, { useState } from "react";
import { ProductCard } from "./ProductCard/ProductCard";
import "./Products.css";
export const Products = () => {
  const [cart, setCart] = useState([]);
  const products = [
    {
      id: "1",
      name: "computer",
      price: 70000,
      quantity: 20,
    },
    {
      id: "2",
      name: "I-Phone",
      price: 100000,
      quantity: 30,
    },
    {
      id: "3",
      name: "Samsung",
      price: 80000,
      quantity: 50,
    },
  ];
  const checkExisi = (productId) => {
    return cart.some((product) => product.id === productId);
  };
  const addProductToCart = (product) => {
    if (checkExisi(product.id)) {
      alert("already in the cart!");
      return;
    }
    setCart([...cart, product]);
  };
  const cartItem = cart.length;
  return (
    <div className="products">
      <div>
        <h3>{`In cart ${cartItem}`}</h3>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addProductToCart}
          />
        ))}
      </div>
    </div>
  );
};
