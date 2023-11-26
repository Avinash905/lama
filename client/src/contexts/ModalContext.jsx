import { createContext, useReducer } from "react";
import modalReducer from "../reducers/modalReducer";

const ModalContext = createContext();

const initialState = {
  createProjectModalOpen: false,
  uploadModalOpen: false,
};

const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const openCreateProjectModal = () => {
    dispatch({ type: "OPEN_CREATE_PROJECT_MODAL" });
  };

  const closeCreateProjectModal = () => {
    dispatch({ type: "CLOSE_CREATE_PROJECT_MODAL" });
  };

  const openUploadModal = () => {
    dispatch({ type: "OPEN_UPLOAD_MODAL" });
  };

  const closeUploadModal = () => {
    dispatch({ type: "CLOSE_UPLOAD_MODAL" });
  };

  return (
    <ModalContext.Provider
      value={{
        ...state,
        openCreateProjectModal,
        closeCreateProjectModal,
        openUploadModal,
        closeUploadModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalProvider };
