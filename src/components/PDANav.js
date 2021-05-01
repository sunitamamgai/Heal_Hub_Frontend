
import { Link } from "react-router-dom";
const PDANav = () => {

  return (
    <>
      <Link
          className="txt"
          to="/patientdetailaccess/accessbyid"
        >
        <button className="btn btn-dark">
            Access By ID
        </button>
      </Link>
      <Link
          className="txt"
          to="/patientdetailaccess/accessbyfp"
      >
      <button className="btn btn-dark" >
          Access By Fingerprint
      </button>
      </Link>
    </>
  );
};

export default PDANav;
