import { useParams } from "react-router-dom";
import { useFetchCategory } from "../hooks/useFetchCategory";

const FilterPage = () => {
  const { category } = useParams();
  const { products, loading } = useFetchCategory(category);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (products.length === 0) {
  //   return <div>No products found for the category: {category}</div>;
  // }

  return (
    <div>
      {loading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default FilterPage;
