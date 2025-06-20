import { useState } from "react";
import "../styles/navbar.css";

function Navbar({ onFilterCategory }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (category) => {
    onFilterCategory(category);
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo">MyStore</div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`links ${menuOpen ? "active" : ""}`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("footwear");
          }}
        >
          Footwear
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("apparel");
          }}
        >
          Apparel
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("accessories");
          }}
        >
          Accessories
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("all");
          }}
        >
          All
        </a>
      </div>
    </div>
  );
}

export default Navbar;
