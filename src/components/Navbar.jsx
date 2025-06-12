import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">MyStore</div>
        <div className="links">
          <a href="#">Footwear</a>
          <a href="#">Apparel</a>
          <a href="#">Accessories</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
