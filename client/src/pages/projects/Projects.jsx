import React, { useContext } from "react";
import {
  CreateNewProject,
  ProjectCard,
  CreateProjectModal,
  PageLoading,
} from "../../components";
import { ProjectContext } from "../../contexts/ProjectContext";

const Projects = () => {
  const { isLoading, projects } = useContext(ProjectContext);

  if (isLoading) return <PageLoading />;

  return (
    <>
      <div className="flex justify-between w-full mb-4">
        <h1 className="main-heading">Projects</h1>
        <CreateNewProject size={"small"} />
      </div>
      <div className="w-full grid grid-cols-3 gap-x-14 gap-y-10">
        {projects?.map((project) => {
          return (
            <ProjectCard
              key={project?._id}
              project={project}
            />
          );
        })}
      </div>
      <CreateProjectModal />
    </>
  );
};

export default Projects;
