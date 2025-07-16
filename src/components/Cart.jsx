import "../styles/cart.css";
import CartEmpty from "./CartEmpty";

function Cart({
  cart,
  onRemoveFromCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) {
  if (cart.length === 0) return <CartEmpty />;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <p className="item-name">{item.name}</p>
              <p className="unit-price">Unit: ${item.price}</p>
              <p className="total-price">
                Total: ${item.price * item.quantity}
              </p>
              <div className="quantity-controls">
                <button
                  onClick={() => onDecreaseQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <img
              src="/images/delete.png"
              alt="Delete"
              className="delete-icon"
              onClick={() => onRemoveFromCart(item.id)}
              title="Remove item"
            />
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <button className="pay-button">Pay</button>
        <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
