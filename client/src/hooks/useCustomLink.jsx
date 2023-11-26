import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectContext } from "../contexts/ProjectContext";

const useCustomLink = (urlString) => {
  const { projectId } = useParams();
  const { projects } = useContext(ProjectContext);
  const projectName = projects.filter((project) => project._id === projectId)[0]
    ?.name;

  const getUrlType = () => {
    if (urlString.includes("settings")) {
      return {
        to: "/dashboard/settings",
        text: "Account Settings",
      };
    } else if (urlString.includes("project/upload")) {
      return {
        to: `/dashboard/project/upload/${projectId}`,
        text: `${projectName} / Upload`,
      };
    } else if (urlString.includes("project/transcript")) {
      return {
        to: `/dashboard/project/transcript/${projectId}`,
        text: `${projectName} / Transcript`,
      };
    } else if (urlString.includes("project/configuration")) {
      return {
        to: `/dashboard/project/configuration/${projectId}`,
        text: `${projectName} / Configuration`,
      };
    } else {
      return null;
    }
  };

  const urlType = getUrlType();

  return urlType ? (
    <Link
      to={urlType.to}
      className="text-primary text-xl font-medium"
    >
      {urlType.text}
    </Link>
  ) : null;
};

export default useCustomLink;
