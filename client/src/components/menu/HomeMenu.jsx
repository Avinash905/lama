import React from "react";
import { settingGear, notificationBell } from "../../assets";

const HomeMenu = () => {
  return (
    <div className="flex gap-4">
      <img
        src={settingGear}
        alt="settings"
        className="w-8"
      />
      <img
        src={notificationBell}
        alt="notifications"
        className="w-9"
      />
    </div>
  );
};

export default HomeMenu;
