import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterScreen = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    is_MP: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "is_MP") {
      setInput((prevData) => {
        return { ...prevData, [name]: event.target.checked };
      });
    } else {
      setInput((prevData) => {
        return { ...prevData, [name]: value };
      });
    }
    console.log({ ...input });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    setInput(input);
    await axios
      .post("http://127.0.0.1:8000/api/auth/register", input, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.response.request._response));
    console.log("Registered");
  };

  return (
    <>
      <div className="container outer">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={onChangeHandler}
                value={input.username}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                onChange={onChangeHandler}
                value={input.email}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                name="password"
                onChange={onChangeHandler}
                value={input.password}
              />
            </div>

            <div className="form-group">
              <label>Want to register as Medical Practitioner?</label>
              <input
                type="checkbox"
                className="form-control"
                placeholder="Click only if you are Medical Practitioner"
                name="is_MP"
                checked={input.is_MP}
                onChange={onChangeHandler}
              />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered{" "}
              <Link
                className="txt"
                to="/login"
                style={{ textDecoration: "none" }}
              >
                Login ?
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
