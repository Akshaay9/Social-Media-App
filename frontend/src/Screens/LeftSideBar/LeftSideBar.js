import React, { useState } from "react";
import SettingPanel from "../SettingsPanel/SettingPanel";
function LeftSideBar() {
  const [panel, setPanel] = useState({
    show: false,
    style: "bottom-left",
  });
  return (
    <>
      <div className="left_nav_bar">
        <ul>
          <li>
            <i class="fas fa-home"></i>
            News Feed
          </li>
          <li>
            <i class="fas fa-user-circle"></i>
            Profile
          </li>
          <li>
            <i class="fas fa-users"></i>
            People
          </li>
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
