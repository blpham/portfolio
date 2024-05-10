import React from "react";
import { useNavigate } from "react-router-dom";
import Folder from "../../components/folder";
import "./home.css";

function HomePage() {
  return (
    <div id="home-page">
      <Folder folderName="portfolio" folderDisplayName="brenda pham ✩‧₊˚" />
    </div>
  );
}

export default HomePage;
