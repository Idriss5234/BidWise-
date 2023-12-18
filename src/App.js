import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import Footer from "./components/footer/footer";
import "tachyons";
import Signup from "./components/signup/signup";
import ListItem from "./components/list_iem/list_item";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sell" element={<ListItem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
