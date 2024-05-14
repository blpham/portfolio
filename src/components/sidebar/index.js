import React from "react";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

import pinkcircle from "../../assets/pinkcircle.png";
import yellowcircle from "../../assets/yellowcircle.png";
import greencircle from "../../assets/greencircle.png";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <div id="corner-buttons">
        <a href="/">
          <img src={pinkcircle} />
        </a>
        <img src={yellowcircle} />
        <img src={greencircle} />
      </div>
      <h2>Featured</h2>
      <div id="sidebar-links">
        <a href="/about">
          <p>about me!</p>
        </a>
        <a href="/projects">
          <p>projects</p>
        </a>
        <a href="/experience">
          <p>experience</p>
        </a>
        <a href="/contact">
          <p>contact me :)</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
