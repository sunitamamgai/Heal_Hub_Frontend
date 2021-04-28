
import { Link } from "react-router-dom";
const PDANav = () => {

  return (
    <>
      <button className="btn btn-dark">
        <Link
          className="txt"
          to="/patientdetailaccess/accessbyid"
          style={{ textDecoration: "none" }}
        >
          Access By ID
        </Link>
      </button>
      <button className="btn btn-dark" >
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
