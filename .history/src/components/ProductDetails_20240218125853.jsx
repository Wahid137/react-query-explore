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

  if (isLoading) return <div>Product Fetching.......</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1 className="text-3xl my-2">Product Details</h1>
      <div className="border p-5 bg-gray-100 text-md rounded flex flex-col">
        <img
          src={product.thumbnail}
          alt=""
          className="object-cover h-24 w-24 border rounded-full m-auto"
        />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>USD {product.price}</p>
        <p>{product.rating}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
