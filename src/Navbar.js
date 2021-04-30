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

  return (
    <>
      <nav className="nav-container navbar navbar-expand-lg">
        <div className="container-fluid">
        
          <img src={logo} alt="HEALHUB" height="40px" />
    
          <div className="">
            <ul className="navbar-nav  align-centre">
              {state.isAuthenticated ? (
                <>
                <div className="row align-centre">
                  <li className="nav-item white">
                    <strong> Logged as : {state.user.username} </strong>
                  </li>
                
                  <li className="nav-item">
                  <Link
                  to="/"
                  >
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
                <div className="row  align-centre">
                  <li className="nav-item">
                    <Link
                        className="txt"
                        to="/"
                        style={{ textDecoration: "none" }}
                      >
                       <h6 style={{paddingRight:20}}> Home </h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        className="txt"
                        to="/login"
                        style={{ textDecoration: "none" }}
                      >
                       <h6 style={{paddingRight:20}}> Login </h6>
                    </Link>
                  </li>
                  <li className="nav-item">
                     <Link
                        className="txt"
                        to="/register"
                        style={{ textDecoration: "none" }}
                      >
                        <h6 style={{paddingRight:20}}>Register</h6>
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
