/* eslint-disable no-unused-vars */
import { Navigate, useParams } from "react-router-dom";
import { useFetchDetail } from "../hooks/useFetchDetail";
import Loading from "../components/Loading";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { id } = useParams();

  const { detail, loading } = useFetchDetail(id);

  return (
    <div className="grid grid-cols-1  mx-10 my-10  lg:max-w-4xl lg:mx-auto md:max-w-2xl md:mx-auto">
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <h1 className="text-xl font-semibold">{detail.title}</h1>
          <h1 className="font-semibold text-gray-500 mt-[5px]  text-base capitalize">
            {detail.category}
          </h1>
          <h1 className="mt-4 font-semibold text-xl">$ {detail.price}</h1>
          <div className="mt-10 md:flex md:flex-row md:justify-between md:items-center  md:space-x-10">
            <img src={detail.image} alt="" className=" object-cover w-52 " />
            <div className="hidden md:flex md:flex-col font-semibold ">
              <p className=" ">{detail.description}</p>
              <div className="mt-5 md:mt-10 hover:opacity-80">
                <button className="w-full py-4 bg-black text-white font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <p className="md:hidden mt-10 font-semibold">{detail.description}</p>

          <div className="md:hidden mt-5 md:mt-10 hover:opacity-80">
            <button className=" w-full py-4 bg-black text-white font-semibold">
              Add to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
