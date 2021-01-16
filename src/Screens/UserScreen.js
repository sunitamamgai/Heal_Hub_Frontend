import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import Insurance from "../Pages/Insurance";
import Prescription from "../Pages/Prescription";
import Menu from "../Menu";
import { loginContext } from "../App";


const UserScreen = () => {
  const { state, dispatch } = useContext(loginContext);

  useEffect(
    ()=>{
      //console.log("userScreen ",state.user);
      //console.log(localStorage.getItem("user"));
      //let userObj = JSON.parse(localStorage.getItem("user"));
      //console.log(userObj);
      //console.log(localStorage.getItem("token"));
      const user = JSON.parse(localStorage.getItem("user"));
      const token = JSON.parse(localStorage.getItem("token"));
      console.log(user);
      console.log(token);
      dispatch(
        {
          type:'REFRESH',
          payload: {user, token}
        }
      );
    },
    []
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row1 row" id="no-print">
          <div className="logo col-2">HEALHUB</div>
          <div className="col">PORTAL</div>
        </div>
        <div className="row2 row">
          <div className="menu_bar col-2">
            <Menu />
          </div>
          <div className="container-fluid col-10">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/insurance" component={Insurance} />
              <Route exact path="/prescription" component={Prescription} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserScreen;
