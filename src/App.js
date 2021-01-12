import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Insurance from "./Pages/Insurance";

function App() {
  return (
    <>
      <div className="body_container">
        <div className="row1 row">
          <div className="logo col-2">HEALHUB</div>
          <div className="col">PORTAL</div>
        </div>
        <div className="row2 row">
          <div className="menu_bar col-2">
            <Menu />
          </div>
          <div className="content_body col">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/insurance" component={Insurance} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
