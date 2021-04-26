import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
const PDANav = (props) => {


  const toggleID = ()=> {
      props.handleIsID()
  } 
  
  const toggleFP = ()=> {
    props.handleIsFP()
}
  return (
    <>
      <button className="btn btn-dark" onClick={toggleID}>
        <Link
          className="txt"
          to="/patientdetailaccess/accessbyid"
          style={{ textDecoration: "none" }}
        >
          Access By ID
        </Link>
      </button>
      <button className="btn btn-dark" onClick={toggleFP}>
        <Link
          className="txt"
          to="/patientdetailaccess/accessbyfp"
          style={{ textDecoration: "none" }}
        >
          Access By Fingerprint
        </Link>
      </button>
    </>
  );
};

export default PDANav;
