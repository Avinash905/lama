import React from "react";
import { CreateNewProject, ProjectCard } from "../../components";

const Projects = () => {
  return (
    <>
      <div className="flex justify-between w-full mb-4">
        <h1 className="main-heading">Projects</h1>
        <CreateNewProject size={"small"} />
      </div>
      <div className="w-full grid grid-cols-3 gap-x-14 gap-y-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
