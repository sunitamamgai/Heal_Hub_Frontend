import React, { useState, useEffect, useContext } from "react";
import { loginContext, urlContext } from "../App";
import axios from "axios";
import male from "../assets/Images/profile.png";

const ProfileCard = () => {
  const url = useContext(urlContext);
  const { state } = useContext(loginContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.get(
        url+"/api/v1/PersonalInfoOfSpecificUser/" + state.user.id
      );
      setData(res.data);
      console.log(res.data);
    }
    
    fetchData();
  }, [url, state]);

  return (
    <>
      <div className="profile-inner">
        <div className="light-card">
          <h2>Profile Information</h2>
          <hr/>
          {data.length === 0 ? (
            <h3>Currently no Data</h3>
          ) : (
            <div className="">
              <div className="row ">
                <div className="col gradient-card">
                  <div className="row profile-container">
                    <img className="profile-img" src={male} alt=""/>
                  </div>
                  <div className="row profile-container">
                    <p><strong>{data["firstName"]}{" "}
                    {data["middleName"]} {data["lastName"]}</strong></p>
                  </div> 
                </div>
                <div className="col profile-container2 font-medium">

                  <div className="row">
                    <p>
                      <strong>ID:</strong> {data["user"]}
                    </p>
                    <p>
                      <strong>Email ID:</strong> {data["emailId"]}
                    </p>
                    <p>
                      <strong>Mobile Number:</strong> {data["mobileNumber"]}
                    </p>
                  </div>
                  <div className="row">
                    <p>
                      <strong>Blood Group:</strong> {data["bloodGroup"]}
                    </p>
                    <p>
                      <strong>Gender:</strong> {data["gender"]}
                    </p>
                    <p>
                      <strong>Date of Birth:</strong> {data["dateOfBirth"]}
                    </p>
                  </div>
                   <div className="row">
                    <p>
                      <strong>Address:</strong> {data["addressLine1"]} {data["addressLine2"]}, {data["cityOrTown"]},  {data["district"]}, {data["state"]}, {data["pin"]}
                    </p>
                  </div>
                </div>
              </div> 
            </div>  
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
