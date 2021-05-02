import { Switch, Route } from "react-router-dom";
import AccessById from "./AccessById";
import AccessByFP from "./AccessByFP";
import PDANav from "../components/PDANav";


const PatientDetailAccess = () => {
  
  return (
    <>
      <div className="content-inner">
        <h3>Access Verification Tool</h3>
        <p><strong>Note: </strong>Use Access by fingerprint in those cases where the patient is unconscious or is incapable of communication.</p>
        <div className="profile-inner"><PDANav/></div>
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
