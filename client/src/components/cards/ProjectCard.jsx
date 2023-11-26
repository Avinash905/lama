import React from "react";
import { Link } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/dashboard/project/upload/${project?._id}`}
      className="rounded-2xl p-2 border border-gray-400 flex items-center gap-6 shadow-md hover:shadow-lg"
    >
      <div className="bg-primary rounded-xl p-6 font-bold text-5xl text-white">
        SP
      </div>
      <div className="flex flex-col h-full">
        <h2 className="font-bold text-primary text-xl mt-3">{project?.name}</h2>
        <p className="text-sm">
          {project?.files?.length ? project?.files?.length : 0} Episodes
        </p>
        <span className="text-gray-400 text-sm mt-auto">
          Last edited {format(project?.updatedAt, "en_US")}
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
