import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1  mx-10 my-10  lg:max-w-4xl lg:mx-auto md:max-w-2xl md:mx-auto">
      <h1 className="text-center text-8xl font-extrabold text-black tracking-widest">
        404
      </h1>
      {/* <div className="bg-[#FF6A3D]  px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div> */}
      <h1 className="text-center text-2xl font-extrabold text-black tracking-widest">
        Page Not Found
      </h1>
      <button className="mt-5 hover:opacity-80">
        <a className="relative inline-block text-sm font-medium ">
          <span className="relative block px-8 py-3 bg-black font-semibold text-white border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </div>
  );
};

export default NotFound;
