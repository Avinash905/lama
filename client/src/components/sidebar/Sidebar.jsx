import React from "react";
import { Logo, SidebarLinks } from "..";
import { GoGear } from "react-icons/go";
import { useParams } from "react-router-dom";

const Sidebar = () => {
  const { projectId } = useParams();

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
            link={`/dashboard/project/upload/${projectId}`}
          />
          <SidebarLinks
            title="Widget Configurations"
            placeholder="2"
            link={`/dashboard/project/configuration/${projectId}`}
          />
          <SidebarLinks
            title="Deployment"
            placeholder="3"
            link="/"
          />
          <SidebarLinks
            title="Pricing"
            placeholder="4"
            link="/"
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
