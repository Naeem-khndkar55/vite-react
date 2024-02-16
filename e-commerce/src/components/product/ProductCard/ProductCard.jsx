import "./ProductCard.css";
export const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div className="product-card">
      <h2> {product.name}</h2>
      <p>{`TK- ${product.price}`}</p>
      <h4>{` Quantity: ${product.quantity}`}</h4>
      <button onClick={handleAddToCart} className="cart-button">
        Add to Cart
      </button>
    </div>
  );
};
