import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import goo from "./goo.png";

function Signup() {
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
        <em>Create account</em>
      </h1>
      <div className="tca">
        <p>Fill in the requested informations to create your account</p>
        <input type="text" className="input" placeholder="  Name"></input>{" "}
        <input
          type="tel"
          className="input"
          placeholder="  Phone Number"
        ></input>
        <input type="email" className="input" placeholder="  Email"></input>
        <br></br>
        <input
          type="password"
          className="input"
          placeholder="  Password"
        ></input>
        <br></br>
        <input type="checkbox" className="myCheckbox"></input>
        ‎ Notify me about features and special offers <br />
        <input type="checkbox" className="myCheckbox"></input>I agree to the ‎
        Terms of Service, General RTerms and conditions and Privacy Policy{" "}
        <br></br>
        <button className="gradient-button">Create an account</button>
        <h6>
          Already have an account?<Link to="/login">login</Link>
        </h6>
        <hr />
        <span className="or-text">or</span>
        <hr />
        <button>
          <img src={goo} alt="google" />
          <span> Sign in with google</span>
        </button>
      </div>
    </div>
  );
}
export default Signup;
