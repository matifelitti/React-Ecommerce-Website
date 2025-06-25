import { useParams } from "react-router-dom";
import "../styles/selectedProduct.css";

function SelectedProduct({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p style={{ textAlign: "center" }}>Product not found</p>;

  return (
    <div className="selected-product">
      <img src={product.img} alt={product.name} className="selected-image" />
      <div className="selected-details">
        <h2 className="selected-name">{product.name}</h2>
        <p className="selected-info">{product.info}</p>
        <p className="selected-price">${product.price}</p>
      </div>
    </div>
  );
}

export default SelectedProduct;
