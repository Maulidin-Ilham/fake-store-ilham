/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import { useFetchProduct } from "../hooks/useFetchProduct";

const Home = () => {
  const { products } = useFetchProduct();

  return (
    <>
      <Navbar />
      <div className="p-4 ">
        <h1>Hello ilham</h1>
        <h1>Produxts</h1>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
