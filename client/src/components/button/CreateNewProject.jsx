import React from "react";
import { createNew } from "../../assets";

const CreateNewProject = ({ size, toggleModal }) => {
  const clickHandler = () => {
    toggleModal();
  };

  return (
    <button
      className={`flex items-center gap-3 rounded-lg bg-slate-900 ${
        size === "small" ? "px-4 py-2" : "px-6 py-4"
      }`}
      onClick={clickHandler}
    >
      <img
        src={createNew}
        alt="create new project"
        className={`${size === "small" ? "w-6" : "w-8"}`}
      />
      <span
        className={`text-[#F8F8F8] font-semibold ${
          size === "small" ? "text-xl" : "text-3xl"
        }`}
      >
        Create New Project
      </span>
    </button>
  );
};

export default CreateNewProject;
