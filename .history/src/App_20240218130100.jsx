import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="flex m-2">
      <ProductList onClickImage={setId} />
      <ProductDetails />
    </div>
  );
}

export default App;
