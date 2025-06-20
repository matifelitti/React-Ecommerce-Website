import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductsByGender from "./components/ProductsByGender";
import "./App.css";

function App() {
  const [categoryFilter, setCategoryFilter] = useState("all");

  return (
    <>
      <Navbar onFilterCategory={setCategoryFilter} />
      <ProductsByGender categoryFilter={categoryFilter} />
    </>
  );
}

export default App;
