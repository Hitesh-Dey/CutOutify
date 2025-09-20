import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-10 lg:px-24 mt-10 sm:mt-20 scale-z-100">

      {/* Left Text */}
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-zinc-900">
          Remove the{" "}
          <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            Background
          </span>{" "}
          from images for free
        </h1>

        <p className="text-gray-600 mt-4 sm:mt-6 text-[15px] sm:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          soluta cumque, maiores officia at libero totam saepe facere quisquam non.
        </p>

        <label
          className="
            inline-flex items-center justify-center gap-2 mt-6 cursor-pointer
            bg-gradient-to-r from-red-500 to-purple-600 text-white 
            px-6 py-3 rounded-md w-full sm:w-auto
            hover:from-red-600 hover:to-purple-700
            transition duration-300 
          " htmlFor="upload1"
        >
          <img src={assets.upload_btn_icon} alt="" className="w-5 h-5" />
          Upload your image
          <input type="file" hidden id="upload1" />
        </label>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-md">
        <img src={assets.header_img} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default Header;
