import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import "tachyons";
import Signup from "./components/signup/signup";
import ListItem from "./components/list_iem/list_item";
import Banner from "./components/banner/banner";
import Payment from "./components/payment/payment";
import UserContext from "./components/UserContext";
import { Myartciles } from "./components/myarticles/myarticles";

function App() {
  const [username, setUsername] = useState(""); //use usestate and usercontext to pass the username between elements

  return (
    <Router>
      <UserContext.Provider value={{ username, setUsername }}>
        <div className="App">
          <Navbar />
          <Banner />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sell" element={<ListItem />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/myarticles" element={<Myartciles />} />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
