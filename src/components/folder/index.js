import React from "react";
import { useNavigate } from "react-router-dom";
import fileImg from "../../assets/fileImg.png";
import "./folder.css";

const Folder = ({ folderName, folderDisplayName }) => {
  // Upon click, navigate to corresponding page of folder
  const navigate = useNavigate();
  const openFolder = (name) => {
    navigate(`/${name}`);
  };
  return (
    <div id="folder" onClick={() => openFolder(folderName)}>
      <img id="file-img" alt="" src={fileImg} />
      <h3>{folderDisplayName}</h3>
    </div>
  );
};

export default Folder;
