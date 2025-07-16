import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ onCategoryChange, cart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    navigate("/");
    setMenuOpen(false);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo" onClick={() => navigate("/")}>
          MyStore
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("all");
            }}
          >
            All Products
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("footwear");
            }}
          >
            Footwear
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("apparel");
            }}
          >
            Apparel
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleClick("accessories");
            }}
          >
            Accessories
          </a>
          <div
            className="cart-wrapper"
            onClick={() => {
              navigate("/cart");
              setMenuOpen(false);
            }}
          >
            <img src="/images/cart.svg" alt="Cart" className="cart-icon" />
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </div>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;
