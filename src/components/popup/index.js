import React from "react";
import "./popup.css";
import ExitIcon from "../../assets/exiticon.png";

const Popup = (props) => {
  // If triggered, return popup page
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <img src={ExitIcon} />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
