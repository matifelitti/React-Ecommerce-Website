import { useState } from "react";
import { products } from "../products";
import Products from "./Products";
import "../styles/productsByGender.css";

function ProductsByGender({ categoryFilter = "all" }) {
  const [active, setActive] = useState("all");

  const filterProducts = () => {
    return products.filter((p) => {
      const genderMatch = active === "all" || p.gender === active;
      const categoryMatch =
        categoryFilter === "all" || p.category === categoryFilter;
      return genderMatch && categoryMatch;
    });
  };

  const filtered = filterProducts();

  return (
    <div>
      <div className="gender-filter">
        <button
          className={active === "all" ? "active" : ""}
          onClick={() => setActive("all")}
        >
          All
        </button>
        <button
          className={active === "male" ? "active" : ""}
          onClick={() => setActive("male")}
        >
          Men
        </button>
        <button
          className={active === "female" ? "active" : ""}
          onClick={() => setActive("female")}
        >
          Women
        </button>
      </div>

      <Products items={filtered} />
    </div>
  );
}

export default ProductsByGender;
