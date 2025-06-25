import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsByGender from "./components/ProductsByGender";
import SelectedProduct from "./components/SelectedProduct";
import { products } from "./products";

function App() {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Navbar onCategoryChange={setCategory} />
      <Routes>
        <Route
          path="/"
          element={<ProductsByGender categoryFilter={category} />}
        />
        <Route
          path="/product/:id"
          element={<SelectedProduct products={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
