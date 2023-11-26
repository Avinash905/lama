const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_CREATE_PROJECT_MODAL":
      return {
        ...state,
        createProjectModalOpen: true,
      };
    case "CLOSE_CREATE_PROJECT_MODAL":
      return {
        ...state,
        createProjectModalOpen: false,
      };
    case "CREATE_NEW_PROJECT":
      return {
        ...state,
      };
    case "OPEN_UPLOAD_MODAL":
      return {
        ...state,
        uploadModalOpen: true,
      };
    case "CLOSE_UPLOAD_MODAL":
      return {
        ...state,
        uploadModalOpen: false,
      };
    case "UPLOAD_PROJECT_DATA":
      return {
        ...state,
      };

    default:
      break;
  }
};

export default modalReducer;
