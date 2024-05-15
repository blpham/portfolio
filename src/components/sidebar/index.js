import React from "react";
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
      <h2>Folders</h2>
      <div id="sidebar-links">
        <a href="/portfolio">
          <p>brenda pham's portfolio ✩‧₊˚</p>
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
