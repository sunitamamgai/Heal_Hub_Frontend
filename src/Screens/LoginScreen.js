import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { loginContext, urlContext } from "../App";
import ErrorScreen from "./ErrorScreen";
import { useHistory } from "react-router-dom";
import loginimg from "../assets/Images/HEALHUB-LOGIN.png";

const LoginScreen = () => {
  const url = useContext(urlContext);
  const { state, dispatch } = useContext(loginContext);

  const [log, setLog] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);
  let history = useHistory();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLog((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    setLog(log);
    await axios
      .post(url + "/api/auth/login", log, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);

        const user = response.data.user;
        const token = response.data.token;

        dispatch({
          type: "LOGIN",
          payload: { user, token },
        });

        if (user.is_MP) {
          history.push("/ddashboard");
        } else {
          history.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error.response);
        setError(true);
      });
  };

  useEffect(() => {
    setError(false);
  }, [state.user]);

  return (
    <>
      {error ? (
        <ErrorScreen />
      ) : (
        <div className="sec-body-container">
          <div className="home-content-inner align-centre">
            <div className="login-container">
              <div className="">
                <form onSubmit={handleSubmit} className="auth-inner">
                  <p className="bold-300">
                    <span className=" material-icons">login</span>Log in
                  </p>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control "
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

                  <button
                    type="submit"
                    className="btn btn-dark btn-lg btn-block"
                  >
                    Sign in
                  </button>
                  <hr />

                  <p>
                    By signing in you're accepting the{" "}
                    <strong>terms of service</strong>
                  </p>
                  {/* <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p> */}
                </form>
              </div>
            </div>
            <div className="">
              <img className="home-1-img" src={loginimg} alt="#" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginScreen;
