import React from "react";
import Features from "../Features/Features";

const PricingOption = ({ option }) => {
  const { features } = option;
  // console.log(option);
  return (
    <div className="bg-pink-200 m-5 rounded-md p-5">
      <div>
        <h3>
          <span className="text-6xl font-bold">{option.price}</span>
          <span className="text-3xl">/mon</span>
        </h3>
        <p>{option.name}</p>
      </div>

      {features.map((feature, idx) => (
        <Features key={{ idx }} feature={feature} />
      ))}
      <button className="bg-pink-500 hover:bg-pink-900 w-full rounded-md py-4 mt-2 font-extrabold">
        Buy Now
      </button>
    </div>
  );
};

export default PricingOption;
