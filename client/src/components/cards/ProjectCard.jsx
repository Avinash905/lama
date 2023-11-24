import React from "react";

const ProjectCard = () => {
  return (
    <div className="rounded-2xl p-2 border border-gray-400 flex items-center gap-6 shadow-lg">
      <div className="bg-primary rounded-xl p-6 font-bold text-5xl text-white">
        SP
      </div>
      <div className="flex flex-col h-full">
        <h2 className="font-bold text-primary text-xl mt-3">Sample Project</h2>
        <p className="text-sm">4 Episodes</p>
        <span className="text-gray-400 text-sm mt-auto">
          Last edited a week ago
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
