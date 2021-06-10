import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Link } from "react-router-dom";
function SettingPanel({ panel }) {
  const { presentUser } = useSelector((state) => state.Users);
  return (
    <>
      {panel.show && (
        <div className={`setting-panel ${panel.style}`}>
          <Link to={`/user/${presentUser?._id}`}>
            <div className="seeting-panel-top">
              <Avatar
                variant="rounded"
                alt="Remy Sharp"
                src={presentUser?.profileImage}
              />
              <div className="seeting-panel-top-user-details">
                <h4>{presentUser?.name}</h4>
                <p>See your profile</p>
              </div>
            </div>
          </Link>
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
