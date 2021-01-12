import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="">
        <ul className="navbar-nav">
          <li className="active btn">
            <Link className = "txt" to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
          </li>
          <li className="btn">
            <Link className = "txt" to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
          </li>
          <li className="btn">
            <Link className = "txt" to="/insurance" style={{ textDecoration: 'none' }}>Insurance Information</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
