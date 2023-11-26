import React, { useContext, useEffect, useState } from "react";
import GeneralTab from "./GeneralTab";
import DisplayTab from "./DisplayTab";
import AdvancedTab from "./AdvancedTab";
import uploadImage from "../../utils/uploadImage";
import { ProjectContext } from "../../contexts/ProjectContext";
import { useParams } from "react-router-dom";

const Tabs = () => {
  const { projectId } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const { projects, updateConfiguration } = useContext(ProjectContext);
  const currentProject = projects.filter(
    (project) => project._id === projectId
  );
  const [inputValues, setInputValues] = useState({
    chatbotName: currentProject?.configuration?.chatbotName || "",
    welcomeMessage: currentProject?.configuration?.welcomeMessage || "",
    inputPlaceholder: currentProject?.configuration?.inputPlaceholder || "",
    primaryColor: currentProject?.configuration?.primaryColor || "",
    fontColor: currentProject?.configuration?.fontColor || "",
    fontSize: currentProject?.configuration?.fontSize || "",
    chatHeight: currentProject?.configuration?.chatHeight || "",
    showSources: currentProject?.configuration?.showSources || true,
    bottomDistance: currentProject?.configuration?.bottomDistance || "",
    horizontalDistance: currentProject?.configuration?.horizontalDistance || "",
    chatIconSize: currentProject?.configuration?.chatIconSize || "",
    screenPosition: currentProject?.configuration?.screenPosition || "",
    botIcon: currentProject?.configuration?.botIcon || "",
  });

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "showSources") {
      setInputValues({ ...inputValues, showSources: !inputValues.showSources });
      return;
    } else if (id === "botIcon") {
      uploadImage(event, setInputValues, inputValues);
      return;
    } else {
      setInputValues({ ...inputValues, [id]: value });
    }
  };

  const handleSave = () => {
    updateConfiguration(projectId, inputValues);
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
        {activeTab === 1 && (
          <GeneralTab
            inputValues={inputValues}
            handleChange={handleChange}
          />
        )}
        {activeTab === 2 && (
          <DisplayTab
            inputValues={inputValues}
            handleChange={handleChange}
          />
        )}
        {activeTab === 3 && <AdvancedTab handleSave={handleSave} />}
      </div>
    </div>
  );
};

export default Tabs;
