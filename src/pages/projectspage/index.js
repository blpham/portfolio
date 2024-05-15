import React from "react";
import { useState } from "react";
import "./projects.css";
import Popup from "../../components/popup";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TxtFile from "../../components/txtfile";

function ProjectsPage() {
  const [CanticumButtonPopup, setCanticumButtonPopup] = useState(false);
  const [PortfolioButtonPopup, setPortfolioButtonPopup] = useState(false);
  return (
    <div className="folder-background">
      <div className="openfolder-sidebar">
        <Sidebar />
      </div>
      <div className="folder-body">
        <div className="openfolder-nav">
          <Navbar folderName="projects" />
        </div>
        <div className="contents">
          <div onClick={() => setCanticumButtonPopup(true)}>
            <TxtFile fileDisplayName="Canticum: AI music recommender" />
          </div>
          <div onClick={() => setPortfolioButtonPopup(true)}>
            <TxtFile fileDisplayName="Personal Portfolio" />
          </div>
        </div>
        <Popup
          trigger={CanticumButtonPopup}
          setTrigger={setCanticumButtonPopup}
        >
          <h1>Canticum: AI Music Recommendation System</h1>
          <a href="https://github.com/lyeric2022/canticum">view on Github</a>
          <p>- made for CPSC 481, Artificial Intelligence</p>
          <p>
            This is an AI music recommender based on audio features. It allows a
            user to input a song of their choice and recieve a list of similar
            sounding songs. These recommendations are based on a track's Audio
            Features, attributes provided by the Spotify Developers API. These
            will give numerical values to different audio attributes of a song,
            such as danceability, energy, key, tempo, etc. By taking these
            attribtes, along with a track's genre and popularity, we recommend
          </p>
          <h2>Tech Stack:</h2>
          <ul>
            <li>Python (Scikit-Learn, Pandas)</li>
            <li>React JS (JSX, CSS)</li>
            <li>Node JS</li>
            <li>Flask</li>
          </ul>
        </Popup>
        <Popup
          trigger={PortfolioButtonPopup}
          setTrigger={setPortfolioButtonPopup}
        >
          <h1>Personal Portfolio Website</h1>
          <a href="https://github.com/blpham/portfolio">view on Github</a>
          <p>- made for CPSC 349, Web Frontend Development</p>
          <p>
            This is my personal portfolio site (the website you're on right
            now)!! Built entirely with React JS. I implemented a file/folder
            design, heavily inspired by MacOS's Finder.
          </p>
          <h2>Tech Stack:</h2>
          <ul>
            <li>React JS (JSX, CSS)</li>
            <li>Node JS</li>
            <li>Vercel</li>
          </ul>
        </Popup>
      </div>
    </div>
  );
}

export default ProjectsPage;
