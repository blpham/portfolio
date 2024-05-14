import React from "react";
import "./projects.css";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import Folder from "../../components/folder";
import TxtFile from "../../components/txtfile";

function ProjectsPage() {
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
          <TxtFile
            fileName="projects/canticum"
            fileDisplayName="canticum: AI music recommender"
          />
          <TxtFile
            fileName="projects/canticum"
            fileDisplayName="personal portfolio"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
