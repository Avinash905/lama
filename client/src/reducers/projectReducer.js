const projectReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "TOGGLE_EDIT_MODE":
      return {
        ...state,
        editMode: !state.editMode,
      };
    case "SET_EDIT_FILE_ID":
      return {
        ...state,
        editingFileId: action.payload,
      };
    case "FETCH_PROJECTS":
      return {
        ...state,
        projects: action.payload,
        isLoading: false,
      };
    case "CREATE_NEW_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
        isLoading: false,
      };
    case "SET_FILES":
      return {
        ...state,
        files: action.payload,
        isLoading: false,
      };
    case "UPLOAD_FILE":
      return {
        ...state,
        files: [...state.files, action.payload],
        isLoading: false,
      };
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        files: [
          ...state.files.filter((file) => file._id !== action.payload._id),
          action.payload,
        ],
        isLoading: false,
      };
    case "DELETE_FILE":
      return {
        ...state,
        files: state.files.filter((file) => file._id !== action.payload),
        isLoading: false,
      };
    case "UPDATE_CONFIGURATION":
      return {
        ...state,
        projects: [
          ...state.projects.filter(
            (project) => project._id !== action.payload._id
          ),
          action.payload,
        ],
        isLoading: false,
      };

    default:
      break;
  }
};

export default projectReducer;
