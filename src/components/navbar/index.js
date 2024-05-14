import React from "react";
import "./navbar.css";
import backarrow from "../../assets/backarrow.png";
import forwardarrow from "../../assets/forwardarrow.png";

const Navbar = ({ folderName }) => {
  return (
    <div className="navbar">
      <div id="arrows">
        <img src={backarrow} />
        <img src={forwardarrow} />
      </div>
      <h1>{folderName}</h1>
    </div>
  );
};

export default Navbar;
