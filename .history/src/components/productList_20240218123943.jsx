import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//queryFn theke (object) pay console.log()
const retrieveProducts = async ({ queryKey }) => {
  const response = await axios.get(`http://localhost:3000/${queryKey}`);
  return response.data;
};

const ProductList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProducts,
    refetchInterval: 1000,
  });

  if (isLoading) return <div>Fetching product......</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products &&
          products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border border-sm"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-cover h-64 w-96 rounded-sm"
              />
              <p>{product.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
