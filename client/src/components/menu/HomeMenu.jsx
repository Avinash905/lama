import React from "react";
import { settingGear, notificationBell } from "../../assets";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link to={"/dashboard/settings"}>
        <img
          src={settingGear}
          alt="settings"
          className="w-8"
        />
      </Link>
      <img
        src={notificationBell}
        alt="notifications"
        className="w-9"
      />
    </div>
  );
};

export default HomeMenu;
