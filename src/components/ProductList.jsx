/* eslint-disable react/prop-types */

const ProductList = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between space-y-2 w-full h-full border p-3 "
          >
            <img
              src={product.image}
              alt=""
              className="object-cover scale-50 hover:scale-75 transition duration-500 cursor-pointer "
            />
            <h1 k>{product.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
