import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./HealHubLogo.jpeg";
import { loginContext } from "./App";

const Navbar = () => {
  const { state, dispatch } = useContext(loginContext);
  
  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const loginHandler = () => {
    console.log(state.isAuthenticated);
  };

  return (
    <>
    {console.log(state.isAuthenticated)}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="HEALHUB" height="30px" />
          </a>
          <h2>HealHub</h2>
          <div className="">
            <ul className="navbar-nav me-auto">
              {state.isAuthenticated ? (
                <li className="nav-item">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <button className="btn btn-primary btn-sm">
                      <Link
                        className="txt"
                        to="/login"
                        style={{ textDecoration: "none" }}
                        onClick={loginHandler}
                      >
                        Login
                      </Link>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-primary btn-sm">
                      <Link
                        className="txt"
                        to="/register"
                        style={{ textDecoration: "none" }}
                      >
                        Register
                      </Link>
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
