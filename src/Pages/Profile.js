import React, { useState, useContext } from "react";
//import useProfileForm from "../customHooks/useProfileForm";
import axios from "axios";
import { loginContext, urlContext } from "../App";

const Profile = () => {
  const url = useContext(urlContext);
 
  const { state } = useContext(loginContext);

  const [profile, setProfile] = useState({
    user: state.user.id,
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    bloodGroup: "",
    emailId: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    addressLine1: "",
    addressLine2: "",
    cityOrTown: "",
    district: "",
    state: "",
    pin: "",
    aadhaarCardNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(profile);
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
   
    //AXIOS POST Request
    axios
      .post(url+"/api/v1/PersonalInfo/", profile, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.response.request._response));
  };

  return (
    <>
      <div className="content-inner">
        <div className="">
          <div className="profile-inner">
          <div className="row">
            <div className="col">
              <h3>Update Profile</h3>
            </div> 
            <div className="col-2"> 
              <button className="btn btn-primary" type="submit">
                        Save
              </button>
            </div>  
          </div>
          <hr/>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <label>First Name</label>
                  <input
                    className="form-control "
                    type="text"
                    name="firstName"
                    onChange={handleInputChange}
                    value={profile.firstName}
                    autoComplete="off"
                  />

                  <label>Middle Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="middleName"
                    onChange={handleInputChange}
                    value={profile.middleName}
                    autoComplete="off"
                    placeholder="optional"
                  />

                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lastName"
                    onChange={handleInputChange}
                    value={profile.lastName}
                    autoComplete="off"
                  />

                  <label>Gender</label>
                  <input
                    className="form-control"
                    type="text"
                    name="gender"
                    onChange={handleInputChange}
                    value={profile.gender}
                    autoComplete="off"
                    placeholder="Male or Female or Other"
                  />

                  <label>Date of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    name="dateOfBirth"
                    onChange={handleInputChange}
                    value={profile.dateOfBirth}
                    autoComplete="off"
                  />

                  <label>Blood Group</label>
                  <input
                    className="form-control"
                    type="text"
                    name="bloodGroup"
                    onChange={handleInputChange}
                    value={profile.bloodGroup}
                    autoComplete="off"
                    placeholder="O+,O-,A+,A-,AB+,AB-,B+,B-"
                  />

                </div>
                <div className="col">
                  <label>Email ID</label>
                  <input
                    className="form-control"
                    type="text"
                    name="emailId"
                    onChange={handleInputChange}
                    value={profile.emailId}
                    autoComplete="off"
                  />

                  <label>Mobile Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="mobileNumber"
                    onChange={handleInputChange}
                    value={profile.mobileNumber}
                    autoComplete="off"
                  />

                  <label>Alternate Mobile Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="alternateMobileNumber"
                    onChange={handleInputChange}
                    value={profile.alternateMobileNumber}
                    autoComplete="off"
                    placeholder="optional"
                  />

                   <label>Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      name="addressLine1"
                      onChange={handleInputChange}
                      value={profile.addressLine1}
                      autoComplete="off"
                    />

                    <label>Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      name="addressLine2"
                      onChange={handleInputChange}
                      value={profile.addressLine2}
                      autoComplete="off"
                    />

                    <label>City or Town</label>
                    <input
                      className="form-control"
                      type="text"
                      name="cityOrTown"
                      onChange={handleInputChange}
                      value={profile.cityOrTown}
                      autoComplete="off"
                    />
                </div>
                <div className="col">
                  <div className="">


                    <label>District</label>
                    <input
                      className="form-control"
                      type="text"
                      name="district"
                      onChange={handleInputChange}
                      value={profile.district}
                      autoComplete="off"
                    />

                    <label>State</label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      onChange={handleInputChange}
                      value={profile.state}
                      autoComplete="off"
                    />

                    <label>Pin</label>
                    <input
                      className="form-control"
                      type="text"
                      name="pin"
                      onChange={handleInputChange}
                      value={profile.pin}
                      autoComplete="off"
                    />

                    <label>Aadhaar Card Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="aadhaarCardNumber"
                      onChange={handleInputChange}
                      value={profile.aadhaarCardNumber}
                      autoComplete="off"
                      placeholder=""
                    />
                  </div>
                  <hr />
                  <p className="font-small"><strong>Note:</strong> When you fill this form and submit it, The data will reflect in your dashboard.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
