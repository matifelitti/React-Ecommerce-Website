import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsByGender from "./components/ProductsByGender";
import SelectedProduct from "./components/SelectedProduct";
import Cart from "./components/Cart";
import { products } from "./products";

function App() {
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <>
      <Navbar onCategoryChange={setCategory} cart={cart} />
      {location.pathname === "/" && (
        <ProductsByGender categoryFilter={category} />
      )}
      <Routes>
        <Route path="/" element={null} />
        <Route
          path="/product/:id"
          element={
            <SelectedProduct
              products={products}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
