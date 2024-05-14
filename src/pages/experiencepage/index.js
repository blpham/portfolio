import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TxtFile from "../../components/txtfile";

function ExperiencePage() {
  return (
    <div className="folder-background">
      <div className="openfolder-sidebar">
        <Sidebar />
      </div>
      <div className="folder-body">
        <div className="openfolder-nav">
          <Navbar folderName="experience" />
        </div>
        <div className="contents">
          <TxtFile fileName="internships" fileDisplayName="past internships" />
          <TxtFile
            fileName="workexperience"
            fileDisplayName="work experience"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
