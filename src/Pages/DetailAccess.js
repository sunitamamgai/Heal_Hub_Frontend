import { useContext, useState } from "react";
import { loginContext, urlContext } from "../App";
import axios from "axios";
import PrescriptionCard from "../components/PrescriptionCard";

const DetailAccess = () => {
  const url = useContext(urlContext);
  const {state} = useContext(loginContext);
  const [data, setData] = useState({
    did: "",
    pid: "",
  });

  const [pres, setPres] = useState([]);

  const handleInputChange = (event) => {
    if (event) {
      event.preventDefault();
    }
    const { name, value } = event.target;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
    setData((prevData) => {
      return { ...prevData, "did": state.user.id };
    });
    // console.log(data);
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    // setPres([]);

    await axios
      .post(url+"/api/v1/accessprescription/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //   console.log(response);
        if (response.data !== "No Access") {
          setPres(response.data);
        } else {
          setPres([]);
          alert("You dont have access to this users data.");
          return;
        }

        // console.log(pres);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(pres);
      });
  };


  return (
    <>
      <div className="content-inner">
        <h3>Detail Access</h3>
        <p><strong>Note: </strong>This tool must be used once the patient has granted you the access to their medical reports.</p>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col">
              <label>Patient ID/ User ID</label>
              <div className="row  align-centre">
                <div className="col-9">
                  <input
                    type="number"
                    className="form-control"
                    id=""
                    placeholder="Enter Patient ID / User ID"
                    name="pid"
                    value={data.pid}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-3">
                  <button type="submit" className="btn btn-primary">
                    Get
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr />
        <div className="scrollable-container">
          <div className="">
            {pres.length !== 0 ? (
              <div className="">
                <div className="col">
                  <h3>User Prescription</h3>
                  <hr />
                  <table
                    className="col table"
                  >
                    <thead className="thead-dark">
                      <tr bgcolor="">
                        <th scope="col">Prescriber Id</th>
                        <th scope="col">Hospital or Clinic</th>
                        <th scope="col">Doctor's Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Symptoms</th>
                        <th scope="col">Medicines</th>
                        <th scope="col">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {pres.map((p, index) => {
                        return (
                          <PrescriptionCard data={p} key={index} id={index} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="profile-inner">
                <p>
                  <strong>Note:</strong> Currently you have not searched any
                  Patient ID/User ID
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailAccess;
