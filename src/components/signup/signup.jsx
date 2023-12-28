import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import goo from "./goo.png";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import UserContext from "../UserContext";

function Signup() {
  const { setUsername } = useContext(UserContext);

  //champs signup
  const [Newemail, setEmail] = useState("");
  const [Newpassword, setPassword] = useState("");
  const [Newname, setName] = useState("");
  const [Newnbr, setNbr] = useState("");

  //pour naviguer le site
  const navigate = useNavigate();

  //call the database users from firebase
  const usersCollectionRef = collection(db, "users");

  //fcts to take changes from inputs
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onNbrChange = (event) => {
    setNbr(event.target.value);
  };

  //fct to handle register
  const onHandleRegister = async () => {
    try {
      if (!Newname || !Newemail || !Newpassword || !Newnbr) {
        //check if all fields are filled
        alert("Please fill in all required fields.");
        return;
      }

      //zid email & password f auth
      await createUserWithEmailAndPassword(auth, Newemail, Newpassword);

      //zid user
      await addDoc(usersCollectionRef, {
        name: Newname,
        email: Newemail,
        password: Newpassword,
        phone_number: Newnbr,
      });

      alert("Registration successful!");
      setUsername(Newname);
      navigate("/home"); //navigate to home
    } catch (error) {
      console.error("Registration unsuccessful", error);
      alert("Registration unsuccessful. Please try again.");
    }
  };

  return (
    <div className="tc">
      <h1>
        <em>Create account</em>
      </h1>
      <div className="tca">
        <p>Fill in the requested informations to create your account</p>
        <input
          type="text"
          className="input"
          placeholder="  Name"
          onChange={onNameChange}
          required
        ></input>{" "}
        <input
          type="tel"
          className="input"
          placeholder="  Phone Number"
          onChange={onNbrChange}
          required
        ></input>
        <input
          type="email"
          className="input"
          placeholder="  Email"
          onChange={onEmailChange}
          required
        ></input>
        <br></br>
        <input
          type="password"
          className="input"
          placeholder="  Password"
          onChange={onPasswordChange}
          required
        ></input>
        <br></br>
        <div className="blabla">
          <input type="checkbox" className="myCheckbox"></input>
          ‎ Notify me about features and special offers <br />
        </div>
        <div className="blabla">
          <input type="checkbox" className="myCheckbox"></input>I agree to the ‎
          Terms of Service, General RTerms and conditions and Privacy Policy{" "}
        </div>
        <button className="gradient-button" onClick={onHandleRegister}>
          Create an account
        </button>
        <h6>
          Already have an account?<Link to="/">login</Link>
        </h6>
        <hr />
        <span className="or-text">or</span>
        <hr />
        <button className="goo">
          <div className="flexing">
            <img src={goo} alt="google" className="google" />
            <p> Sign in with google</p>
          </div>
        </button>
      </div>
    </div>
  );
}
export default Signup;
