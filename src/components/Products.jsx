import "../styles/products.css";
import { useNavigate } from "react-router-dom";

function Products({ items = [] }) {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {items.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img src={product.img} alt={product.name} className="product-img" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
