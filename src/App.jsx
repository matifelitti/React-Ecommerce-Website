import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsByGender from "./components/ProductsByGender";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ProductsByGender />
      <Products />
    </>
  );
}

export default App;
