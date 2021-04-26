import { useEffect, useState } from "react";
import axios from "axios";

const RequestCard = (props) => {
  const { id, username, email, is_mp, phone_number } = props.value;
  const did = props.did;

  const [pField, setPfield] = useState({
    prescription_field: false,
  });

  const [data, setData] = useState({
    otp:"",
    verify_otp:false,
    pid: "",
    did: "",
    prescription_field: false,
    blood_pressure_field: false
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "prescription_field") {
      setPfield((prevData) => {
        return { ...prevData, [name]: event.target.checked };
      });
    }

    setData((prevData) => {
        return {
          ...prevData,
          ["prescription_field"]: event.target.checked,
          ["pid"]: id,
          ["did"]: did,
        };
      });

      
  };

  const handleSubmit = (event) => {

    if(event) {
        event.preventDefault();
    }
    localStorage.setItem('pid',id);
    console.log(data);

      let res = axios
      .post("http://127.0.0.1:8000/api/v1/accessverification/", data, {
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
      <div className="card2">
        <div className="card-body">
          <p className="card-text">
            Username : {username}
            <br></br>
            UserID : {id}
            <br></br>
            Phone Number : {phone_number}
          </p>
        </div>
        <form >
          <div className="form-group">
            <div className="row searchrow">
              <label className="col">Prescribtion Field</label>
              <input
                type="checkbox"
                className="form-control col"
                placeholder=""
                name="prescription_field"
                checked={pField.prescription_field}
                onChange={onChangeHandler}
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-dark">Request</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RequestCard;
