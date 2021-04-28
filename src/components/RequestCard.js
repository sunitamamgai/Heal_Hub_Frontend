import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { urlContext } from "../App";

const RequestCard = (props) => {
  const url = useContext(urlContext);
  const { id, username, phone_number } = props.value;
  const did = props.did;

  const [pField, setPfield] = useState({
    prescription_field: false,
  });

  const [data, setData] = useState({
    otp: "",
    verify_otp: false,
    pid: "",
    did: "",
    prescription_field: false,
    blood_pressure_field: false,
  });

  const onChangeHandler = (event) => {
    const { name } = event.target;
    if (name === "prescription_field") {
      setPfield((prevData) => {
        return { ...prevData, [name]: event.target.checked };
      });
    }

    setData((prevData) => {
      return {
        ...prevData,
        "prescription_field": event.target.checked,
        "pid": id,
        "did": did,
      };
    });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    localStorage.setItem("pid", id);
    console.log(data);

    axios
      .post(url+"/api/v1/accessverification/", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {}, [pField.prescription_field, data]);

  return (
    <>
      {console.log(props.value)}
      <div className="request-card2">
        <div className="card-body">
          <p className="card-text">
            <h3>Patient Detail</h3>
            <hr/>
            <div className="row">
              <div className="col-2">
                <strong>UserID : </strong>
                {id}
              </div>
              <div className="col-4">
                <strong>Username :</strong> {username}
              </div>
              <br></br>
              <div className="col-6">
                <strong>Phone Number :</strong> {phone_number}
              </div>
            </div>
          </p>
        </div>
        <form>
          <div className="form-group">
            <div className="row searchrow">
              <label className="col">
                <strong>Prescribtion Field</strong>
              </label>
              <input
                type="checkbox"
                className="form-control col"
                placeholder=""
                name="prescription_field"
                checked={pField.prescription_field}
                onChange={onChangeHandler}
              />
            </div>
            <hr/>
            <div className="col align-centre">
            <button onClick={handleSubmit} className="btn btn-dark col ">
              Request
            </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestCard;
