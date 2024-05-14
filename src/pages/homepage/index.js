import React from "react";
import Folder from "../../components/folder";
import "./home.css";

function HomePage() {
  return (
    <div id="home-page">
      <Folder
        folderName="portfolio"
        folderDisplayName="brenda pham's portfolio ✩‧₊˚"
      />
    </div>
  );
}

export default HomePage;
