import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Folder from "../../components/folder";
import TxtFile from "../../components/txtfile";
import Popup from "../../components/popup";
import "./portfolio.css";

function PortfolioPage() {
  // Define and initialize state for popup page
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="folder-background" id="portfolio-folder-background">
      <div className="openfolder-sidebar">
        <Sidebar />
      </div>
      <div className="folder-body">
        <div className="openfolder-nav">
          <Navbar folderName="brenda pham's portfolio ✩‧₊˚" />
        </div>
        <div className="contents">
          <div onClick={() => setButtonPopup(true)}>
            <TxtFile fileDisplayName="about me!" />
          </div>
          <Folder folderName="projects" folderDisplayName="projects" />
          <Folder folderName="experience" folderDisplayName="experience" />
          <Folder folderName="contact" folderDisplayName="contact me :)" />
        </div>
        {/* If triggered, display popup page with 'about me' contents */}
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Hi, I'm Brenda!</h1>
          <h2>✩ about me...</h2>
          <p>
            A third year studying computer science at California State
            University, Fullerton. I love travelling, trying new things, and
            spending time with my loved ones. During my time in the field of
            computer science, I've been able to explore all sorts of new ideas.
            I enjoy working on the frontend, creating new and interesting
            designs where I can :D
          </p>
          <h2>✩ education</h2>
          <h3>B.S. Computer Science, California State University Fullerton</h3>
          <p>August 2021 to May 2025</p>
          <h2>✩ technical skills</h2>
          <ul>
            <li>
              Programming Languages: C++, Python, HTML, Javascript, CSS, C, Java
            </li>
            <li>Frameworks: React JS, Flask</li>
            <li>Other Technologies: Apache Airflow, Pandas, Scikit Learn</li>
          </ul>
        </Popup>
      </div>
    </div>
  );
}

export default PortfolioPage;
