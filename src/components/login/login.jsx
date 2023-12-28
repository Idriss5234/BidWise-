import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import goo from "./goo.png";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import UserContext from "../UserContext";

function Login() {
  //init call to database users from firebase
  const userCollectionRef = collection(db, "users");

  //input fields init
  const { setUsername } = useContext(UserContext);
  const [Newemail, setEmail] = useState("");
  const [Newpassword, setPassword] = useState("");
  const navigate = useNavigate();
  //fcts to handle input changes
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  //get username by taking the email
  const getUserData = async (email) => {
    try {
      const q = query(userCollectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        const name = userData.name;

        setUsername(name);
        console.log("User name:", name);
      } else {
        console.log("No user found with the email:", email);
      }
    } catch (error) {
      console.error("Error fetching user:", error.message);
    }
  };
  //get the user data to check if the login credentiels are correct

  const onHandleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, Newemail, Newpassword);
      alert("Login successful");
      getUserData(Newemail); // Fetch user data after successful login and pass it yo getUserData to get the username
      navigate("/home");
    } catch (error) {
      alert("Wrong credentials, try again");
    }
  };

  return (
    <div className="tc">
      <h1>
        <em>Login</em>
      </h1>
      <div className="tca">
        <p>Enter your email and password to Sign in</p>
        <input
          type="email"
          className="input"
          placeholder="  Email"
          onChange={onEmailChange}
        ></input>
        <br></br>
        <input
          type="password"
          className="input"
          placeholder="  Password"
          onChange={onPasswordChange}
        ></input>
        <br></br>
        <div className="stuff">
          <input type="checkbox" className="myCheckbox"></input>
          Remember me
          <Link to="/support" className="lonkk">
            {" "}
            forgot password
          </Link>
        </div>
        <button className="gradient-button" onClick={onHandleLogin}>
          Login
        </button>
        <h6>
          Don't have an account yet? <Link to="/signup">Register</Link>
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

export default Login;
