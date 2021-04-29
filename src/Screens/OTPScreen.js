import { useState, useContext } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';
import { urlContext } from "../App";
import otp_img from "../assets/Images/otp_vector.jpg";

const OTPScreen = () => {

  const url = useContext(urlContext);
  
  let history = useHistory();
  const [otp, setOtp] = useState({
    phone_number: localStorage.getItem("phone_number"),
    otp: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setOtp((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log({ ...otp });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    console.log(otp);

    await axios
      .post(url+"/api/auth/verify_otp", otp, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      });

      history.push('/login');
        
  };

  return (
    <>
      <div className="sec-body-container">
        <div className="inner ">
          <form onSubmit={handleSubmit}>
            <div className="align-centre">
              <p className="bold-1" >The OTP has been sent to your mobile number.</p>
            </div>
            <div className="align-centre">
              <img src={otp_img} alt="OTP" height="250px" />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter One Time Password"
                name="otp"
                onChange={onChangeHandler}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
                SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OTPScreen;
