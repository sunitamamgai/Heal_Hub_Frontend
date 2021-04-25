import React, { useState, useEffect, useContext } from "react";
import { loginContext } from "../App";
import axios from "axios";

const ProfileCard = () => {
  const { state, dispatch } = useContext(loginContext);
  const [data, setData] = useState([]);

  useEffect(async () => {
    let res = await axios.get(
      "http://127.0.0.1:8000/api/v1/PersonalInfoOfSpecificUser/" + state.user.id
    );
    console.log(res);
    setData(res.data);
    console.log("This is data");
    console.log(data);
  }, []);

  return (
    <>
      <div className="container inner">
        <div className="card2">
          <h1>Profile Information</h1>
          {data.length == 0 ? (
            <h3>Currently no Data</h3>
          ) : (
            <div className="col">
              <div className="row">
                <p>
                  <strong>Name:</strong> {data["firstName"]}{" "}
                  {data["middleName"]} {data["lastName"]}
                </p>
                <p>
                  <strong>Gender:</strong> {data["gender"]}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {data["dateOfBirth"]}
                </p>
                <p>
                  <strong>Blood Group:</strong> {data["bloodGroup"]}
                </p>
              </div>
              <div className="row">
                <p>
                  <strong>Email ID:</strong> {data["emailId"]}
                </p>
                <p>
                  <strong>Mobile Number:</strong> {data["mobileNumber"]}
                </p>
              </div>
              <div className="row">
                <p>
                  <strong>Address:</strong> {data["addressLine1"]} ,{" "}
                  {data["addressLine2"]}, {data["cityOrTown"]},{" "}
                  {data["district"]}
                </p>
              </div>
              <div className="row">
                <p>
                  <strong>State:</strong> {data["state"]}
                </p>
                <p>
                  <strong>PIN:</strong> {data["pin"]}
                </p>
              </div>
              <div className="row">
                <p>
                  <strong>Aadhar Card Number:</strong>{" "}
                  {data["aadhaarCardNumber"]}
                </p>
                <p>
                  <strong>User ID:</strong> {data["user"]}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
