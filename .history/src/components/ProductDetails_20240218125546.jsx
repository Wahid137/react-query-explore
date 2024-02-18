import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProduct,
  });

  return (
    <div>
      <h1 className="text-3xl">Product Details</h1>
      <div className="border bg-gray-100 p-1 text-md rounded flex flex-col">
        <img src={product.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default ProductDetails;
