import React, { Component } from "react";
import "./banner.css";
import logo2 from "../../pics/logo2.png";

function Banner() {
  return (
    <div className="cont">
      <div className="cont1">
        <h1>
          <strong>Bid</strong>
          <em>Wise</em>
        </h1>
        <h2>
          Online bidding made available in Morocoo, with optimal prices and
          maximum security
        </h2>
      </div>
      <div className="cont2">
        <img src={logo2} alt="logo" className="img1" />
      </div>
    </div>
  );
}
export default Banner;
