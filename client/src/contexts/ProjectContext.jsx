import { createContext, useReducer } from "react";
import projectReducer from "../reducers/projectReducer";

const ProjectContext = createContext();

const initialState = {
  projects: [{}],
};

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const fetchProjects = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      // const data = await fetchData(url);
      // dispatch({ type: "SET_USERNAME", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const createNewProject = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      // const data = await fetchData(url);
      // dispatch({ type: "SET_USERNAME", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const uploadSubProject = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      // const data = await fetchData(url);
      // dispatch({ type: "SET_USERNAME", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const updateConfiguration = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      // const data = await fetchData(url);
      // dispatch({ type: "SET_USERNAME", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        createNewProject,
        fetchProjects,
        uploadSubProject,
        updateConfiguration,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export { ProjectContext, ProjectProvider };
