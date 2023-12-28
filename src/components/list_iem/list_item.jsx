import React, { useState, useContext } from "react";
import "./list_item.css";
import { v4 } from "uuid";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase";
import UserContext from "../UserContext";

function ListItem() {
  //get the username from useContext
  const { username } = useContext(UserContext);

  const [ItemName, setItemName] = useState("");
  const [ItemShDesc, setItemShDesc] = useState("");
  const [ItemCat, setItemCat] = useState("");
  const [ItemImage, setItemImage] = useState("");
  const [StartingPrice, setStartingPrice] = useState("");
  const [ItemEndDate, setItemEndDate] = useState("");
  const [ItemDesc, setItemDesc] = useState("");

  const OnUploadImage = async () => {
    //upload image to the storage in firebase
    if (!ItemImage) {
      alert("Enter valid img");
    } else {
      const imgurl = `${ItemImage.name + v4()}`;
      console.log(imgurl);
      const imgRef = ref(storage, `images/${imgurl}`);
      await uploadBytes(imgRef, ItemImage);
      alert("Upload successful");

      // Return the full path of the uploaded image
      return `images/${imgurl}`;
    }
    return "";
  };
  //store details of items and the name of the owner as well
  const OnListItem = async () => {
    if (
      !ItemName ||
      !ItemCat ||
      !ItemDesc ||
      !ItemEndDate ||
      !ItemShDesc ||
      !StartingPrice ||
      username == ""
    ) {
      alert("Enter valid fields or login");
    } else {
      const imgUrl = await OnUploadImage();

      // Continue code to store item details in Firestore
      const itemDetails = {
        ItemOwner: username,
        itemName: ItemName,
        itemCategory: ItemCat,
        itemDescription: ItemDesc,
        itemShortDescription: ItemShDesc,
        startingPrice: StartingPrice,
        endDate: ItemEndDate,
        imageUrl: imgUrl,
        TOPBID: StartingPrice,
        TopBidder: "",
      };

      try {
        const itemDetailsRef = collection(db, "itemdetails");
        await addDoc(itemDetailsRef, itemDetails);

        alert("Item listed successfully");
      } catch (error) {
        console.error("Error adding item details:", error.message);
        alert("Failed to list the item. Please try again.");
      }
    }
  };

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
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            ></input>{" "}
            <h3>Item short description</h3>
            <input
              type="text"
              className="inputing"
              placeholder=" Item short description"
              onChange={(e) => {
                setItemShDesc(e.target.value);
              }}
            ></input>
            <h3>Item category</h3>
            <input
              type="text"
              className="inputing"
              placeholder="  Item category"
              onChange={(e) => {
                setItemCat(e.target.value);
              }}
            ></input>
          </div>
          <div className="grid-item">
            <h3>Item image</h3>
            <input
              type="file"
              className="inputing y file"
              onChange={(e) => {
                setItemImage(e.target.files[0]);
              }}
            ></input>
            <h3>Starting price</h3>
            <input
              type="number"
              className="inputing y"
              placeholder="  0.00MAD"
              onChange={(e) => {
                setStartingPrice(e.target.value);
              }}
            ></input>
            <h3>End date</h3>
            <input
              type="date"
              className="inputing y"
              placeholder=" "
              onChange={(e) => {
                setItemEndDate(e.target.value);
              }}
            ></input>
          </div>
          <div className="grid-item">
            <h3>Item description</h3>
            <input
              type="text"
              className="inputing desc"
              placeholder="  Description"
              onChange={(e) => {
                setItemDesc(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <button className="gradient-button" onClick={OnListItem}>
          List item
        </button>
      </div>
    </div>
  );
}

export default ListItem;
