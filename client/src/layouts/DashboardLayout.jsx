import React from "react";
import { Sidebar } from "../components";
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { notificationBell, britainFlag } from "../assets";
import useCustomLink from "../hooks/useCustomLink";

const DashboardLayout = () => {
  const location = useLocation();
  const customLink = useCustomLink(location.pathname);

  return (
    <section className="flex h-screen">
      <Sidebar />
      <div className="px-10 py-8 w-full overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Link to={"/"}>
              <MdOutlineHome className="text-primary text-3xl" />
            </Link>{" "}
            <span className="text-gray-500">/</span>
            {customLink}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaCaretDown />
              <span className="font-bold text-lg">EN</span>
              <img
                src={britainFlag}
                alt="english"
                className="w-7"
              />
            </div>
            <img
              src={notificationBell}
              alt="notifications"
              className="w-7"
            />
          </div>
        </header>
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardLayout;
