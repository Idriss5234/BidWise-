import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./list_item.css";

function ListItem() {
  return (
    <div className="list-item-container">
      <h1>
        <em className="tc">List an item</em>
      </h1>
      <div className="listing">
        <div className="grid-container">
          <div className="grid-item">
            <h3>Item name</h3>
            <input
              type="text"
              className="inputing"
              placeholder="  Item name"
            ></input>{" "}
            <h3>Item short description</h3>
            <input
              type="text"
              className="inputing"
              placeholder=" Item short description"
            ></input>
            <h3>Item category</h3>
            <input
              type="text"
              className="inputing"
              placeholder="  Item category"
            ></input>
          </div>
          <div className="grid-item">
            <h3>Item image</h3>
            <input type="file" className="inputing y file"></input>
            <h3>Starting price</h3>
            <input
              type="number"
              className="inputing y"
              placeholder="  0.00MAD"
            ></input>
            <h3>End date</h3>
            <input type="date" className="inputing y" placeholder=" "></input>
          </div>
          <div className="grid-item">
            <h3>Item description</h3>
            <input
              type="text"
              className="inputing desc"
              placeholder="  Description"
            ></input>
          </div>
        </div>
        <button className="gradient-button">List item</button>
      </div>
    </div>
  );
}

export default ListItem;
