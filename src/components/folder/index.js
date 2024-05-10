import React from "react";
import fileImg from "../../assets/fileImg.png";
import "./folder.css";

const Folder = ({ folderName }) => {
  return (
    <div id="folder">
      <img id="file-img" alt="" src={fileImg} />
      <h1>{folderName}</h1>
    </div>
  );
};

export default Folder;
