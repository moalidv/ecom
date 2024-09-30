import { useParams } from "react-router-dom";

const Products = () => {
  const { cat_prefix } = useParams();
  return <div>Products number {cat_prefix}</div>;
};

export default Products;
