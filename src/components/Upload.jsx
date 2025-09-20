import React from "react";
import { assets } from "../assets/assets";

const Upload = () => {
  return (
    <div className="py-12 px-3 sm:px-6 scale-z-75">
      <h1
        className="text-center font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight
        bg-gradient-to-r from-[#1a1aff] via-[#8400ff] to-[#ff005e]
        bg-clip-text text-transparent"
      >
        See The Magic <br className="sm:hidden"/> Try Now
      </h1>

      <div className="flex items-center justify-center mt-8">
        <label
          htmlFor="upload2"
          className="inline-flex items-center justify-center gap-2 cursor-pointer
            bg-gradient-to-r from-red-500 to-purple-600 text-white 
            w-full max-w-[280px] sm:max-w-fit
            px-6 py-3 rounded-lg
            hover:from-red-600 hover:to-purple-700 transition duration-300"
        >
          <img src={assets.upload_btn_icon} alt="" className="w-5 h-5" />
          Upload your image
          <input type="file" hidden id="upload2" />
        </label>
      </div>
    </div>
  );
};

export default Upload;
