import React from "react";
import { assets, plans } from "../assets/assets";

const BuyCredits = () => {
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mt-6">
        Our Princing
      </button>
      <h1
        className="text-center font-extrabold text-4xl sm:text-5xl p-6 tracking-tight
        bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]
        bg-clip-text text-transparent mb-6 sm:mb-6"
      >
        Choose the plan that's right for you
      </h1>
      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
            key={index}
          >
            <img width={40} src={assets.orglogo} alt="" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium ">₹{item.price}</span>/{" "}
              {item.credits} credits
            </p>
            <button className="w-full bg-gray-800 text-white cursor-pointer mt-8 text-sm rounded-md py-2.5 min-w-52">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredits;
