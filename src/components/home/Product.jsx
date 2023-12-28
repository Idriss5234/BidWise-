import React, { useState } from "react";
import "./Product.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import heart_normal from "../Images/heart-normal.svg";
import heart_active from "../Images/heart-active.svg";

const Product = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isuser = location.pathname === "/home"; //to know if u are already in home

  // i need 2 ifs : if1 ila kan home donc dir koulchi else if2 ila kan user=itemowner

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <div className="product">
      <div className="image">
        <img src={product.image} alt="product" id="product-image" />
        <div className="price">
          <p id="top-bid">Top Bid:</p>
          <p id="product-price">{product.price} MAD</p>
        </div>
      </div>

      <div className="details">
        <div className="text">
          <h1 id="product-title">{product.name}</h1>
          <p id="product-description">{product.description}</p>
        </div>

        <div className="timer">
          <p id="ends-in">Ends in:</p>
          <p id="expiration-time">{product.time}</p>
          {/*<div className="labels">
          <p className="label" id="label-days">
              Days
            </p>
            <p className="label" id="label-hours">
              Hours
            </p>
            <p className="label" id="label-minutes">
              Minutes
            </p>
          </div>
 */}
        </div>
        <div className="product-buttons">
          <button id="bid-button">Bid</button>
          <img
            src={isFavorite ? heart_active : heart_normal}
            alt="favorite"
            id="favorite-button"
            onClick={handleFavoriteClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
