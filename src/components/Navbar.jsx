import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
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
        <a href="#" onClick={handleLinkClick}>
          Footwear
        </a>
        <a href="#" onClick={handleLinkClick}>
          Apparel
        </a>
        <a href="#" onClick={handleLinkClick}>
          Accessories
        </a>
      </div>
    </div>
  );
}

export default Navbar;
