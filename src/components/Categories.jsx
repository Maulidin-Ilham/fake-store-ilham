/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex flex-wrap space-x-3 justify-center font-semibold text-base items-center w-full">
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <Link to="/">All</Link>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <Link to="/products/electronics">Electronics</Link>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <Link to="/products/jewelery">Jewelry</Link>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <Link to="/products/men's clothing">Men's Clothing</Link>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <Link to="/products/women's clothing">Women's Clothing</Link>
      </div>
    </div>
  );
};

export default Categories;
