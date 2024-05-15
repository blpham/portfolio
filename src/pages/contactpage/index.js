import React from "react";
import "./contact.css";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TxtFile from "../../components/txtfile";
import LinkedInLogo from "../../assets/linkedin.png";
import GithubLogo from "../../assets/github.png";

function ContactPage() {
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
          <TxtFile fileDisplayName="contact info" />
          <div className="social-link" onClick={() => handleLinkedinClick()}>
            <img src={LinkedInLogo} />
            <h3>LinkedIn</h3>
          </div>
          <div className="social-link" onClick={() => handleGithubClick()}>
            <img src={GithubLogo} />
            <h3>Github</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
