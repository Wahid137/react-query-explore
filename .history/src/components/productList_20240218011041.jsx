import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};

const productList = () => {
  const {} = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
  });
  return <div></div>;
};

export default productList;
