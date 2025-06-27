import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ onCategoryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo" onClick={() => navigate("/")}>
          MyStore
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
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
      </div>
    </div>
  );
}

export default Navbar;
