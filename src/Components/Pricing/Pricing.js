import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Free",
      price: 0,
      features: ["Awesome", "good", "bad", "veryNice"],
    },
    {
      id: 2,
      name: "premier",
      price: 9.99,
      features: ["Awesome", "good", "bad", "good good"],
    },
    {
      id: 3,
      name: "medium",
      price: 29.9,
      features: ["Awesome", "good", "bad", "very nice"],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold bg-pink-300 text-black p-10">
        Best deal Offer
      </h2>
      <div className="grid md:grid-cols-3 gap-5 bg-slate-200">
        {pricingOptions.map((option) => (
          <PricingOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
