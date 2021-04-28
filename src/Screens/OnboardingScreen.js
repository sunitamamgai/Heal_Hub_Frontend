import React from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import OTPScreen from "./OTPScreen";

const OnboardingScreen = () => {
  return (
    <>
      <div className="body_container">
        <div className="container">
          <HashRouter>
            <Route exact path="/" component={LoginScreen}/>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Route exact path="/otpscreen" component={OTPScreen} />
          </HashRouter>
        </div>
      </div>
    </>
  );
};

export default OnboardingScreen;
