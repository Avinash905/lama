import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-2"
    >
      <img
        src={logo}
        alt="logo"
        className="w-10"
      />
      <h1 className="text-primary font-bold text-3xl">LAMA.</h1>
    </Link>
  );
};

export default Logo;
