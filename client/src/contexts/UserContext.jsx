import { createContext, useEffect, useReducer } from "react";
import userReducer from "../reducers/userReducer";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;

const UserContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  userId: localStorage.getItem("userId") || null,
  username: localStorage.getItem("username") || null,
  email: localStorage.getItem("email") || null,
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const findOrCreateUser = async (email) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.post("/user", { email });
      dispatch({ type: "SET_USER", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  const updateUsername = async (userId, newUsername) => {
    try {
      dispatch({ type: "LOADING", payload: true });

      const { data } = await axios.put("/user", { userId, newUsername });
      dispatch({ type: "SET_USER", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.error(error);
    }
  };

  useEffect(() => {
    findOrCreateUser(state.email);
  }, []);

  return (
    <UserContext.Provider
      value={{ ...state, findOrCreateUser, updateUsername }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
