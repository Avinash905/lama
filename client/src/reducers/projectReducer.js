const projectReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : 0,
      };
    case "INCREMENT_BY_NUM":
      return {
        ...state,
        count: state.count + parseInt(action.payload),
      };

    default:
      break;
  }
};

export default projectReducer;
