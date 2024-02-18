import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  const [id, setId] = useState();

  return (
    <div className="flex m-2">
      <ProductList onClickImage={setId} />
      <ProductDetails id={id ? id : "1"} />
    </div>
  );
}

export default App;
