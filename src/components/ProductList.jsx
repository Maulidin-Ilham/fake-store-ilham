/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-1 mx-20 mt-12 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-4xl lg:mx-auto md:max-w-2xl md:mx-auto">
        {products.map((product) => (
          <Link
            to={`product/${product.id}`}
            key={product.id}
            className="flex flex-col hover:scale-105  text-left cursor-pointer   border py-5 px-8 md:px-5 duration-300 transform transition-transform ease-in-out "
          >
            <img
              src={product.image}
              alt=""
              className="hover:opacity-80 blur-0 grayscale-0 ease-in-out duration-500  md:px-3"
            />
            <div className="mt-4">
              <h1 className="font-semibold">{product.title}</h1>
              <h1 className=" capitalize text-gray-500 font-semibold">
                {product.category}
              </h1>
              <h1 className="font-semibold mt-3">$ {product.price}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
