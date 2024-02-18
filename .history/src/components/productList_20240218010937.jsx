import axios from "axios";

const retrieveProducts = async () => {
  const response = await axios.get("http://localhost:3000/products");
  return response.data;
};

const productList = () => {
  return <div></div>;
};

export default productList;
