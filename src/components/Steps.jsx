import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1
        className="text-center font-extrabold text-4xl sm:text-5xl p-6 tracking-tight
        bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]
        bg-clip-text text-transparent"
      >
        Steps to remove Background <br /> image in seconds
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap justify-center mt-16 xl:mt-24 gap-10 lg:gap-14">
        {/* CARD 1 */}
        <div
          className="relative cursor-pointer rounded-3xl p-10 w-72
         bg-white/25 shadow-lg backdrop-blur-lg border-2
         border-transparent hover:-translate-y-3 transition-all duration-500
         hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)] group"
        >
          {/* Always-visible gradient border */}
          <div
            className="absolute inset-0 rounded-3xl border-[3px]
           border-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]"
          ></div>
          {/* Step badge */}
          <span className="absolute -top-4 -left-4 bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
            1
          </span>
          <img src={assets.upload_icon} alt="" className="w-14 mb-4" />
          <h2 className="text-xl font-bold mb-2">Upload Image</h2>
          <p className="text-neutral-700">
            Select your photo & let magic begin instantly.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className="relative cursor-pointer rounded-3xl p-10 w-72
         bg-white/25 shadow-lg backdrop-blur-lg border-2
         border-transparent hover:-translate-y-3 transition-all duration-500
         hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)] group"
        >
          <div
            className="absolute inset-0 rounded-3xl border-[3px]
           border-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]"
          ></div>
          <span className="absolute -top-4 -left-4 bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
            2
          </span>
          <img src={assets.remove_bg_icon} alt="" className="w-14 mb-4" />
          <h2 className="text-xl font-bold mb-2">Remove Background</h2>
          <p className="text-neutral-700">
            Our AI removes background within a second.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className="relative cursor-pointer rounded-3xl p-10 w-72
         bg-white/25 shadow-lg backdrop-blur-lg border-2
         border-transparent hover:-translate-y-3 transition-all duration-500
         hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)] group"
        >
          <div
            className="absolute inset-0 rounded-3xl border-[3px]
           border-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]"
          ></div>
          <span className="absolute -top-4 -left-4 bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
            3
          </span>
          <img src={assets.download_icon} alt="" className="w-14 mb-4" />
          <h2 className="text-xl font-bold mb-2">Download Image</h2>
          <p className="text-neutral-700">
            Save your clean image in high-resolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
