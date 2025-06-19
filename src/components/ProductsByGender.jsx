import { useState } from "react";
import { products } from "../products";
import Products from "./Products";
import "../styles/productsByGender.css";

function ProductsByGender() {
  const [filtered, setFiltered] = useState(products);
  const [active, setActive] = useState("all");

  const filterProducts = (type) => {
    setActive(type);
    if (type === "all") return setFiltered(products);
    setFiltered(products.filter((p) => p.gender === type));
  };

  return (
    <div>
      <div className="gender-filter">
        <button
          className={active === "all" ? "active" : ""}
          onClick={() => filterProducts("all")}
        >
          All
        </button>
        <button
          className={active === "male" ? "active" : ""}
          onClick={() => filterProducts("male")}
        >
          Men
        </button>
        <button
          className={active === "female" ? "active" : ""}
          onClick={() => filterProducts("female")}
        >
          Women
        </button>
      </div>

      <Products items={filtered} />
    </div>
  );
}

export default ProductsByGender;
