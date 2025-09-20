import React from "react";
import { assets } from "../assets/assets";

const Result = () => {
  return (
    <div className="mx-4 my-4 lg:mx-44 min-h-[75vh]">
      <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl px-4 sm:px-8 py-6 sm:py-8 shadow-xl">
        {/* image container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {/* left side */}
          <div>
            <p className="font-semibold text-gray-700 mb-2 text-base sm:text-lg">
              Original
            </p>
            <img
              className="w-full rounded-xl border border-gray-200 shadow-lg"
              src={assets.image_w3_bg}
              alt=""
            />
          </div>

          {/* right side */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-700 mb-2 text-base sm:text-lg">
              Background Removed
            </p>
            <div className="w-full rounded-xl border border-gray-200 shadow-lg h-full relative bg-layer overflow-hidden">
              <img className="w-full object-contain" src={assets.image_wo_bg} alt="" />
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mt-10">
          <button className="w-full sm:w-auto px-6 py-3 bg-white text-gray-700 cursor-pointer rounded-xl border hover:scale-105 transition-all duration-500">
            Try another image
          </button>
          <a
            className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-[#ff005e] via-[#8400ff] to-[#1a1aff] text-white rounded-xl hover:scale-105 transition-all duration-500"
            href=""
            download
          >
            Download image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
