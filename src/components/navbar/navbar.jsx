import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
import UserContext from "../UserContext";
import logo from "./logo.png";
import electronics from "../Images/electronics.png";
import art from "../Images/art.png";
import furniture from "../Images/furniture.png";
import clothes from "../Images/clothes.png";
import special from "../Images/special.png";
import others from "../Images/others.png";
import down from "../Images/down-arrow.svg";
import down_hover from "../Images/down-arrow-hover.svg";
import { Myartciles } from "../myarticles/myarticles";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  // Function to handle dropdown visibility
  const handleDropdown = () => {
    setShowCategories(!showCategories);
  };

  // Get the current location using useLocation from react-router-dom
  const location = useLocation();
  const navigate = useNavigate();

  const { username } = useContext(UserContext); //get username from usecontext

  const OnLogout = () => {
    //if logout go to login page
    navigate("/");
  };

  const isLoginPage =
    location.pathname === "/" || location.pathname === "/signup"; //to know if u are already logged in

  return (
    <nav className="nav">
      <ul className="logo">
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>

        <li>
          <Link to="/">
            <h2>
              <strong>Bid</strong>
              <em>Wise</em>
            </h2>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/BidWise/">
            <div
              className="categories"
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <span>Categories</span>
              <img
                src={showCategories ? down_hover : down}
                alt="down arrow"
                id="down-arrow"
                className="arrow"
              />
              {showCategories && (
                <div className="dropdown-content">
                  <Link to="/BidWise/" className="category">
                    <img
                      src={electronics}
                      alt="electronics"
                      className="category-img"
                    />
                    <span>Electronics</span>
                  </Link>

                  <Link to="/BidWise/" className="category">
                    <img src={art} alt="art" className="category-img" />
                    <span>Art</span>
                  </Link>

                  <Link to="/BidWise/" className="category">
                    <img
                      src={furniture}
                      alt="furniture"
                      className="category-img"
                    />
                    <span>Furniture</span>
                  </Link>

                  <Link to="/BidWise/" className="category">
                    <img
                      src={clothes}
                      alt="clothes and accessories"
                      className="category-img"
                    />
                    <span>Clothes & Accessories</span>
                  </Link>

                  <Link to="/BidWise/" className="category">
                    <img
                      src={special}
                      alt="special items"
                      className="category-img"
                    />
                    <span>Special Items</span>
                  </Link>

                  <Link to="/BidWise/" className="category">
                    <img src={others} alt="others" className="category-img" />
                    <span>Others</span>
                  </Link>
                </div>
              )}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/sell">Sell</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
        <li>
          <Link to="/myarticles">MyItems</Link>
        </li>
      </ul>
      <ul className="actions">
        {isLoginPage ? (
          <>
            <li>
              <Link to="/">
                <button className="btn1">Login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
          </>
        ) : (
          <div className="in">
            <button onClick={OnLogout}>Logout</button>
            <button className="usrn">@ {username}</button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
