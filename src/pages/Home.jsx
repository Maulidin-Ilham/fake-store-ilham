/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1>Hello ilham</h1>
        <h1>Produxts</h1>
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
