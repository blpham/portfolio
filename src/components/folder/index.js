import React from "react";
import { useNavigate } from "react-router-dom";
import fileImg from "../../assets/fileImg.png";
import "./folder.css";

const Folder = ({ folderName, folderDisplayName }) => {
  const navigate = useNavigate();
  const openFolder = (name) => {
    navigate(`/${name}`);
  };
  return (
    <div id="folder" onClick={() => openFolder(folderName)}>
      <img id="file-img" alt="" src={fileImg} />
      <h1>{folderDisplayName}</h1>
    </div>
  );
};

export default Folder;
