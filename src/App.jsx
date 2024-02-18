import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  const [id, setId] = useState();

  return (
    <div className="flex m-2">
      <AddProduct />
      <ProductList onClickImage={setId} />
      <ProductDetails id={id ? id : "1"} />
    </div>
  );
}

export default App;
