const userReducer = (state, action) => {
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
    case "SET_USER":
      const { username, email, _id } = action.payload;
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("userId", _id);

      return {
        ...state,
        username: username,
        email: email,
        userId: _id,
        isLoading: false,
      };

    default:
      break;
  }
};

export default userReducer;
