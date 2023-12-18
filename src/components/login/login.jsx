import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import goo from "./goo.png";

function Login() {
  /* const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  onEmailChange = (event) => {
    setemail(event.target.value);
  };
  onPasswordChange = (event) => {
    setpassword(event.target.value);
  };
  onLoginChange = () => {};*/
  return (
    <div className="tc">
      <h1>
        <em>Login</em>
      </h1>
      <div className="tca">
        <p>Enter your email and password to Sign in</p>
        <input type="email" className="input" placeholder="  Email"></input>
        <br></br>
        <input
          type="password"
          className="input"
          placeholder="  Password"
        ></input>
        <br></br>
        <input type="checkbox" className="myCheckbox"></input>
        Remember me{" "}
        <Link to="/support" className="lonkk">
          {" "}
          forgot password
        </Link>
        <br></br>
        <button className="gradient-button">Login</button>
        <h6>
          Don't have an account yet? <Link to="/register">Register</Link>
        </h6>
        <hr />
        <span className="or-text">or</span>
        <hr />
        <button>
          <img src={goo} alt="google" />
          Sign up with google
        </button>
      </div>
    </div>
  );
}
export default Login;
