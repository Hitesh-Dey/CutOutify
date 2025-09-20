import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser(); // Correct property

  const handleSignIn = () => {
    if (!isSignedIn) {
      openSignIn(); // only opens modal if no user is signed in
    } else {
      console.log("User already signed in!"); 
      // Optionally redirect to dashboard here
      // navigate("/dashboard");
    }
  };

  return (
    <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44 scale-z-95">
      <Link to="/">
        <img className="w-40 sm:w-44" src={assets.logo} alt="Logo" />
      </Link>

      {isSignedIn ? (
        <UserButton /> // shows profile avatar dropdown
      ) : (
        <button
          onClick={handleSignIn}
          className="cursor-pointer 
                     bg-gradient-to-r from-[#2D2DFF] to-[#8764ff]
                     text-white 
                     flex items-center 
                     px-4 sm:px-8 py-2 gap-2  
                     rounded-full 
                     font-semibold
                     shadow-lg 
                     transition-all duration-300
                     hover:scale-105 hover:shadow-xl"
        >
          Get Started <img src={assets.arrow_icon} alt="Arrow" className="w-5 h-5" />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
