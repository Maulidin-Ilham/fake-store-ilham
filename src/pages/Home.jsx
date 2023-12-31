/* eslint-disable no-unused-vars */

import ProductList from "../components/ProductList";
import { useFetchProduct } from "../hooks/useFetchProduct";
import Categories from "../components/Categories";
import Loading from "../components/Loading";

const Home = () => {
  const { products, loading } = useFetchProduct();

  return (
    <>
      <div className="p-4 ">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <Categories />
            <ProductList products={products} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
