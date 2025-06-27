import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsByGender from "./components/ProductsByGender";
import SelectedProduct from "./components/SelectedProduct";
import { products } from "./products";

function App() {
  const [category, setCategory] = useState("all");
  const location = useLocation();

  return (
    <>
      <Navbar onCategoryChange={setCategory} />
      {location.pathname === "/" && (
        <ProductsByGender categoryFilter={category} />
      )}
      <Routes>
        <Route path="/" element={null} />
        <Route
          path="/product/:id"
          element={<SelectedProduct products={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
