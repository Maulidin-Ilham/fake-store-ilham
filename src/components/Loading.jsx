import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <BarLoader color="#000000" width={150} />
    </div>
  );
};

export default Loading;
