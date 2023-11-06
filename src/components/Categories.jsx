/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation();

  return (
    <div className="flex flex-wrap space-x-3 justify-center font-semibold text-base items-center w-full">
      <Link
        to="/"
        className={`cursor-pointer py-2 transition duration-500 border-transparent border-b-2 ease-in-out ${
          location.pathname === "/" ? "border-gray-500 " : ""
        }`}
      >
        All
      </Link>
      <Link
        to="/products/electronics"
        className={`cursor-pointer py-2 transition duration-500 border-transparent border-b-2 ease-in-out ${
          location.pathname === "/products/electronics"
            ? "border-gray-500 "
            : ""
        }`}
      >
        Electronics
      </Link>
      <Link
        to="/products/jewelery"
        className={`cursor-pointer py-2 transition duration-500 border-transparent border-b-2 ease-in-out ${
          location.pathname === "/products/jewelery" ? "border-gray-500 " : ""
        }`}
      >
        Jewelery
      </Link>
      <Link
        to="/products/men's clothing"
        className={`cursor-pointer py-2 transition duration-500 border-transparent border-b-2 ease-in-out ${
          location.pathname === "/products/men's clothing"
            ? "border-gray-500 "
            : ""
        }`}
      >
        Men's Clothing
      </Link>
      <Link
        to="/products/women's clothing"
        className={`cursor-pointer py-2 transition duration-500 border-transparent border-b-2 ease-in-out ${
          location.pathname === "/products/women's clothing"
            ? "border-gray-500 "
            : ""
        }`}
      >
        Women's Clothing
      </Link>
    </div>
  );
};

export default Categories;
