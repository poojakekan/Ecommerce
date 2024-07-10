import React from "react";

const Product = (props) => {
  const { product } = props;
  const a = {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  };
  console.log(props);
  return (
    <div className="flex flex-col justify-center content-center items-center  max-w-72 mx-auto max-h-96">
      <h3 className="text-lg font-semibold">{product.title}</h3>

      <div className=" bg-gray-300 overflow-hidden">
        <img
          src={product.imageUrl}
          alt="img"
          width="400"
          className="hover:scale-125 duration-500 transition-transform"
        />
      </div>

      <div className="w-[100%] flex justify-around my-2">
        <div>${product.price}</div>
        <div className="hover:scale-105 duration-500 transition-transform">
          <button className="text-lg bg-blue-300 px-2 rounded-lg hover:bg-blue-400 duration-500 transition-transform">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;