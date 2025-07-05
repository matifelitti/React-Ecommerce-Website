import "../styles/cart.css";
import CartEmpty from "../components/CartEmpty";

function Cart({ cart }) {
  if (cart.length === 0) {
    return <CartEmpty />;
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
