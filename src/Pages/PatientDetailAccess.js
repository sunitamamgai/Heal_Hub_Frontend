import { Switch, Route } from "react-router-dom";
import AccessById from "./AccessById";
import AccessByFP from "./AccessByFP";
import PDANav from "../components/PDANav";


const PatientDetailAccess = () => {
  
  return (
    <>
      <div className="container inner">
        <h3>Patient Detail Access</h3>
        <div><PDANav/></div>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/patientdetailaccess/accessbyid"
              component={AccessById}
            />
            <Route
              exact
              path="/patientdetailaccess/accessbyfp"
              component={AccessByFP}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default PatientDetailAccess;
