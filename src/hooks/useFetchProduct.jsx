/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};
