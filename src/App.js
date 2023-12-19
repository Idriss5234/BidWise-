import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Footer from "./components/footer/footer";
import "tachyons";
import Signup from "./components/signup/signup";
import ListItem from "./components/list_iem/list_item";
import Banner from "./components/banner/banner";
import Payment from "./components/payment/payment";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sell" element={<ListItem />} />
          <Route path="/payement" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
