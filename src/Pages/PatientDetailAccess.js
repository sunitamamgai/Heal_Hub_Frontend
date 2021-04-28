import { useEffect, useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import AccessById from "./AccessById";
import AccessByFP from "./AccessByFP";
import PDANav from "../components/PDANav";


const PatientDetailAccess = () => {
  const [isID, setIsID] = useState(false);
  const [isFP, setIsFP] = useState(false);

  const handleIsID = () => {
    console.log("IM ID");
    setIsID(true);
    setIsFP(false);
  };

  const handleIsFP = () => {
    console.log("IM FP");
    setIsID(false);
    setIsFP(true);
  };


  return (
    <>
      <div className="container inner">
        <h3>Patient Detail Access</h3>
        <div><PDANav handleIsFP={handleIsFP} handleIsID={handleIsID}/></div>
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
