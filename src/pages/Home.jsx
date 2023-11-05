/* eslint-disable no-unused-vars */

import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { useFetchProduct } from "../hooks/useFetchProduct";
import Categories from "../components/Categories";

const Home = () => {
  const { products } = useFetchProduct();

  return (
    <>
      <Navbar />
      <div className="p-4 ">
        <Categories />
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
