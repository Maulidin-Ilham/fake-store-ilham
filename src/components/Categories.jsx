/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation();

  return (
    <div className="flex flex-wrap space-x-3 justify-center font-semibold text-base items-center w-full">
      <Link
        to="/"
        className={`cursor-pointer py-2 transition duration-500 ease-in-out ${
          location.pathname === "/"
            ? "border-gray-500 border-b-2"
            : "border-transparent"
        }`}
      >
        All
      </Link>
      <Link
        to="/products/electronics"
        className={`cursor-pointer py-2 transition duration-500 ease-in-out ${
          location.pathname === "/electronics"
            ? "border-gray-500 border-b-2"
            : "border-transparent"
        }`}
      >
        Electronics
      </Link>
      <Link
        to="/products/jewelry"
        className={`cursor-pointer py-2 transition duration-500 ease-in-out ${
          location.pathname === "/jewelry"
            ? "border-gray-500 border-b-2"
            : "border-transparent"
        }`}
      >
        Jewelry
      </Link>
      <Link
        to="/products/mens-clothing"
        className={`cursor-pointer py-2 transition duration-500 ease-in-out ${
          location.pathname === "/mens-clothing"
            ? "border-gray-500 border-b-2"
            : "border-transparent"
        }`}
      >
        Men's Clothing
      </Link>
      <Link
        to="/products/womens-clothing"
        className={`cursor-pointer py-2 transition duration-500 ease-in-out ${
          location.pathname === "/womens-clothing"
            ? "border-gray-500 border-b-2"
            : "border-transparent"
        }`}
      >
        Women's Clothing
      </Link>
    </div>
  );
};

export default Categories;
