import React, { useState } from "react";
import GeneralTab from "./GeneralTab";
import DisplayTab from "./DisplayTab";
import AdvancedTab from "./AdvancedTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex gap-8 border-b-2 border-gray-300">
        <button
          className={`${
            activeTab === 1
              ? "text-primary font-bold border-b-4 border-primary"
              : ""
          } p-2`}
          onClick={() => changeTab(1)}
        >
          General
        </button>
        <button
          className={`${
            activeTab === 2
              ? "text-primary font-bold border-b-4 border-primary"
              : ""
          } p-2`}
          onClick={() => changeTab(2)}
        >
          Display
        </button>
        <button
          className={`${
            activeTab === 3
              ? "text-primary font-bold border-b-4 border-primary"
              : ""
          } p-2`}
          onClick={() => changeTab(3)}
        >
          Advanced
        </button>
      </div>
      <div className="mt-6">
        {/* Content for each tab */}
        {activeTab === 1 && <GeneralTab />}
        {activeTab === 2 && <DisplayTab />}
        {activeTab === 3 && <AdvancedTab />}
      </div>
    </div>
  );
};

export default Tabs;
