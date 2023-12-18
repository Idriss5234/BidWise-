import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul className="logo">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <p className="brand">
              <strong>Bid</strong>wise
            </p>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul className="actions">
        <li>
          <Link to="/login">
            {" "}
            <button className="btn1">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            {" "}
            <button className="btn1">Sign Up</button>
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
