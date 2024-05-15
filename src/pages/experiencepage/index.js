import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import TxtFile from "../../components/txtfile";
import Popup from "../../components/popup";

function ExperiencePage() {
  const [InternButtonPopup, setInternButtonPopup] = useState(false);
  const [WorkButtonPopup, setWorkButtonPopup] = useState(false);
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
          <div onClick={() => setInternButtonPopup(true)}>
            <TxtFile fileDisplayName="past internships" />
          </div>
          <div onClick={() => setWorkButtonPopup(true)}>
            <TxtFile fileDisplayName="work experience" />
          </div>
        </div>
        <Popup trigger={InternButtonPopup} setTrigger={setInternButtonPopup}>
          <h1>Previous Internships</h1>
          <h2>Summer 2023</h2>
          <h2>Google Step - Google Cloud Dataflow</h2>
        </Popup>
        <Popup trigger={WorkButtonPopup} setTrigger={setWorkButtonPopup}>
          <h1>Work Experience</h1>
          <h2>October 2023 - Present</h2>
          <h2>Utility Person - Disney's Grand Californian Hotel</h2>
          <h2>February 2022 - May 2023</h2>
          <h2>Barista/Cashier - R&B Tea Fullerton</h2>
        </Popup>
      </div>
    </div>
  );
}

export default ExperiencePage;
