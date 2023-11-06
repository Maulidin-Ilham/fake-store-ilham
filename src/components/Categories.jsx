/* eslint-disable react/no-unescaped-entities */

const Categories = () => {
  return (
    <div className="flex flex-wrap space-x-3 justify-center font-semibold text-base items-center w-full">
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <a href="#">All</a>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <a href="#">Electronics</a>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <a href="#">Jewelry</a>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <a href="#">Men's Clothing</a>
      </div>
      <div className="cursor-pointer py-2 transition duration-500 ease-in-out border-transparent border-b-2 hover:border-b-gray-400">
        <a href="#">Women's Clothing</a>
      </div>
    </div>
  );
};

export default Categories;
