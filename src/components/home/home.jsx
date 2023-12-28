import React from "react";
import Products from "./Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1 id="sect_title">Listed Bids</h1>
      <Products />
    </div>
  );
};

export default Home;
