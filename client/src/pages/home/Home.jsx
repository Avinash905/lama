import React, { useContext } from "react";

import { NoProjects, Projects } from "..";
import { ProjectContext } from "../../contexts/ProjectContext";

const Home = () => {
  const { projects } = useContext(ProjectContext);

  return projects?.length ? <Projects /> : <NoProjects />;
};

export default Home;
