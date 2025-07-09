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
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const updated = [...prevCart];
        updated[index].quantity += 1;
        return updated;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
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
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemoveFromCart={removeFromCart}
              onIncreaseQuantity={increaseQuantity}
              onDecreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
