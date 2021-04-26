import { useContext, useEffect, useState } from "react";
import { loginContext } from "../App";
import axios from "axios";
import PrescriptionCard from "../components/PrescriptionCard";

const DetailAccess = () => {
  const { state, dispatch } = useContext(loginContext);
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
      return { ...prevData, ["did"]: state.user.id };
    });
    console.log(data);
  };

  const handleSubmit = async (event) => {
    if(event) {
        event.preventDefault();
    }
    
    // setPres([]);

    await axios
      .post("http://127.0.0.1:8000/api/v1/accessprescription/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        //   console.log(response);
        if(response.data != "No Access"){
            setPres(response.data);
        } else {
            setPres([]);
            alert("You dont have access to this users data.");
            return;
        }

        console.log(pres);
      })
      .catch((error) => {
        console.log(error.response);
        console.log(pres);
      });
  };

  useEffect(
      () => {
        console.log(pres);
      },[pres]
  );

  return (
    <>
      <div className="container inner">
        <h3>Detail Access</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label>Patient ID/ User ID</label>
              <input
                type="number"
                className="form-control"
                id=""
                placeholder="Patient ID"
                name="pid"
                value={data.pid}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Get
            </button>
          </div>
        </form>
        <hr />
        <div className="container">
          {pres.length !=0 ? (
            <div>
              <table
                className="col-8 table table-boardered table-striped"
                style={{
                  maxHeight: 600,  
                  overflow: "auto",
                  backgroundColor: "ActiveBorder",
                }}
                id="invoice-table"
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
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {pres.map((p, index) => {
                    return (<PrescriptionCard data={p} key={index} id={index} />);
                  })}
                </tbody>
              </table>
            </div>
          ) : <p>NOTHING TO SHOW</p>}
        </div>
      </div>
    </>
  );
};

export default DetailAccess;
