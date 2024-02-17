import { useState } from "react";

import { productServices } from "../../../services";
export const useProducts = () => {
  const [cart, setCart] = useState([]);
  const products = productServices.getProducts();

  const checkExist = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const addProductToCart = (product) => {
    if (checkExist(product.id)) {
      alert("Already in the cart!");
      return;
    }
    setCart([...cart, product]);
  };
  const removeFromCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== productId));
  };
  return { products, cart, addProductToCart, removeFromCart, checkExist };
};
