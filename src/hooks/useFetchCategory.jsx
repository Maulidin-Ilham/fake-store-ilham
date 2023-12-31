/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );

        setProducts(response.data);

        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading };
};
