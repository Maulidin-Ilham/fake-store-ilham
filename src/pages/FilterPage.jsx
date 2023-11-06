/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useFetchCategory } from "../hooks/useFetchCategory";

const FilterPage = () => {
  const { category } = useParams();
  const { products, loading } = useFetchCategory(category);

  return (
    <div>
      <h1>Ilham {category}</h1>
    </div>
  );
};

export default FilterPage;
