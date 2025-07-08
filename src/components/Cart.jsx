import "../styles/cart.css";
import CartEmpty from "../components/CartEmpty";

function Cart({ cart, onRemoveFromCart }) {
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
            <img
              src="/images/delete.svg"
              alt="Delete"
              className="delete-icon"
              onClick={() => onRemoveFromCart(index)}
              title="Remove item"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
