import React, { useState, useContext } from "react";
import { loginContext } from "../App";
import DProfileCard from "../components/DProfileCard";
import ProfileCard from "../components/ProfileCard";
import TemperatureCard from "../components/TemperatureCard";

const DDashboard = () => {
  const { state, dispatch } = useContext(loginContext);

  return (
    <>
      <div className="container inner">
        <h1>Dashboard</h1>
        <hr />
        <div className="scrollable-container">
         <DProfileCard/>
        </div>
      </div>
    </>
  );
};

export default DDashboard;
