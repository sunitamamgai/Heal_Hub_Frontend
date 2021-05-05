import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "./App";

const Navbar = () => {
  const { state, dispatch } = useContext(loginContext);

  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="nav-container">
        <div className="white nav-logo">
          {state.isAuthenticated ? (
            <>
              <h6 className="align-centre lobster-font logo">
                <span className="material-icons">health_and_safety</span>HealHub
              </h6>
              <div className="burger-menu-list">
                <button
                  onClick={() => setMenu(!menu)}
                  className="burger-menu-button"
                >
                  <span className="material-icons">menu</span>
                </button>
                {state.user.is_MP ? (
                  <>
                    <div className={"menu-dropdown" + (menu ? " active" : "")}>
                      <Link to="/ddashboard" ><div>Dashboard</div></Link>
                      <Link to="/prescribe" ><div>Prescribe</div></Link>
                      <Link to="/finduser" ><div>Find User</div></Link>
                      <Link to="/prediction" ><div>Disease Prediction Tool</div></Link>
                      <Link to="/patientdetailaccess" ><div>Access Verification Tool</div></Link>
                      <Link to="/detailaccess" ><div>Patient Detail Access</div></Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={"menu-dropdown" + (menu ? " active" : "")}>
                      <Link to="/dashboard" ><div>Dashboard</div></Link>
                      <Link to="/profile" ><div>Profile</div></Link>
                      <Link to="/insurance" ><div>Insurance</div></Link>
                      <Link to="/prescription" ><div>Prescription</div></Link>
                      <Link to="/doctorslist" ><div>Doctor's List</div></Link>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <h6 className="align-centre lobster-font">
                <span className="material-icons">health_and_safety</span>HealHub
              </h6>
            </>
          )}
        </div>

        <div className="nav-list">
          <ul>
            {state.isAuthenticated ? (
              <>
                <div className="nav-logged-ul">
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
                <div className="nav-ul">
                  <li className="nav-item">
                    <Link
                      className="txt align-centre"
                      to="/"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="material-icons">home</span> Home
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="txt align-centre"
                      to="/login"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="material-icons">login</span> Login
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
        {state.isAuthenticated ? (
          <></>
        ) : (
          <div className="burger-list">
            <button onClick={handleClick} className="burger-button">
              <span className="material-icons">menu</span>
            </button>
            <div className={"dropdown" + (click ? " active" : "")}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div>Home</div>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div>Login</div>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <div>Register</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
