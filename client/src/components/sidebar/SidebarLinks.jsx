import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLinks = ({ title, placeholder, link }) => {
  return (
    <NavLink
      to={link}
      className="rounded-full hover:bg-[#1D1B2014] p-2 flex gap-3 items-center"
    >
      <span className="rounded-full bg-[#D9CFE4] w-7 h-7 flex items-center justify-center text-sm">
        {placeholder}
      </span>
      <p className="text-sm">{title}</p>
    </NavLink>
  );
};

export default SidebarLinks;
