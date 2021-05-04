import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "./App";

const Navbar = () => {
  const { state, dispatch } = useContext(loginContext);

  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <>
      <nav className="nav-container navbar">
        <div className="container-fluid">
          <div className="white nav-logo"><h6 className="align-centre  lobster-font"><span className="material-icons">health_and_safety</span>HealHub</h6></div>

          <div className="">
            <ul className="navbar-nav">
              {state.isAuthenticated ? (
                <>
                  <div className="row align-centre">
                    <li className="nav-item white">
                      Logged in as:- {state.user.username}
                    </li>

                    <li className="nav-item">
                      <Link to="/">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={logoutHandler}
                        >
                          Logout
                        </button>
                      </Link>
                    </li>
                  </div>
                </>
              ) : (
                <>
                  <div className="row align-centre">
                    <li className="nav-item">
                      <Link
                        className="txt align-centre"
                        to="/"
                        style={{ textDecoration: "none" }}
                      >
                        <span class="material-icons">home</span> Home
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link
                        className="txt align-centre"
                        to="/login"
                        style={{ textDecoration: "none" }}
                      >
                        <span class="material-icons">login</span>  Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="txt"
                        to="/register"
                        style={{ textDecoration: "none" }}
                      >
                        <button className="btn btn-primary">Register</button>
                      </Link>
                    </li>
                  </div>
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
