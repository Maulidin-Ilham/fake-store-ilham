/* eslint-disable react/no-unescaped-entities */

const Categories = () => {
  return (
    <div className="flex flex-row space-x-3  justify-center font-semibold text-base items-center w-full">
      <h1 className="cursor-pointer py-2 transition duration-500 ease-in-out   border-transparent border-b-2 hover:border-gray-500  hover:border-b-2">
        All
      </h1>
      <h1 className="cursor-pointer py-2 transition duration-500 ease-in-out  border-transparent border-b-2 hover:border-gray-500 ">
        Electronics
      </h1>
      <h1 className="cursor-pointer py-2 transition duration-500 ease-in-out  border-transparent border-b-2 hover:border-gray-500 hover:border-b-2">
        Jewelry
      </h1>
      <h1 className="cursor-pointer py-2 transition duration-500 ease-in-out  border-transparent border-b-2 hover:border-gray-500 hover:border-b-2">
        Men's Clothing
      </h1>
      <h1 className="cursor-pointer py-2 transition duration-500 ease-in-out  border-transparent border-b-2 hover:border-gray-500 hover:border-b-2">
        Women's Clothing
      </h1>
    </div>
  );
};

export default Categories;
