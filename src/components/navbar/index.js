import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import backarrow from "../../assets/backarrow.png";
import forwardarrow from "../../assets/forwardarrow.png";

const Navbar = ({ folderName }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div id="arrows">
        <img
          src={backarrow}
          onClick={() => {
            navigate(-1); // navigate to previous page
          }}
        />
        <img
          src={forwardarrow}
          onClick={() => {
            navigate(+1); // navigate forward to page (if exists)
          }}
        />
      </div>
      <h1>{folderName}</h1>
    </div>
  );
};

export default Navbar;
