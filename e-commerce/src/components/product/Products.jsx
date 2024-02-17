import { ProductCard } from "./ProductCard/ProductCard";
import "./Products.css";
import { useProducts } from "./hooks/useProducts";

export const Products = () => {
  const { products, cart, addProductToCart, removeFromCart, checkExist } =
    useProducts();
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
            isAdded={checkExist(product.id)}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
};
