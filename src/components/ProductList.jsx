/* eslint-disable react/prop-types */

const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:max-w-4xl lg:mx-auto md:max-w-2xl md:mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col hover:scale-105  text-left cursor-pointer  w-full h-full border p-5 duration-300 transition-all ease-in-out"
          >
            <img
              src={product.image}
              alt=""
              className="hover:opacity-80 blur-0 grayscale-0 ease-in-out duration-700 "
            />
            <div className="mt-4">
              <h1 className="">{product.title}</h1>
              <h1>{product.category}</h1>
              <h1>$ {product.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
