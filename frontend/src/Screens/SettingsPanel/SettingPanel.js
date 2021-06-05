import { Avatar } from "@material-ui/core";
import React from "react";
import "./App.css";
function SettingPanel({ panel }) {
  return (
    <>
      {panel.show && (
        <div className={`setting-panel ${panel.style}`}>
          <div className="seeting-panel-top">
            <Avatar
              variant="rounded"
              alt="Remy Sharp"
              src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
            />
            <div className="seeting-panel-top-user-details">
              <h4>Akshay Nair</h4>
              <p>See your profile</p>
            </div>
          </div>
          <ul>
            <li>
              <i class="fas fa-sign-out-alt"></i>
              Log-Out
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SettingPanel;
