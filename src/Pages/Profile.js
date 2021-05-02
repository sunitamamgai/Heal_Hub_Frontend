import React, { useState, useContext } from "react";
import axios from "axios";
import { loginContext, urlContext } from "../App";
import moment from "moment"

const Profile = () => {
  const url = useContext(urlContext);
 
  const { state } = useContext(loginContext);

  const bloodGroups = [
    { label: "Choose", value: "" },
    { label: "A+", value: "A+" },
    { label: "B+", value: "B+" },
    { label: "AB+", value: "AB+"},
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
    { label: "A-", value: "A-" },
    { label: "B-", value: "B-" },
    { label: "AB-", value: "AB-" }
  ];

  const states = [
    { label: "Choose", value: "" },
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam"},
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana"},
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka"},
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya"},
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha"},
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana"},
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
  ]
  
  const genders = [
    { label: "Choose", value: "" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Others", value: "Others" }
  ];

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
        alert("Data Submitted");
      })
      .catch((error) => console.log(error.response.request));
  };

  return (
    <>
      <div className="content-inner">
        <div className="">
          <div className="profile-inner">
          <div className="row">  
            <h3>Update Profile</h3> 
          </div>
          <hr/>
            <form onSubmit={handleSubmit} >
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
                  <select name = "gender" value = {profile.gender} className = "form-control" onChange = {handleInputChange}>
                    {genders.map((gender, index) => (
                      <option key = {index} value = {gender.value}>
                        {gender.label}
                      </option>
                    ))}
                  </select>
               
                  <label>Date of Birth</label>
                  <input
                    className="form-control"
                    type="date"
                    name="dateOfBirth"
                    onChange={handleInputChange}
                    value={profile.dateOfBirth}
                    autoComplete="off"
                    max={moment().format("YYYY-MM-DD")}
                  />

                  <label>Blood Group</label>
                  <select name = "bloodGroup" value = {profile.bloodGroup} className = "form-control" onChange = {handleInputChange}>
                    {bloodGroups.map((bloodGroup, index) => (
                      <option key = {index} value = {bloodGroup.value}>
                        {bloodGroup.label}
                      </option>
                    ))}
                  </select>

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
                    <select name = "state" value = {profile.state} className = "form-control" onChange = {handleInputChange}>
                    {states.map((state, index) => (
                      <option key = {index} value = {state.value}>
                        {state.label}
                      </option>
                    ))}
                    </select>
                      
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
                      minLength = '12'
                      maxLength = '12'
                    />
                  </div>
                  <hr />
                  <p className="font-small"><strong>Note:</strong> When you fill this form and submit it, The data will reflect in your dashboard.</p>
                  
                  <button className="btn btn-primary" type="submit">
                        Save
                  </button>

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
