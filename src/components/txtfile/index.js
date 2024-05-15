import React from "react";
import "./txtfile.css";
import txtImg from "../../assets/txtImg.png";

const TxtFile = ({ fileDisplayName }) => {
  return (
    <div id="file">
      <img id="txtfile-img" alt="" src={txtImg} />
      <h3>{fileDisplayName}</h3>
    </div>
  );
};

export default TxtFile;
