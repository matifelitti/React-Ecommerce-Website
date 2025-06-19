import "../styles/products.css";

function Products({ items = [] }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <div key={product.id} className="product-card">
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
