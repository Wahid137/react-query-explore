import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="flex ">
      <ProductList />
      <ProductDetails />
    </div>
  );
}

export default App;
