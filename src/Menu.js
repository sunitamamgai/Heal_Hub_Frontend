import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "./App";

const Menu = () => {
  const { state, dispatch } = useContext(loginContext);

  return (
    <>
      <div className="sidenav" id="no-print">
        <ul className="navbar-nav">
          {state.user.is_MP ? (
            <>
              <li className="active btn">
                <Link
                  className="txt"
                  to="/dashboard"
                  style={{ textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="active btn">
                <Link
                  className="txt"
                  to="/prescribe"
                  style={{ textDecoration: "none" }}
                >
                  Prescribe
                </Link>
              </li>
              <li className="active btn">
                <Link
                  className="txt"
                  to="/finduser"
                  style={{ textDecoration: "none" }}
                >
                  Find User
                </Link>
              </li>
              <li className="active btn">
                <Link
                  className="txt"
                  to="/prediction"
                  style={{ textDecoration: "none" }}
                >
                  Disease Prediction Tool
                </Link>
              </li>
              <li className="active btn">
                <Link
                  className="txt"
                  to="/patientdetailaccess"
                  style={{ textDecoration: "none" }}
                >
                  Patient Detail Access
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="active btn">
                <Link
                  className="txt"
                  to="/dashboard"
                  style={{ textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              </li>
              <li className="btn">
                <Link
                  className="txt"
                  to="/profile"
                  style={{ textDecoration: "none" }}
                >
                  Profile
                </Link>
              </li>
              <li className="btn">
                <Link
                  className="txt"
                  to="/insurance"
                  style={{ textDecoration: "none" }}
                >
                  Insurance Information
                </Link>
              </li>
              <li className="btn">
                <Link
                  className="txt"
                  to="/prescription"
                  style={{ textDecoration: "none" }}
                >
                  Prescription
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Menu;
