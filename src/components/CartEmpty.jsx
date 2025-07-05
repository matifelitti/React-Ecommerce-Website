import "../styles/cartEmpty.css";

function CartEmpty() {
  return (
    <div className="cart-empty-container">
      <h2>Your cart is empty</h2>
      <img
        src="/images/emptyCart.svg"
        alt="Empty Cart"
        className="empty-cart-image"
      />
    </div>
  );
}

export default CartEmpty;
