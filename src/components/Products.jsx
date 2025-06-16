import { products } from "../products.jsx";
import "../styles/products.css";

function Products() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <div className="product-price">${product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Products;
