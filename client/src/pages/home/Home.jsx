import React, { useState } from "react";
import { CreateNewProject, CreateProjectModal } from "../../components";
import { hero } from "../../assets";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <h1 className="main-heading">Create a New Project</h1>
      <img
        src={hero}
        alt="hero"
        className="w-96"
      />
      <p className="text-gray-500 text-2xl text-center px-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in
      </p>
      <CreateNewProject
        size={"large"}
        toggleModal={toggleModal}
      />
      <CreateProjectModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </>
  );
};

export default Home;
