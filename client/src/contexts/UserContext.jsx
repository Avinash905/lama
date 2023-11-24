import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

const UserContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  username: "",
  email: localStorage.getItem("email"),
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const fetchUsername = async () => {
    try {
      dispatch({ type: "LOADING", payload: true });
      // const data = await fetchData(url);
      // dispatch({ type: "SET_USERNAME", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const updateUsername = (newUsername) => {
    try {
      dispatch({ type: "LOADING", payload: true });
      // const data = await useFetchData(url);
      // dispatch({ type: "UPDATE_USERNAME", payload: newUsername });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, fetchUsername, updateUsername }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
