/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="grid grid-cols-1 mx-20 mt-12 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-4xl lg:mx-auto md:max-w-2xl md:mx-auto">
      <h1>Hello {id}</h1>
    </div>
  );
};

export default ProductDetail;
