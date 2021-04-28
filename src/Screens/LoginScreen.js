import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { loginContext, urlContext } from "../App";
import ErrorScreen from "./ErrorScreen";

const LoginScreen = () => {
  const url = useContext(urlContext);
  const { state, dispatch } = useContext(loginContext);

  const [log, setLog] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);
  

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLog((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(log);
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    setLog(log);
    console.log(log);
    await axios
      .post(url+"/api/auth/login", log, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);

        const user = response.data.user;
        const token = response.data.token;

        // if (!response.data.user["verified_field"]) {
        //   setVerified(false);
        // }

        dispatch({
          type: "LOGIN",
          payload: { user, token },
        });
      })
      .catch((error) => {
        console.log(error.response);
        setError(true);
      });
    // console.log("Logged In");
  };

  useEffect(() => {
    setError(false);
  }, [state.user]);

  return (
    <>
      {error ? (
        <ErrorScreen />
      ) : (
        <div className="container">
          <div className="inner">
            <form onSubmit={handleSubmit}>
              <h3>Log in</h3>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  name="username"
                  onChange={onChangeHandler}
                  value={log.username}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  onChange={onChangeHandler}
                  value={log.password}
                />
              </div>

              <button type="submit" className="btn btn-dark btn-lg btn-block">
                Sign in
              </button>

              {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p> */}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginScreen;
