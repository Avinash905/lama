import React, { useContext, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ProjectContext } from "../../contexts/ProjectContext";
import { Button } from "..";

const CreateProjectModal = () => {
  const { createProjectModalOpen, closeCreateProjectModal } =
    useContext(ModalContext);
  const { isLoading, createNewProject } = useContext(ProjectContext);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState(false);

  const handleCreate = () => {
    if (!projectName) {
      setError(true);
      return;
    }
    createNewProject(projectName);
    setProjectName("");
    setError(false);
    if (!isLoading) closeCreateProjectModal();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        createProjectModalOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white p-6 rounded-lg w-1/3 flex flex-col gap-6">
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
            onChange={(event) => setProjectName(event.target.value)}
          />
          {error && (
            <span className="text-red-500">Project Name can't be empty</span>
          )}
        </form>
        <div className="flex gap-4 justify-end">
          <Button
            content={"Cancel"}
            customCss={"text-red-500 py-2 px-4 rounded-lg hover:bg-gray-50"}
            handleClick={closeCreateProjectModal}
          />
          <Button
            content={"Create"}
            customCss={"text-white bg-primary py-2 px-4 rounded-lg"}
            handleClick={handleCreate}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
