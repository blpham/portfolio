import React from "react";
import "./contact.css";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TxtFile from "../../components/txtfile";

function ContactPage() {
  return (
    <div className="folder-background">
      <div className="openfolder-sidebar">
        <Sidebar />
      </div>
      <div className="folder-body">
        <div className="openfolder-nav">
          <Navbar folderName="contact me :)" />
        </div>
        <div className="contents">
          <TxtFile fileName="contactinfo" fileDisplayName="contact info" />
          <TxtFile fileName="linkedin" fileDisplayName="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
