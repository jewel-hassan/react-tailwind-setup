import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-red-400 mt-9 p-9 rounded-2xl flex flex-col">
      <h2 className="text-center">
        <span className="font-extrabold text-5xl text-white">
          {price.price}
        </span>
        <span className="font-bold">/month</span>
      </h2>
      <h5 className="font-bold text-4xl text-center mt-4 ">{price.name} </h5>
      <p className="font-bold underline text-white text-2xl mt-10">Features:</p>
      {price.features.map((feature, index) => (
        <Feature key={index} feature={feature} />
      ))}
      <button className="w-full bg-green-500 p-3 font-bold text-white mt-auto rounded-xl hover:bg-sky-700">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
