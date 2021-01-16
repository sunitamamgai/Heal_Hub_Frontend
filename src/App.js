import "./App.css";
import UserScreen from "./Screens/UserScreen";
import { useEffect } from "react";
import OnboardingScreen from "./Screens/OnboardingScreen";
import Navbar from "./Navbar";
import React from "react";

export const loginContext = React.createContext();

const initialState = {
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: localStorage.getItem('user') ? localStorage.getItem('user') : null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "REFRESH":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      }

    default:
      return state;
  }
};



function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  useEffect(
    () => {
    },
    [state.isAuthenticated]
  );

  return (
    <>
      <loginContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <div className="container">
          <Navbar/>
          <div className="container">
            {state.isAuthenticated ? <UserScreen /> : <OnboardingScreen />}
          </div>
        </div>
      </loginContext.Provider>
    </>
  );
}

export default App;
