import React, { useContext } from "react";
import {
  CreateNewProject,
  CreateProjectModal,
  EmailModal,
} from "../../components";
import { hero } from "../../assets";
import { UserContext } from "../../contexts/UserContext";

const NoProjects = () => {
  const { email } = useContext(UserContext);

  return (
    <>
      <h1 className="main-heading">Create a New Project</h1>
      <img
        src={hero}
        alt="hero"
        className="w-96"
        loading="lazy"
      />
      <p className="text-gray-500 text-2xl text-center px-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <CreateNewProject size={"large"} />
      <CreateProjectModal />
      {!email && <EmailModal />}
    </>
  );
};

export default NoProjects;
