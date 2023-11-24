import React, { useState } from "react";

const CreateProjectModal = ({ isModalOpen, toggleModal }) => {
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState(true);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded-lg w-1/2 flex flex-col gap-6">
        <h2 className="font-bold text-2xl">Create Project</h2>
        <form className="flex flex-col gap-2">
          <label
            htmlFor="projectName"
            className="text-lg text-gray-600"
          >
            Enter Project Name:
          </label>
          <input
            type="text"
            name="projectName"
            id="projectName"
            placeholder="Type here"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          {error && (
            <span className="text-red-500">Project Name can't be empty</span>
          )}
        </form>
        <div className="flex gap-4 justify-end">
          <button
            className="text-red-500 py-2 px-4 rounded-lg hover:bg-gray-100"
            onClick={toggleModal}
          >
            Cancel
          </button>
          <button className="text-white bg-primary py-2 px-4 rounded-lg">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
