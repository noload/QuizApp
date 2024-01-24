import React from "react";
import logo from "../img/logo.png";
const Header = () => {
  return (
    <div>
      <nav className="flex justify-between px-10 items-center shadow-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-32 h-25">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <ul className="flex justify-between gap-5 text-xl text-white font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
        </ul>
        <div className="flex gap-4 text-xl text-center text-white font-bold items-center">
          <button
            className="px-5 py-[6px] rounded-2xl mr-5  bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-700  hover:from-pink-500 hover:to-yellow-500"
            type="button"
          >
            SignIn
          </button>
          <button
            className="px-5 py-[6px] rounded-2xl mr-5 transition-all duration-700  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            type="button"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
