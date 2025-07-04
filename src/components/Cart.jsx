import "../styles/cart.css";

function Cart({ cart }) {
  if (cart.length === 0) {
    return <p style={{ textAlign: "center" }}>Your cart is empty</p>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
