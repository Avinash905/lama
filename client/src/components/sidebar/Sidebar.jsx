import React from "react";
import { Logo, SidebarLinks } from "..";
import { GoGear } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="w-2/6 h-screen p-6 flex flex-col justify-between bg-primaryLight rounded-r-xl ">
      <div className="flex flex-col gap-6">
        <Logo />
        Sample Project Name
        {/* Navbar links */}
        <div className="flex flex-col gap-2">
          <SidebarLinks
            title="Projects"
            placeholder="1"
            link="/dashboard/project"
          />
          <SidebarLinks
            title="Widget Configurations"
            placeholder="2"
            link="/dashboard/configuration"
          />
          <SidebarLinks
            title="Deployment"
            placeholder="3"
            link="/dashboard/deployment"
          />
          <SidebarLinks
            title="Pricing"
            placeholder="4"
            link="/dashboard/pricing"
          />
        </div>
        <hr className="w-full border-gray-400" />
      </div>
      <div>
        <hr className="w-full border-gray-400 mb-4" />
        <SidebarLinks
          title="Settings"
          placeholder={<GoGear />}
          link="/dashboard/settings"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
