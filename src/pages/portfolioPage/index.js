import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Folder from "../../components/folder";
import TxtFile from "../../components/txtfile";
import "./portfolio.css";

function PortfolioPage() {
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
          <TxtFile fileName="about" fileDisplayName="about me!" />
          <Folder folderName="projects" folderDisplayName="projects" />
          <Folder folderName="experience" folderDisplayName="experience" />
          <Folder folderName="contact" folderDisplayName="contact me :)" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
