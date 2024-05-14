import React from "react";
import { useNavigate } from "react-router-dom";
import "./txtfile.css";
import txtImg from "../../assets/txtImg.png";

const TxtFile = ({ fileName, fileDisplayName }) => {
  const navigate = useNavigate();
  const openFile = (name) => {
    navigate(`/${name}`);
  };
  return (
    <div id="file" onClick={() => openFile(fileName)}>
      <img id="txtfile-img" alt="" src={txtImg} />
      <h3>{fileDisplayName}</h3>
    </div>
  );
};

export default TxtFile;
