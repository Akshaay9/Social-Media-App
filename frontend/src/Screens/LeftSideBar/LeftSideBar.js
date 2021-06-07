import React, { useState } from "react";
import SettingPanel from "../SettingsPanel/SettingPanel";
import { Link } from "react-router-dom";
function LeftSideBar({ individualUserStyle }) {
  const [panel, setPanel] = useState({
    show: false,
    style: "bottom-left",
  });
  return (
    <>
      <div
        className="left_nav_bar"
        style={
          individualUserStyle
            ? { position: "absolute", top: "100%", left: "5%" }
            : {}
        }
      >
        <ul>
          <Link to="/home">
            {" "}
            <li>
              <i class="fas fa-home"></i>
              News Feed
            </li>
          </Link>
          <Link to="/home/user">
            <li>
              <i class="fas fa-user-circle"></i>
              Profile
            </li>
          </Link>

          <Link to="/user/all">
            <li>
              <i class="fas fa-users"></i>
              People
            </li>
          </Link>
          <li
            style={
              panel.show
                ? { borderLeft: "2px solid #2d88ff", color: "#2d88ff" }
                : {}
            }
            onClick={() =>
              setPanel({
                ...panel,
                show: !panel.show,
              })
            }
          >
            <i class="fas fa-cog"></i>
            Setings
          </li>
          <li>
            <i class="fas fa-sign-out-alt"></i>
            Log-Out
          </li>
        </ul>
      </div>

      <SettingPanel panel={panel} />
    </>
  );
}

export default LeftSideBar;
