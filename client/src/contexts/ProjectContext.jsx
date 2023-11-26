import { createContext, useContext, useEffect, useReducer } from "react";
import projectReducer from "../reducers/projectReducer";
import { UserContext } from "./UserContext";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;

const ProjectContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  projects: [],
  files: [],
  editMode: false,
  editingFileId: null,
};

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const { userId } = useContext(UserContext);

  const toggleEditMode = () => {
    dispatch({ type: "TOGGLE_EDIT_MODE" });
  };

  const setEditFileId = (fileId) => {
    dispatch({ type: "SET_EDIT_FILE_ID", payload: fileId });
  };

  const fetchProjects = async (userId) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.get(`/project/${userId}`);
      dispatch({ type: "FETCH_PROJECTS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const createNewProject = async (projectName) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.post("/project", { projectName, userId });
      dispatch({ type: "CREATE_NEW_PROJECT", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const getFiles = async (projectId) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.get(`/file/${projectId}`);
      dispatch({
        type: "SET_FILES",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const uploadFile = async ({ projectId, filename, description }) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.post("/file", {
        projectId,
        filename,
        description,
      });
      dispatch({
        type: "UPLOAD_FILE",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const updateFileDescription = async (fileId) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.put("/file", {
        fileId,
        description,
      });
      dispatch({
        type: "UPDATE_DESCRIPTION",
        payload: data,
      });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const deleteFile = async (fileId) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      await axios.delete("/file", {
        data: { fileId },
      });
      dispatch({
        type: "DELETE_FILE",
        payload: fileId,
      });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const updateConfiguration = async (projectId, inputValues) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.put("/project", { projectId, inputValues });
      dispatch({ type: "UPDATE_CONFIGURATION", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  useEffect(() => {
    userId && fetchProjects(userId);
  }, [userId]);

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        toggleEditMode,
        setEditFileId,
        createNewProject,
        fetchProjects,
        getFiles,
        uploadFile,
        updateFileDescription,
        deleteFile,
        updateConfiguration,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
export { ProjectContext, ProjectProvider };
