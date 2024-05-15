import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Folder from "../../components/folder";
import TxtFile from "../../components/txtfile";
import Popup from "../../components/popup";
import "./portfolio.css";

function PortfolioPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="folder-background">
      <div className="openfolder-sidebar">
        <Sidebar />
      </div>
      <div className="folder-body">
        <div className="openfolder-nav">
          <Navbar folderName="brenda pham ✩‧₊˚" />
        </div>
        <div className="contents">
          <div onClick={() => setButtonPopup(true)}>
            <TxtFile fileDisplayName="about me!" />
          </div>
          <Folder folderName="projects" folderDisplayName="projects" />
          <Folder folderName="experience" folderDisplayName="experience" />
          <Folder folderName="contact" folderDisplayName="contact me :)" />
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Hi, I'm Brenda!</h1>
          <h2>✩ about me...</h2>
          <p>
            A third year studying computer science at California State
            University, Fullerton. I love travelling, trying new things, and
            spending time with my loved ones. During my time in the field of
            computer science, I've been able to explore all sorts of new ideas.
            I enjoy working on the frontend, creating new and interesting
            designs where I can.
          </p>
          <h2>✩ education</h2>
          <p>B.S. Computer Science, California State University Fullerton</p>
          <p>August 2021 to May 2025</p>
        </Popup>
      </div>
    </div>
  );
}

export default PortfolioPage;
