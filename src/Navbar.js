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
    // console.log(state.isAuthenticated);
  };

  return (
    <>
      <nav className="nav-container navbar navbar-expand-lg">
        <div className="container-fluid">
        
          <img src={logo} alt="HEALHUB" height="30px" />
      
          <h2>HealHub</h2>
          <div className="">
            <ul className="navbar-nav  align-centre">
              {state.isAuthenticated ? (
                <>
                <div className="row align-centre">
                  <li className="nav-item white">
                    <strong> Logged as : {state.user.username} </strong>
                  </li>
                
                  <li className="nav-item">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </li>
                </div>

               </> 
              ) : (
                <>
                <div className="row">
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
