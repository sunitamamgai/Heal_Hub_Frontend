import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { loginContext } from "../App";

const LoginScreen = () => {
  const { state, dispatch } = useContext(loginContext);

  const [log, setLog] = useState({
    username: "",
    password: "",
  });

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
      .post("http://127.0.0.1:8000/api/auth/login", log, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        // console.log(response.data);
        // console.log(response.data.token);
        // console.log(response.data.user.username);
        const user = response.data.user;
        const token = response.data.token;
          dispatch({
            type: "LOGIN",
            payload: {user, token},
          });
      })
      .catch((error) => console.log(error.response.request._response));
    console.log("Logged In");
  };

  useEffect(() => {
    console.log(state.token);
  }, [state.user]);

  return (
    <>
      <div className="container outer">
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

            {/* <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div> */}

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Sign in
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
