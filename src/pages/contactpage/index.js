import React from "react";
import { useState } from "react";
import "./contact.css";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TxtFile from "../../components/txtfile";
import LinkedInLogo from "../../assets/linkedin.png";
import GithubLogo from "../../assets/github.png";
import Popup from "../../components/popup";

function ContactPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handleLinkedinClick = () => {
    const url = `https://www.linkedin.com/in/brenda-pham/`;
    window.open(url, "_blank");
  };
  const handleGithubClick = () => {
    const url = `https://github.com/blpham`;
    window.open(url, "_blank");
  };
  return (
    <div className="folder-background">
      <div className="openfolder-sidebar">
        <Sidebar />
      </div>
      <div className="folder-body">
        <div className="openfolder-nav">
          <Navbar folderName="contact me :)" />
        </div>
        <div className="contents">
          <div onClick={() => setButtonPopup(true)}>
            <TxtFile fileDisplayName="contact info" />
          </div>
          <div className="social-link" onClick={() => handleLinkedinClick()}>
            <img src={LinkedInLogo} />
            <h3>LinkedIn</h3>
          </div>
          <div className="social-link" onClick={() => handleGithubClick()}>
            <img src={GithubLogo} />
            <h3>Github</h3>
          </div>
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>contact me!</h1>
          <p>Email: blpham@csu.fullerton.edu</p>
        </Popup>
      </div>
    </div>
  );
}

export default ContactPage;
