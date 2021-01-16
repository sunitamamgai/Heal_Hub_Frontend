import React from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { Switch, Route, Link } from "react-router-dom";
import { Button } from "@material-ui/core";


const OnboardingScreen = () => {
  return (
    <>
      <div className="body_container">
        <div className="container">
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default OnboardingScreen;
