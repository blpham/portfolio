import React from "react";
import { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import TxtFile from "../components/txtfile";
import Popup from "../components/popup";

function ExperiencePage() {
  // Define and initialize states for popup pages
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
        {/* If triggered, display popup page with internship contents */}
        <Popup trigger={InternButtonPopup} setTrigger={setInternButtonPopup}>
          <h1>Previous Internships</h1>
          <h2>✩ Google STEP Intern - Google Cloud Dataflow</h2>
          <h3>Summer 2023</h3>
          <ul>
            <li>
              Integrated Google Cloud's Data Pipeline service within Apache
              Airflow UI, allowing users to create and run Data Pipelines
              through Airflow.
            </li>
            <li>
              Accomplished end-to-end development, including design document
              creation, design reviws, implementation, testing, and successful
              rollout to Apache Airflow and Data Pipelines users.
            </li>
          </ul>
          <h2>✩ Google STEP Intern - YouTube Live Interactivity</h2>
          <h3>Summer 2022</h3>
          <ul>
            <li>
              Enhanced Live Chat moderator experience on modile clients through
              the development of button to hid innapropriate content.
            </li>
            <li>
              Debugged existing code by updating deprecated fields and
              streamlining files for improved optimization and simplicity.
            </li>
          </ul>
        </Popup>
        {/* If triggered, display popup page with work experience */}
        <Popup trigger={WorkButtonPopup} setTrigger={setWorkButtonPopup}>
          <h1>Work Experience</h1>
          <h2>✩ Utility Person - Disney's Grand Californian Hotel</h2>
          <h3>October 2023 - Present</h3>
          <ul>
            <li>
              Wrap and package hundreds of baked goods daily, ensuring quality
              presentation and customer satisfaction.
            </li>
            <li>
              Maintain, organize, and fully stock storefront by promptly
              replenishing displays to meet customer demands.
            </li>
            <li>Conduct regular inventory counts to track stock levels.</li>
            <li>
              Assist customers with product inquiries and selections,
              contributing to a positive and welcoming atmosphere.
            </li>
          </ul>
          <h2>✩ Barista/Cashier - R&B Tea Fullerton</h2>
          <h3>February 2022 - May 2023</h3>
          <ul>
            <li>
              Prepared and served a variety of boba beverages, ensuring
              consistent quality and presentation according to established
              recipes and standards.
            </li>
            <li>
              Provided exceptional customer service by greeting and assisting
              customers with menu selections, dietary preferences, and special
              requests.
            </li>
            <li>
              Operated cash register and processed transactions accurately and
              efficiently, maintaining a balanced cash drawer at the end of each
              shift.
            </li>
            <li>
              Maintained cleanliness and organization of the beverage station
              and front-of-house area, including routine cleaning of equipment
              and work surfaces.
            </li>
          </ul>
        </Popup>
      </div>
    </div>
  );
}

export default ExperiencePage;
