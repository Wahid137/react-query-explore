import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};

const productList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
  });

  if (isLoading) return <div>Fetching product......</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5"></div>
  );
};

export default productList;
