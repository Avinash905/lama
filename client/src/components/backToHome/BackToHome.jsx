import React from "react";
import { home } from "../../assets";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <Link
      to={"/"}
      className="flex gap-1 items-center border border-gray-500 py-0.5 px-3 rounded-full shadow-lg mr-auto"
    >
      <img
        src={home}
        alt="back to home"
        className="w-6"
      />
      <span className="text-[#3C3C3C]">Back to Home</span>
    </Link>
  );
};

export default BackToHome;
