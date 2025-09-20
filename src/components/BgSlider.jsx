import React from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  return (
    <div className="mx-3 sm:mx-6 lg:mx-44 py-14 sm:py-20 space-y-16 sm:space-y-24 scale-z-95">
      <h1
        className="text-center font-extrabold text-4xl sm:text-5xl tracking-tight p-6
        bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]
        bg-clip-text text-transparent"
      >
        Remove Background With <br className="hidden sm:block" /> High Quality And Accuracy
      </h1>

      {/* SECTION 1 */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-zinc-900">
            Fast & Accurate{" "}
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Background
            </span>{" "}
            Eraser
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px] max-w-[500px]">
            Introducing the fastest and cleanest background removal AI.
            CutOutify can quickly identify and remove image background with ease
            in under 5 seconds. Best of all, we keep image details intact while
            removing the background!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={assets.image_w_bg}
            alt=""
            className="mx-auto rounded-[24px] sm:rounded-[30px] shadow-2xl w-9/12 sm:w-full"
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <img
            src={assets.image_w1_bg}
            alt=""
            className="mx-auto rounded-[24px] sm:rounded-[30px] shadow-2xl w-9/12 sm:w-full"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-zinc-900">
            Powerful{" "}
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Editing
            </span>{" "}
            Options
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px] max-w-[500px]">
            Introducing the fastest and cleanest background removal AI.
            CutOutify can quickly identify and remove image background with ease
            in under 5 seconds. Best of all, we keep image details intact while
            removing the background!
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-zinc-900">
            Edit, replace or make{" "}
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Background
            </span>{" "}
            Transparent
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px] max-w-[500px]">
            Introducing the fastest and cleanest background removal AI.
            CutOutify can quickly identify and remove image background with ease
            in under 5 seconds. Best of all, we keep image details intact while
            removing the background!
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={assets.image_w2_bg}
            alt=""
            className="mx-auto rounded-[24px] sm:rounded-[30px] shadow-2xl w-9/12 sm:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BgSlider;
