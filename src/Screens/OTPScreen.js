import { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const OTPScreen = () => {
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
      .post("http://127.0.0.1:8000/api/auth/verify_otp", otp, {
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
      <div className="container">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>ENTER OTP</h3>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="One Time Password"
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
